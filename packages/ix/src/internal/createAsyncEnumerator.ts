import { disposableMixin } from "@reactive-js/disposable";
import { pipe } from "@reactive-js/pipe";
import {
  createSubject,
  MulticastObservableLike,
  publish,
  SubscriberLike,
  ObservableOperatorLike,
  SafeSubscriberLike,
  toSafeSubscriber,
} from "@reactive-js/rx";
import {
  SchedulerLike,
  SchedulerContinuationLike,
} from "@reactive-js/scheduler";
import { AsyncEnumeratorResourceLike } from "./interfaces";

class AsyncEnumeratorResourceImpl<TReq, T>
  implements AsyncEnumeratorResourceLike<TReq, T> {
  readonly add = disposableMixin.add;
  readonly dispose = disposableMixin.dispose;

  constructor(
    readonly disposable: SafeSubscriberLike<TReq>,
    private readonly observable: MulticastObservableLike<T>,
  ) {}

  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }

  get now(): number {
    return this.disposable.now;
  }

  get subscriberCount(): number {
    return this.observable.subscriberCount;
  }

  notifySafe(req: TReq) {
    this.disposable.notifySafe(req);
  }

  schedule(continuation: SchedulerContinuationLike) {
    return this.disposable.schedule(continuation);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.observable.subscribe(subscriber);
  }
}

export const createAsyncEnumerator = <TReq, T>(
  operator: ObservableOperatorLike<TReq, T>,
  scheduler: SchedulerLike,
  replayCount = 0,
): AsyncEnumeratorResourceLike<TReq, T> => {
  const subject = createSubject(scheduler);
  const observable = pipe(subject, operator, publish(scheduler, replayCount));
  const safeSubscriber = toSafeSubscriber(subject);
  safeSubscriber.add(observable);

  return new AsyncEnumeratorResourceImpl(safeSubscriber, observable);
};
