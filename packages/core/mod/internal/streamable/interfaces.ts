import { StreamLike } from "../../observable.ts";
import { SchedulerLike } from "../../scheduler.ts";

export interface StreamableLike<TReq, T> {
  stream(scheduler: SchedulerLike, replayCount?: number): StreamLike<TReq, T>;
}

export type StreamableOperator<TSrcReq, TSrc, TReq, T> = {
  (enumerable: StreamableLike<TSrcReq, TSrc>): StreamableLike<TReq, T>;
};
