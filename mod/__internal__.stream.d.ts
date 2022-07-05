import { ObservableOperator } from "./observable.mjs";
import { SchedulerLike } from "./scheduler.mjs";
import { StreamLike } from "./stream.mjs";
declare const createStream: <TReq, T>(op: ObservableOperator<TReq, T>, scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => StreamLike<TReq, T>;
export { createStream };
