import { disposableMixin } from "@reactive-js/disposable";
import { pipe } from "@reactive-js/pipe";
import {
  createSubject,
  MulticastObservableLike,
  publish,
  SubjectResourceLike,
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
    readonly disposable: SubjectResourceLike<TReq>,
    private readonly observable: MulticastObservableLike<T>,
  ) {}

  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }

  get subscriberCount(): number {
    return this.observable.subscriberCount;
  }

  dispatch(req: TReq) {
    this.disposable.onNext(req);
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
  const dispatcher = createSubject();
  const observable = pipe(
    dispatcher,
    operator,
    publish(scheduler, replayCount),
  );
  dispatcher.add(observable);

  return new AsyncEnumeratorResourceImpl(dispatcher, observable);
};
