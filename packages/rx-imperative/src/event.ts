import { Subject, SubjectLike } from "./subject";
import {
  ObservableLike,
  ObservableResourceLike,
  SubscriberLike,
} from "@reactive-js/rx-core";

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

  get disposable() {
    return this.subject.disposable;
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
