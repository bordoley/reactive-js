import { pipe } from "@reactive-js/pipe";
import {
  AbstractDelegatingSubscriber,
  createSubject,
  MulticastObservableLike,
  publish,
  SubscriberLike,
  ObservableOperatorLike,
  SafeSubscriberLike,
  toSafeSubscriber,
} from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";
import { AsyncEnumeratorLike } from "./interfaces";

class AsyncEnumeratorImpl<TReq, T>
  extends AbstractDelegatingSubscriber<TReq, TReq>
  implements AsyncEnumeratorLike<TReq, T> {
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

  notifySafe(req: TReq) {
    (this.delegate as SafeSubscriberLike<TReq>).notifySafe(req);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.observable.subscribe(subscriber);
  }
}

/**
 * 
 * 
 * @param operator 
 * @param scheduler 
 * @param replayCount 
 */
export const createAsyncEnumerator = <TReq, T>(
  operator: ObservableOperatorLike<TReq, T>,
  scheduler: SchedulerLike,
  replayCount = 0,
): AsyncEnumeratorLike<TReq, T> => {
  const subject = createSubject(scheduler);

  const safeSubscriber = toSafeSubscriber(subject);
  const observable = pipe(subject, operator, publish(scheduler, replayCount));

  return new AsyncEnumeratorImpl(safeSubscriber, observable);
};
