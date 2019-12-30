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
import { AsyncIteratorResourceLike } from "./interfaces";

class AsyncIteratorResourceImpl<TReq, T>
  implements AsyncIteratorResourceLike<TReq, T> {
  add = disposableMixin.add;
dispose = disposableMixin.dispose;
remove = disposableMixin.remove;
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

export const createAsyncIteratorResource = <TReq, T>(
  operator: ObservableOperatorLike<TReq, T>,
  scheduler: SchedulerLike,
  replayCount = 0,
): AsyncIteratorResourceLike<TReq, T> => {
  const dispatcher = createSubject();
  const observable = pipe(
    dispatcher,
    operator,
    publish(scheduler, replayCount),
  );
  dispatcher.add(observable);

  return new AsyncIteratorResourceImpl(dispatcher, observable);
};

/** @ignore */
export const createEventEmitter = <T>(
  replayCount?: number,
): AsyncIteratorResourceLike<T, T> => {
  const dispatcher = createSubject(replayCount);
  return new AsyncIteratorResourceImpl(dispatcher, dispatcher);
};
