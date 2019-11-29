import { SchedulerLike } from "@reactive-js/scheduler";
import { connect } from "./connect";
import { create } from "./create";
import { observe } from "./observe";
import { ObservableOperator } from "./pipe";

export const subscribeOn = <T>(
  scheduler: SchedulerLike,
): ObservableOperator<T, T> => observable =>
  create(observer => connect(observe(observer)(observable), scheduler));
