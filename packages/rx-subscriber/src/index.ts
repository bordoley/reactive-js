import { DisposableLike, DisposableOrTeardown } from "@reactive-js/disposable";

import { ObserverLike } from "@reactive-js/rx-observer";
import {
  SchedulerContinuation,
  SchedulerContinuationResult,
  SchedulerLike,
  SchedulerResourceLike,
} from "@reactive-js/scheduler";

/** @noInheritDoc */
export interface SubscriberLike<T>
  extends ObserverLike<T>,
    DisposableLike,
    SchedulerResourceLike {
  readonly isConnected: boolean;
}

/** @noInheritDoc */
export interface ConnectableSubscriberLike<T> extends SubscriberLike<T> {
  isConnected: boolean;
}

const checkState = <T>(subscriber: SubscriberLike<T>) => {
  if (!subscriber.inScheduledContinuation) {
    throw new Error(
      "Attempted to notify subscriber from outside of it's scheduler",
    );
  } else if (!subscriber.isConnected) {
    throw new Error("Attempted to notify subscriber before it is connected");
  }
};

const __DEV__ = process.env.NODE_ENV !== "production";

abstract class AbstractSubscriberImpl<T> implements SubscriberLike<T> {
  get inScheduledContinuation(): boolean {
    return this.scheduler.inScheduledContinuation;
  }

  abstract get isConnected(): boolean;

  get isDisposed() {
    return this.subscription.isDisposed;
  }

  get now() {
    return this.scheduler.now;
  }
  readonly scheduler: SchedulerLike;
  readonly subscription: DisposableLike;

  constructor(scheduler: SchedulerLike, subscription: DisposableLike) {
    this.scheduler = scheduler;
    this.subscription = subscription;
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.subscription.add(disposable, ...disposables);
  }
  abstract complete(_error?: Error): void;

  dispose() {
    this.subscription.dispose();
  }
  abstract next(data: T): void;

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.subscription.remove(disposable, ...disposables);
  }

  schedule(
    continuation: SchedulerContinuation,
    delay?: number,
    priority?: number,
  ): DisposableLike {
    const schedulerSubscription = this.scheduler.schedule(
      continuation,
      delay,
      priority,
    );
    this.add(schedulerSubscription);
    schedulerSubscription.add(() => this.remove(schedulerSubscription));
    return schedulerSubscription;
  }
}

class AutoDisposingSubscriberImpl<T> extends AbstractSubscriberImpl<T>
  implements ConnectableSubscriberLike<T> {
  isConnected = false;

  constructor(scheduler: SchedulerLike, subscription: DisposableLike) {
    super(scheduler, subscription);
  }

  complete(_error?: Error) {
    if (__DEV__) {
      checkState(this);
    }

    this.dispose();
  }

  next(data: T) {
    if (__DEV__) {
      checkState(this);
    }
  }
}

export const create = <T>(
  scheduler: SchedulerLike,
  subscription: DisposableLike,
): ConnectableSubscriberLike<T> =>
  new AutoDisposingSubscriberImpl(scheduler, subscription);

const getSubscriberScheduler = <T>(
  delegate: SubscriberLike<T>,
): SchedulerLike =>
  delegate instanceof DelegatingSubscriber
    ? delegate.scheduler
    : delegate instanceof AutoDisposingSubscriberImpl
    ? delegate.scheduler
    : delegate;

const getSubscriberSubscription = <T>(
  delegate: SubscriberLike<T>,
): DisposableLike =>
  delegate instanceof DelegatingSubscriber
    ? delegate.subscription
    : delegate instanceof AutoDisposingSubscriberImpl
    ? delegate.subscription
    : delegate;

/** @noInheritDoc */

export abstract class DelegatingSubscriber<
  TA,
  TB
> extends AbstractSubscriberImpl<TA> {
  /** @ignore */
  get isConnected() {
    return this.source.isConnected;
  }
  readonly delegate: ObserverLike<TB>;

  private isStopped = false;
  private readonly source: SubscriberLike<any>;

  constructor(delegate: SubscriberLike<TB>) {
    super(
      getSubscriberScheduler(delegate),
      getSubscriberSubscription(delegate),
    );

    this.delegate = delegate;

    this.source =
      delegate instanceof DelegatingSubscriber ? delegate.source : delegate;

    this.add(() => {
      this.isStopped = true;
    });
  }

  /** @ignore */
  complete(error?: Error) {
    if (__DEV__) {
      checkState(this);
    }

    if (!this.isStopped) {
      this.isStopped = true;
      this.tryOnComplete(error);
    }
  }

  /** @ignore */
  next(data: TA) {
    if (__DEV__) {
      checkState(this);
    }

    if (!this.isStopped) {
      this.tryOnNext(data);
    }
  }

  protected abstract onComplete(error?: Error): void;

  protected abstract onNext(data: TA): void;

  private tryOnComplete(error?: Error) {
    try {
      this.onComplete(error);
    } catch (e) {
      // FIXME: if error isn't null the delegate error should
      // reference both exceptions so that we don't swallow them.
      this.delegate.complete(e);
    }
  }

  private tryOnNext(data: TA) {
    try {
      this.onNext(data);
    } catch (e) {
      this.complete(e);
    }
  }
}

class ObserveSubscriber<T> extends DelegatingSubscriber<T, T> {
  private observer: ObserverLike<T>;

  constructor(delegate: SubscriberLike<T>, observer: ObserverLike<T>) {
    super(delegate);
    this.observer = observer;
  }

  protected onComplete(error?: Error) {
    this.observer.complete(error);
    this.delegate.complete(error);
  }

  protected onNext(data: T) {
    this.observer.next(data);
    this.delegate.next(data);
  }
}

