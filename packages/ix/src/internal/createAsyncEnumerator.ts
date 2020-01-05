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
import { SchedulerLike } from "@reactive-js/scheduler";
import { AsyncEnumeratorResourceLike } from "./interfaces";

/** @ignore */
export class AsyncEnumeratorResourceImpl<TReq, T>
  implements AsyncEnumeratorResourceLike<TReq, T> {
  readonly add = disposableMixin.add;
  readonly dispose = disposableMixin.dispose;

  constructor(
    // FIXME: Totally not safe. Subject is a subscriber. We should wrap it in a safeObserver.
    readonly disposable: SubjectLike<TReq>,
    private readonly observable: MulticastObservableLike<T>,
  ) {}

  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }

  get subscriberCount(): number {
    return this.observable.subscriberCount;
  }

  dispatch(req: TReq) {
    // FIXME: need to use an observer not a subscriber.
    this.disposable.notifyNext(req);
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
  const dispatcher = createSubject(scheduler);
  const observable = pipe(
    dispatcher,
    operator,
    publish(scheduler, replayCount),
  );
  dispatcher.add(observable);

  return new AsyncEnumeratorResourceImpl(dispatcher, observable);
};
