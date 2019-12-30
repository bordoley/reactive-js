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
  constructor(readonly disposable: SubjectResourceLike<T>) {}

  get subscriberCount() {
    return this.disposable.subscriberCount;
  }

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  add = disposableMixin.add;

  dispose = disposableMixin.dispose;

  remove = disposableMixin.remove;

  subscribe(subscriber: SubscriberLike<T>): void {
    this.disposable.subscribe(subscriber);
  }
}

export const publish = <T>(
  scheduler: SchedulerLike,
  replayCount: number = 0,
): OperatorLike<
  ObservableLike<T>,
  MulticastObservableResourceLike<T>
> => observable => {
  const subject = createSubject(replayCount);
  subject.add(pipe(observable, observe(subject), subscribe(scheduler)));
  return new PublishObservable(subject);
};
