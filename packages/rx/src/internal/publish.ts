import { disposableMixin } from "@reactive-js/disposable";
import { pipe, OperatorLike } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";
import {
  MulticastObservableResourceLike,
  ObservableLike,
  SubjectResourceLike,
  SubscriberLike,
} from "./interfaces";
import { observe } from "./observe";
import { subscribe } from "./subscribe";
import { createSubject } from "./subject";

class PublishObservable<T> implements MulticastObservableResourceLike<T> {
  readonly add = disposableMixin.add;
  readonly dispose = disposableMixin.dispose;
  readonly remove = disposableMixin.remove;

  constructor(readonly disposable: SubjectResourceLike<T>) {}

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
  MulticastObservableResourceLike<T>
> => observable => {
  const subject = createSubject(replayCount);
  subject.add(pipe(observable, observe(subject), subscribe(scheduler)));
  return new PublishObservable(subject);
};
