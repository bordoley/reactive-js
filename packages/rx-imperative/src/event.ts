import { Subject, SubjectLike } from "./subject";
import {
  ObservableLike,
  ObservableResourceLike,
  SubscriberLike,
} from "@reactive-js/rx-core";

import { DisposableOrTeardown} from "@reactive-js/disposables";

export interface EventLike<T> extends ObservableLike<T> {
  dispatch(event: T): void;
}

export interface EventResourceLike<T>
  extends EventLike<T>,
    ObservableResourceLike<T> {}

class EventResourceImpl<T> implements EventResourceLike<T> {
  private readonly subject: SubjectLike<T>;

  constructor(priority?: number) {
    this.subject = Subject.create(priority);
  }

  get isDisposed() {
    return this.subject.isDisposed;
  }

  add(disposable: DisposableOrTeardown) {
    this.subject.add(disposable);
  }

  dispose() {
    this.subject.dispose();
  }

  remove(disposable: DisposableOrTeardown) {
    this.subject.remove(disposable);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.subject.subscribe(subscriber);
  }

  dispatch(event: T) {
    this.subject.next(event);
  }
}

const create = <T>(priority?: number): EventResourceLike<T> =>
  new EventResourceImpl(priority);

export const EventResource = {
  create,
};
