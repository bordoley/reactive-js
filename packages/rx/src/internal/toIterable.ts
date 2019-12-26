import { throwIfDisposed } from "@reactive-js/disposable";
import { OperatorLike, pipe } from "@reactive-js/pipe";
import {
  createVirtualTimeSchedulerResource,
  VirtualTimeSchedulerResourceLike,
} from "@reactive-js/schedulers";
import { ObservableLike, ErrorLike, ObserverLike } from "./interfaces";
import { observe } from "./observe";
import { subscribe } from "./subscribe";

const iteratorDone: IteratorReturnResult<any> = {
  done: true,
  value: undefined,
};

class ObservableIteratorImpl<T> implements Iterator<T>, ObserverLike<T> {
  private value: [T] | undefined = undefined;
  private error: ErrorLike | undefined = undefined;

  constructor(
    private readonly scheduler: VirtualTimeSchedulerResourceLike,
    observable: ObservableLike<T>,
  ) {
    const subscription = pipe(observable, observe(this), subscribe(scheduler));
    scheduler.add(subscription);
  }

  onNext(data: T) {
    const value = this.value;

    if (value === undefined) {
      this.value = [data];
    } else {
      value[0] = data;
    }
  }

  onComplete(error?: ErrorLike) {
    this.error = error;
  }

  next(): IteratorResult<T> {
    throwIfDisposed(this.scheduler);

    let done = false;

    do {
      this.value = undefined;
      done = this.scheduler.next().done || false;

      const error = this.error;
      if (error !== undefined) {
        const { cause } = error;
        throw cause;
      }
    } while (this.value === undefined && !done);

    if (done) {
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

  throw(e?: unknown): IteratorResult<T> {
    this.scheduler.dispose;
    if (e !== undefined) {
      throw e;
    }
    return iteratorDone;
  }
}
const defaultSchedulerFactory = () => createVirtualTimeSchedulerResource(1);
const toIterator = <T>(
  schedulerFactory: () => VirtualTimeSchedulerResourceLike = defaultSchedulerFactory,
): OperatorLike<ObservableLike<T>, Iterator<T>> => observable => {
  const scheduler = schedulerFactory();
  return new ObservableIteratorImpl(scheduler, observable);
};

class IterableObservable<T> implements Iterable<T> {
  constructor(
    private readonly observable: ObservableLike<T>,
    private readonly schedulerFactory: () => VirtualTimeSchedulerResourceLike,
  ) {}

  [Symbol.iterator](): Iterator<T> {
    return toIterator<T>(this.schedulerFactory)(this.observable);
  }
}

export const toIterable = <T>(
  schedulerFactory: () => VirtualTimeSchedulerResourceLike = defaultSchedulerFactory,
): OperatorLike<ObservableLike<T>, Iterable<T>> => observable =>
  new IterableObservable(observable, schedulerFactory);
