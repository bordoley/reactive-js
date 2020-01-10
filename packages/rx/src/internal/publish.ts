import { disposableMixin } from "@reactive-js/disposable";
import { OperatorLike } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";
import {
  MulticastObservableLike,
  ObservableLike,
  SubscriberLike,
  SubjectLike,
} from "./interfaces";
import { createSubject } from "./subject";

class PublishObservable<T> implements MulticastObservableLike<T> {
  readonly add = disposableMixin.add;
  readonly dispose = disposableMixin.dispose;

  constructor(readonly disposable: SubjectLike<T>) {}

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  get subscriberCount() {
    return this.disposable.subscriberCount;
  }

  subscribe(subscriber: SubscriberLike<T>): void {
    this.disposable.subscribe(subscriber);
  }
}

export const publish = <T>(
  scheduler: SchedulerLike,
  replayCount = 0,
): OperatorLike<
  ObservableLike<T>,
  MulticastObservableLike<T>
> => observable => {
  const subject = createSubject(scheduler, replayCount);
  observable.subscribe(subject);
  return new PublishObservable(subject);
};
