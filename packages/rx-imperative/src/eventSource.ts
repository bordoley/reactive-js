import { Subject, SubjectLike } from "./subject";
import { Notifications, ObservableLike, ObservableResourceLike, SubscriberLike } from "@rx-min/rx-core";

export interface EventLike<T> extends ObservableLike<T> {
  dispatch(event: T): void;
}

export interface EventSourceLike<T> extends EventLike<T>, ObservableResourceLike<T>{}

class EventSourceImpl<T> implements EventSourceLike<T> {
  private readonly subject: SubjectLike<T> = Subject.create();

  get isDisposed() {
    return this.subject.isDisposed;
  }

  dispose() {
    this.subject.dispose();
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.subject.subscribe(subscriber);
  }

  dispatch(event: T) {
    this.subject.notify(Notifications.next, event);
  }
}

const create = <T>(): EventSourceLike<T> => new EventSourceImpl();

export const EventSource = {
  create,
};
