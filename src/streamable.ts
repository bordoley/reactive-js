import { Function1 } from "./functions";
import { StreamLike } from "./observable";
import { SchedulerLike } from "./scheduler";

export interface StreamableLike<TReq, T> {
  stream(
    this: StreamableLike<TReq, T>,
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): StreamLike<TReq, T>;
}

export type StreamableOperator<TSrcReq, TSrc, TReq, T> = Function1<
  StreamableLike<TSrcReq, TSrc>,
  StreamableLike<TReq, T>
>;

export type FlowMode = "resume" | "pause";

export { createActionReducer } from "./streamable/createActionReducer";
export {
  createStreamable,
  empty,
  lift,
  mapReq,
  stream,
  __stream,
} from "./streamable/streamable";
export { identity } from "./streamable/identity";
export {
  map,
  mapTo,
  onNotify,
  scan,
  withLatestFrom,
} from "./streamable/operators";
export { flow } from "./streamable/flow";
export { sink } from "./streamable/sink";
