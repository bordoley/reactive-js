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
import { throwIfDisposed } from "@reactive-js/disposable";

const iterate = <T>(
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

const iteratorDone: IteratorReturnResult<any> = {
  done: true,
  value: undefined,
};

class ObservableIteratorImpl<T> implements Iterator<T> {
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

  next(): IteratorResult<T> {
    throwIfDisposed(this.scheduler);

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
      // Cleanup
      this.scheduler.dispose();
      return iteratorDone;
    } else {
      const [value] = this.value || [];
      return { done: false, value };
    }
  }

  return(): IteratorResult<T> {
    this.scheduler.dispose();
    return iteratorDone;
  }

  throw(e?: any): IteratorResult<T> {
    this.scheduler.dispose;
    if (e !== undefined) {
      throw e;
    }
    return iteratorDone;
  }
}

const toIterator = <T>(
  schedulerFactory: () => VirtualTimeSchedulerResourceLike = createSynchronousSchedulerResource,
): OperatorLike<ObservableLike<T>, Iterator<T>> => observable => {
  const scheduler = schedulerFactory();
  return new ObservableIteratorImpl(scheduler, observable);
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
