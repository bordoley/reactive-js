import { SchedulerLike } from "@reactive-js/scheduler";
import { connect } from "./connect";
import { ObservableOperator } from "./pipe";
import { observe } from "./observe";
import { create } from "./create";

export const subscribeOn = <T>(
  scheduler: SchedulerLike,
): ObservableOperator<T, T> => observable =>
  create(observer => connect(observe(observer)(observable), scheduler));
