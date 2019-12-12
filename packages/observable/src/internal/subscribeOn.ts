import { SchedulerLike } from "@reactive-js/scheduler";
import { pipe } from "@reactive-js/pipe";
import { subscribe, createObservable } from "@reactive-js/rx";
import { ObservableOperatorLike } from "./interfaces";
import { observe } from "./observe";

export const subscribeOn = <T>(
  scheduler: SchedulerLike,
): ObservableOperatorLike<T, T> => observable =>
  createObservable(observer =>
    pipe(observable, observe(observer), subscribe(scheduler)),
  );
