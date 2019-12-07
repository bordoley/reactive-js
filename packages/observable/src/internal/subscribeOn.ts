import { SchedulerLike } from "@reactive-js/scheduler";
import { connect } from "./connect";
import { createObservable } from "./create";
import { observe } from "./observe";
import { ObservableOperatorLike } from "@reactive-js/rx";

export const subscribeOn = <T>(
  scheduler: SchedulerLike,
): ObservableOperatorLike<T, T> => observable =>
  createObservable(observer =>
    connect(observe(observer)(observable), scheduler),
  );
