import { disposableMixin } from "@reactive-js/disposable";
import { pipe } from "@reactive-js/pipe";
import {
  createSubject,
  MulticastObservableLike,
  publish,
  SubjectLike,
  SubscriberLike,
  ObservableOperatorLike,
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
    readonly disposable: SubjectLike<TReq>,
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

  notify(req: TReq) {
    // FIXME: need to use an observer not a subscriber.
    this.disposable.notify(req);
  }

  schedule(continuation: SchedulerContinuationLike, delay?: number) {
    return this.disposable.schedule(continuation, delay);
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
  const notify = createSubject(scheduler);
  const observable = pipe(notify, operator, publish(scheduler, replayCount));
  notify.add(observable);

  return new AsyncEnumeratorResourceImpl(notify, observable);
};
