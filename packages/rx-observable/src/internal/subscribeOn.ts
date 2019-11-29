import { SubscriberLike, toSafeObserver } from "@reactive-js/rx-subscriber";
import { SchedulerLike } from "@reactive-js/scheduler";
import { connect } from "./connect";
import { ObservableOperator, pipe } from "./observable";
import { observe } from "./observe";
import { create } from "./create";

export const subscribeOn = <T>(
  scheduler: SchedulerLike,
): ObservableOperator<T, T> => observable =>
  create(observer => connect(observe(observer)(observable), scheduler));
