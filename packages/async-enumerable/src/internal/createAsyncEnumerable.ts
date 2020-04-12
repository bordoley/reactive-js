import {
  AbstractDelegatingSubscriber,
  createSubject,
  MulticastObservableLike,
  publish,
  SubscriberLike,
  SafeSubscriberLike,
  toSafeSubscriber,
  ObservableOperatorLike,
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

  subscribe(subscriber: SubscriberLike<T>) {
    this.observable.subscribe(subscriber);
  }
}

export const createAsyncEnumerator = <TReq, TData>(
  op: ObservableOperatorLike<TReq, TData>,
  scheduler: SchedulerLike,
  replayCount?: number,
): AsyncEnumeratorLike<TReq, TData> => {
  const subject = createSubject<TReq>(scheduler);
  const safeSubscriber = toSafeSubscriber(subject);
  const observable = pipe(subject, op, publish(scheduler, replayCount));

  return new AsyncEnumeratorImpl(safeSubscriber, observable);
};

/** @ignore */
export class AsyncEnumerableImpl<TReq, TData>
  implements AsyncEnumerableLike<TReq, TData> {
  constructor(private readonly op: ObservableOperatorLike<TReq, TData>) {}

  enumerateAsync(
    scheduler: SchedulerLike,
    replayCount?: number,
  ): AsyncEnumeratorLike<TReq, TData> {
    return createAsyncEnumerator(this.op, scheduler, replayCount);
  }
}

export const createAsyncEnumerable = <TReq, TData>(
  op: ObservableOperatorLike<TReq, TData>,
): AsyncEnumerableLike<TReq, TData> => new AsyncEnumerableImpl(op);
