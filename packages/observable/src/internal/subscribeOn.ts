import { SchedulerLike } from "@reactive-js/scheduler";
import {
  connect,
  createObservable,
} from "@reactive-js/rx";
import {  ObservableOperatorLike } from "./interfaces";
import { observe } from "./observe";

export const subscribeOn = <T>(
  scheduler: SchedulerLike,
): ObservableOperatorLike<T, T> => observable =>
  createObservable(observer =>
    connect(observe(observer)(observable), scheduler),
  );
