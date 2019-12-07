import { SchedulerLike } from "@reactive-js/scheduler";
import { connect } from "./connect";
import { createObservable } from "./create";
import { observe } from "./observe";
import { ObservableOperator } from "@reactive-js/rx";

export const subscribeOn = <T>(
  scheduler: SchedulerLike,
): ObservableOperator<T, T> => observable =>
  createObservable(observer =>
    connect(observe(observer)(observable), scheduler),
  );
