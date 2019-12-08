import { SchedulerLike } from "@reactive-js/scheduler";
import {
  connect,
  createObservable,
  ObservableOperatorLike,
} from "@reactive-js/rx";
import { observe } from "./observe";

export const subscribeOn = <T>(
  scheduler: SchedulerLike,
): ObservableOperatorLike<T, T> => observable =>
  createObservable(observer =>
    connect(observe(observer)(observable), scheduler),
  );