export interface SubscriberOperator<A, B> {
  (subscriber: SubscriberLike<B>): SubscriberLike<A>;
}

export const observe = <T>(
  observer: ObserverLike<T>,
): SubscriberOperator<T, T> => (subscriber: SubscriberLike<T>) =>
  new ObserveSubscriber(subscriber, observer);

class SafeObserver<T> implements ObserverLike<T> {
  private get remainingEvents() {
    return this.nextQueue.length + (this.isComplete ? 1 : 0);
  }
  private readonly continuation: SchedulerContinuationResult;
  private error: Error | undefined;

  private isComplete = false;
  private readonly nextQueue: Array<T> = [];
  private readonly priority?: number;
  private readonly subscriber: SubscriberLike<T>;

  constructor(subscriber: SubscriberLike<T>, priority?: number) {
    this.subscriber = subscriber;
    this.priority = priority;

    this.continuation = {
      continuation: this.drainQueue,
      priority: this.priority,
    };

    this.subscriber.add(this.clearQueue);
  }

  complete(error?: Error) {
    if (!this.isComplete) {
      this.isComplete = true;
      this.error = error;
      this.scheduleDrainQueue();
    }
  }

  next(data: T) {
    if (!this.isComplete) {
      this.nextQueue.push(data);
      this.scheduleDrainQueue();
    }
  }
  private readonly clearQueue: DisposableOrTeardown = () => {
    this.nextQueue.length = 0;
  };

  private readonly drainQueue: SchedulerContinuation = shouldYield => {
    while (this.nextQueue.length > 0) {
      const next = this.nextQueue.shift() as T;
      this.subscriber.next(next);

      const yieldRequest = shouldYield();
      const hasMoreEvents = this.remainingEvents > 0;

      if (yieldRequest && hasMoreEvents) {
        return this.continuation;
      }
    }

    if (this.isComplete) {
      this.subscriber.remove(this.clearQueue);
      this.subscriber.complete(this.error);
    }
    return;
  };

  private scheduleDrainQueue() {
    if (this.remainingEvents === 1) {
      this.subscriber.schedule(this.drainQueue, 0, this.priority);
    }
  }
}

export const toSafeObserver = <T>(
  subscriber: SubscriberLike<T>,
  priority?: number,
): ObserverLike<T> => new SafeObserver(subscriber, priority);

export function pipe<T, A>(
  src: SubscriberLike<T>,
  op1: SubscriberOperator<T, A>,
): SubscriberLike<A>;
export function pipe<T, A, B>(
  src: SubscriberLike<T>,
  op1: SubscriberOperator<T, A>,
  op2: SubscriberOperator<A, B>,
): SubscriberLike<B>;
export function pipe<T, A, B, C>(
  src: SubscriberLike<T>,
  op1: SubscriberOperator<T, A>,
  op2: SubscriberOperator<A, B>,
  op3: SubscriberOperator<B, C>,
): SubscriberLike<C>;
export function pipe<T, A, B, C, D>(
  src: SubscriberLike<T>,
  op1: SubscriberOperator<T, A>,
  op2: SubscriberOperator<A, B>,
  op3: SubscriberOperator<B, C>,
  op4: SubscriberOperator<C, D>,
): SubscriberLike<D>;
export function pipe<T, A, B, C, D, E>(
  src: SubscriberLike<T>,
  op1: SubscriberOperator<T, A>,
  op2: SubscriberOperator<A, B>,
  op3: SubscriberOperator<B, C>,
  op4: SubscriberOperator<C, D>,
  op5: SubscriberOperator<D, E>,
): SubscriberLike<E>;
export function pipe<T, A, B, C, D, E, F>(
  src: SubscriberLike<T>,
  op1: SubscriberOperator<T, A>,
  op2: SubscriberOperator<A, B>,
  op3: SubscriberOperator<B, C>,
  op4: SubscriberOperator<C, D>,
  op5: SubscriberOperator<D, E>,
  op6: SubscriberOperator<E, F>,
): SubscriberLike<F>;
export function pipe<T, A, B, C, D, E, F, G>(
  src: SubscriberLike<T>,
  op1: SubscriberOperator<T, A>,
  op2: SubscriberOperator<A, B>,
  op3: SubscriberOperator<B, C>,
  op4: SubscriberOperator<C, D>,
  op5: SubscriberOperator<D, E>,
  op6: SubscriberOperator<E, F>,
  op7: SubscriberOperator<F, G>,
): SubscriberLike<G>;
export function pipe<T, A, B, C, D, E, F, G, H>(
  src: SubscriberLike<T>,
  op1: SubscriberOperator<T, A>,
  op2: SubscriberOperator<A, B>,
  op3: SubscriberOperator<B, C>,
  op4: SubscriberOperator<C, D>,
  op5: SubscriberOperator<D, E>,
  op6: SubscriberOperator<E, F>,
  op7: SubscriberOperator<F, G>,
  op8: SubscriberOperator<G, H>,
): SubscriberLike<H>;
export function pipe<T, A, B, C, D, E, F, G, H, I>(
  src: SubscriberLike<T>,
  op1: SubscriberOperator<T, A>,
  op2: SubscriberOperator<A, B>,
  op3: SubscriberOperator<B, C>,
  op4: SubscriberOperator<C, D>,
  op5: SubscriberOperator<D, E>,
  op6: SubscriberOperator<E, F>,
  op7: SubscriberOperator<F, G>,
  op8: SubscriberOperator<G, H>,
  op9: SubscriberOperator<H, I>,
): SubscriberLike<I>;
export function pipe(
  subscriber: SubscriberLike<any>,
  ...operators: SubscriberOperator<any, any>[]
): SubscriberLike<any> {
  return operators.reduceRight((acc, next) => next(acc), subscriber);
}
