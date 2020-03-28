import { EnumeratorLike } from "@reactive-js/enumerable";
import {
  AbstractDelegatingSubscriber,
  createSubject,
  MulticastObservableLike,
  ObservableLike,
  publish,
  SubscriberLike,
  ObservableOperatorLike,
  SafeSubscriberLike,
  toSafeSubscriber,
} from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";
import { AsyncEnumerableLike, AsyncEnumeratorLike } from "./interfaces";

/** @ignore */
export class AsyncEnumeratorImpl<TReq, T>
  extends AbstractDelegatingSubscriber<TReq, TReq>
  implements AsyncEnumeratorLike<TReq, T> {
  readonly isSynchronous = false;

  constructor(
    delegate: SafeSubscriberLike<TReq>,
    private readonly observable: MulticastObservableLike<T>,
  ) {
    super(delegate);
    this.add(observable);
  }

  get subscriberCount(): number {
    return this.observable.subscriberCount;
  }

  notify(req: TReq) {
    this.delegate.notify(req);
  }

  dispatch(req: TReq) {
    (this.delegate as SafeSubscriberLike<TReq>).dispatch(req);
  }

  enumerate(): EnumeratorLike<void, T> {
    return this.observable.enumerate();
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.observable.subscribe(subscriber);
  }
}

/** @ignore */
export const createAsyncEnumerator = <TReq, T>(
  operator: ObservableOperatorLike<TReq, T>,
  scheduler: SchedulerLike,
  replayCount = 0,
): AsyncEnumeratorLike<TReq, T> => {
  const subject = createSubject<TReq>(scheduler);

  const safeSubscriber = toSafeSubscriber(subject);
  const observable = pipe(subject, operator, publish(scheduler, replayCount));

  return new AsyncEnumeratorImpl(safeSubscriber, observable);
};


class AsyncEnumerableImpl<TReq, TData> implements AsyncEnumerableLike<TReq, TData> {
  constructor(
    private readonly op: (src: ObservableLike<TReq>) => ObservableLike<TData>,
  ) { };

  enumerateAsync(
    scheduler: SchedulerLike,
    replayCount?: number,
  ): AsyncEnumeratorLike<TReq, TData> {
    const subject = createSubject<TReq>(scheduler);
    const safeSubscriber = toSafeSubscriber(subject);
    const observable = pipe(subject, this.op, publish(scheduler, replayCount));

    return new AsyncEnumeratorImpl(safeSubscriber, observable);
  };
}

export const createAsyncEnumerable = <TReq, TData>(
  op: (src: ObservableLike<TReq>) => ObservableLike<TData>,
) => new AsyncEnumerableImpl(op);