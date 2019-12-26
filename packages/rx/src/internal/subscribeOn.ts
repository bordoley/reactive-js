import { SchedulerLike } from "@reactive-js/scheduler";
import { pipe } from "@reactive-js/pipe";
import { createObservable } from "./createObservable";
import { ObservableOperatorLike } from "./interfaces";
import { observe } from "./observe";
import { subscribe } from "./subscribe";

export const subscribeOn = <T>(
  scheduler: SchedulerLike,
): ObservableOperatorLike<T, T> => observable =>
  createObservable(observer =>
    pipe(observable, observe(observer), subscribe(scheduler)),
  );
