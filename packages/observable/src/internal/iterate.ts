import {
  connect,
  ObservableLike,
  ErrorLike,
  ObserverLike,
} from "@reactive-js/rx";
import {
  createSynchronousSchedulerResource,
  VirtualTimeSchedulerResourceLike,
} from "@reactive-js/schedulers";
import { observe, onComplete, onNext } from "./observe";
import { reduce } from "./reduce";
import { OperatorLike, pipe } from "@reactive-js/pipe";
import {
  DisposableLike,
  DisposableOrTeardown,
  throwIfDisposed,
} from "@reactive-js/disposable";

export const iterate = <T>(
  schedulerFactory: () => VirtualTimeSchedulerResourceLike = createSynchronousSchedulerResource,
): OperatorLike<ObservableLike<T>, void> => observable => {
  const scheduler = schedulerFactory();

  let error: ErrorLike | undefined = undefined;
  const subscription = pipe(
    observable,
    onComplete(e => {
      error = e;
    }),
    connect(scheduler),
  );
  scheduler.run();
  scheduler.dispose();
  subscription.dispose();

  if (error !== undefined) {
    const { cause } = error;
    throw cause;
  }
};

const blockingLast = <T>(
  schedulerFactory?: () => VirtualTimeSchedulerResourceLike,
): OperatorLike<ObservableLike<T>, T> => observable => {
  let result: T | undefined = undefined;

  const observer = (x: T) => {
    result = x;
  };

  pipe(observable, onNext(observer), iterate(schedulerFactory));

  if (result === undefined) {
    throw new Error("Observable did not produce any values");
  }
  return result;
};

const toArrayReducer = <T>(acc: T[], next: T): T[] => {
  acc.push(next);
  return acc;
};

export const toArray = <T>(
  schedulerFactory?: () => VirtualTimeSchedulerResourceLike,
): OperatorLike<ObservableLike<T>, readonly T[]> => observable =>
  pipe(
    observable,
    reduce(toArrayReducer, (): T[] => []),
    blockingLast(schedulerFactory),
  );

export interface IteratorResource<T> extends Iterator<T>, DisposableLike {}

const iteratorDone: IteratorReturnResult<any> = {
  done: true,
  value: undefined,
};

class ObservableIteratorResourceImpl<T> implements IteratorResource<T> {
  private readonly scheduler: VirtualTimeSchedulerResourceLike;

  private value: [T] | undefined = undefined;
  private error: ErrorLike | undefined = undefined;

  constructor(
    scheduler: VirtualTimeSchedulerResourceLike,
    observable: ObservableLike<T>,
  ) {
    this.scheduler = scheduler;

    const observer: ObserverLike<T> = {
      next: (value: T) => {
        this.value = [value];
      },
      complete: e => {
        this.error = e;
      },
    };
    const subscription = pipe(
      observable,
      observe(observer),
      connect(scheduler),
    );
    scheduler.add(subscription);
  }

  get isDisposed(): boolean {
    return this.scheduler.isDisposed;
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.scheduler.add(disposable, ...disposables);
  }

  dispose() {
    this.scheduler.dispose();
  }

  next(): IteratorResult<T> {
    throwIfDisposed(this);

    let done = false;

    do {
      this.value = undefined;
      done = this.scheduler.next().done || false;
      if (this.error !== undefined) {
        const { cause } = this.error;
        throw cause;
      }
    } while (this.value === undefined && !done);

    if (done) {
      return iteratorDone;
    } else {
      const [value] = this.value || [];
      return { done: false, value };
    }
  }

  return(): IteratorResult<T> {
    this.dispose();
    return iteratorDone;
  }

  throw(e?: any): IteratorResult<T> {
    this.dispose;
    if (e !== undefined) {
      throw e;
    }
    return iteratorDone;
  }

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.scheduler.remove(disposable, ...disposables);
  }
}

export const toIterator = <T>(
  schedulerFactory: () => VirtualTimeSchedulerResourceLike = createSynchronousSchedulerResource,
): OperatorLike<ObservableLike<T>, IteratorResource<T>> => observable => {
  const scheduler = schedulerFactory();
  return new ObservableIteratorResourceImpl(scheduler, observable);
};

class IterableObservable<T> implements Iterable<T> {
  private readonly observable: ObservableLike<T>;
  private readonly schedulerFactory: () => VirtualTimeSchedulerResourceLike;

  constructor(
    observable: ObservableLike<T>,
    schedulerFactory: () => VirtualTimeSchedulerResourceLike,
  ) {
    this.observable = observable;
    this.schedulerFactory = schedulerFactory;
  }

  [Symbol.iterator](): Iterator<T> {
    return toIterator<T>(this.schedulerFactory)(this.observable);
  }
}

export const toIterable = <T>(
  schedulerFactory: () => VirtualTimeSchedulerResourceLike = createSynchronousSchedulerResource,
): OperatorLike<ObservableLike<T>, Iterable<T>> => observable =>
  new IterableObservable(observable, schedulerFactory);
