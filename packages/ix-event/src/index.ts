import { ObservableLike } from "@reactive-js/rx-observable";

import { ObservableResourceLike } from "@reactive-js/rx-observable-resource";

import { SubscriberLike } from "@reactive-js/rx-subscriber";

import { AsyncIteratorLike } from "@reactive-js/ix-async-iterator";

import { AsyncIteratorResourceLike } from "@reactive-js/ix-async-iterator-resource";

import {
  create as subjectCreate,
  SubjectResourceLike,
} from "@reactive-js/rx-subject";

import { DisposableOrTeardown } from "@reactive-js/disposable";

class EventResourceImpl<T> implements AsyncIteratorResourceLike<T, T> {
  get isDisposed() {
    return this.subject.isDisposed;
  }
  private readonly subject: SubjectResourceLike<T>;

  constructor(priority?: number) {
    this.subject = subjectCreate(priority);
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

export const create = <T>(priority?: number): AsyncIteratorResourceLike<T, T> =>
  new EventResourceImpl(priority);
