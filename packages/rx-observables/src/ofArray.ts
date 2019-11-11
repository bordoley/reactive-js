import { 
  Notifications, 
  ObservableLike,
  SchedulerLike, 
  SchedulerContinuation, 
  SchedulerContinuationResult,  
} from '@rx-min/rx-core';

import {create} from './create';

export const ofArray = <T>(values: ReadonlyArray<T>, scheduler: SchedulerLike, delay: number | void): ObservableLike<T> =>
  create(subscriber => {
    let index = 0;

    let continuationResult: SchedulerContinuationResult;
    const continuation: SchedulerContinuation = (shouldYield) => {
      if (subscriber.isDisposed) {
        return;
      } else if (index >= values.length) {
        subscriber.notify(Notifications.complete, undefined);
        return;
      } else if (delay > 0) {
        const value = values[index];
        index++;
        subscriber.notify(Notifications.next, value);
        return continuationResult;
      } else {
        let yieldRequested = false;
        while (index < values.length) {
          const value = values[index];
          index++;
          subscriber.notify(Notifications.next, value);
          yieldRequested = shouldYield();
          if (yieldRequested) {
            break;
          }
        }

        if (yieldRequested) {
          return continuationResult;
        } else {
          subscriber.notify(Notifications.complete, undefined);
          return;
        }
      }
    };

    continuationResult = delay !== undefined ? [continuation, delay] : continuation;

    subscriber.add(
      scheduler.schedule(continuation, delay)
    );
  });

export const ofValue = <T>(value: T, scheduler: SchedulerLike, delay: number | void): ObservableLike<T> =>
  ofArray([value], scheduler, delay)

export const empty = <T>(scheduler: SchedulerLike): ObservableLike<T> => ofArray([], scheduler)
