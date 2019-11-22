import { AbstractSubject, SubjectLike } from "./subject";

import {
  Notification,
  NotificationKind,
  notify,
  ObserverLike,
} from "@reactive-js/rx-core";

class ReplayLastSubjectImpl<T> extends AbstractSubject<T> {
  private last: Notification<T> | undefined;

  protected onNext(data: T) {
    this.last = [NotificationKind.Next, data];
  }
  protected onComplete(error?: Error) {
    this.last = [NotificationKind.Complete, error];
  }
  protected onSubscribe(observer: ObserverLike<T>) {
    if (this.last !== undefined) {
      notify(observer, this.last);
    }
  }
}

const create = <T>(priority?: number): SubjectLike<T> =>
  new ReplayLastSubjectImpl(priority);

export const ReplayLastSubject = {
  create,
};
