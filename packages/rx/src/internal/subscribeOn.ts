import { SchedulerLike } from "@reactive-js/scheduler";
import { pipe } from "@reactive-js/pipe";
import { createObservable } from "./createObservable";
import { ObservableOperatorLike } from "./interfaces";
import { onNext } from "./observe";
import { subscribe } from "./subscribe";

export const subscribeOn = <T>(
  scheduler: SchedulerLike,
): ObservableOperatorLike<T, T> => observable =>
  createObservable(notify =>
    pipe(observable, onNext(notify), subscribe(scheduler)),
  );
