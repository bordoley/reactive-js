import {
  Disposable
} from "@rx-min/rx-disposables";

import {
  Notifications,
  ObservableLike,
  SchedulerLike,
  SchedulerContinuationLike,
} from '@rx-min/rx-core';

import { create } from './create';

export const throws = <T>(error: Error, scheduler: SchedulerLike, delay: number | void): ObservableLike<T> =>
  create(subscriber => {
    const continuation: SchedulerContinuationLike = (_shouldYield) => {
      subscriber.notify(Notifications.complete, error);
    }

    subscriber.add(
      scheduler.schedule(continuation, delay)
    );
  });