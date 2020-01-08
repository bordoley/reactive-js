import { SchedulerLike } from "@reactive-js/scheduler";
import { pipe } from "@reactive-js/pipe";
import { createObservable } from "./createObservable";
import { ObservableOperatorLike } from "./interfaces";
import { onNotify } from "./observe";
import { subscribe } from "./subscribe";

export const subscribeOn = <T>(
  scheduler: SchedulerLike,
): ObservableOperatorLike<T, T> => observable =>
  createObservable(subscriber => {
    subscriber.add(
      pipe(observable, onNotify(next => subscriber.notify(next)), subscribe(scheduler))
    );
  });
