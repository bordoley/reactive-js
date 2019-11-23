import {
  ObservableLike,
  ObservableResourceLike,
  SubscriberLike,
} from "@reactive-js/rx-core";
import { Subject, SubjectResourceLike } from "./subject";

import { DisposableOrTeardown } from "@reactive-js/disposable";

export interface EventLike<T> extends ObservableLike<T> {
  dispatch(event: T): void;
}

export interface EventResourceLike<T>
  extends EventLike<T>,
    ObservableResourceLike<T> {}

class EventResourceImpl<T> implements EventResourceLike<T> {
  get isDisposed() {
    return this.subject.isDisposed;
  }
  private readonly subject: SubjectResourceLike<T>;

  constructor(priority?: number) {
    this.subject = Subject.create(priority);
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.subject.add(disposable, ...disposables);
  }

  dispatch(event: T) {
    this.subject.next(event);
  }

  dispose() {
    this.subject.dispose();
  }

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.subject.remove(disposable, ...disposables);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.subject.subscribe(subscriber);
  }
}

const create = <T>(priority?: number): EventResourceLike<T> =>
  new EventResourceImpl(priority);

export const EventResource = {
  create,
};
