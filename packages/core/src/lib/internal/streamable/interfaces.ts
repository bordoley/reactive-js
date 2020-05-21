import { Function1 } from "../../functions";
import { StreamLike } from "../../observable";
import { SchedulerLike } from "../../scheduler";

export interface StreamableLike<TReq, T> {
  stream(scheduler: SchedulerLike, options?: { replay: number }): StreamLike<TReq, T>;
}

export type StreamableOperator<TSrcReq, TSrc, TReq, T> = Function1<
  StreamableLike<TSrcReq, TSrc>,
  StreamableLike<TReq, T>
>;
