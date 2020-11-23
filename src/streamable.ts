import { Function1 } from "./functions";
import { StreamLike } from "./observable";
import { SchedulerLike } from "./scheduler";

export interface StreamableLike<TReq, T> {
  stream(
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): StreamLike<TReq, T>;
}

export type StreamableOperator<TSrcReq, TSrc, TReq, T> = Function1<
  StreamableLike<TSrcReq, TSrc>,
  StreamableLike<TReq, T>
>;

export { createActionReducer } from "./streamable/createActionReducer";
export {
  createStreamable,
  empty,
  lift,
  mapReq,
  stream,
} from "./streamable/streamable";
export { identity } from "./streamable/identity";
export {
  map,
  mapTo,
  onNotify,
  scan,
  withLatestFrom,
} from "./streamable/operators";
export { sink } from "./streamable/sink";
