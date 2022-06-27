import { Function1, Updater } from "./functions";
import { StreamLike } from "./observable";
import { SchedulerLike } from "./scheduler";

export interface StreamableLike<TReq, T, TStream extends StreamLike<TReq, T>> {
  stream(
    this: StreamableLike<TReq, T, TStream>,
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): TStream;
}

export interface AsyncEnumerableLike<T>
  extends StreamableLike<void, T, AsyncEnumeratorLike<T>> {}
export interface AsyncEnumeratorLike<T> extends StreamLike<void, T> {}

export interface StreamableStateLike<T>
  extends StreamableLike<Updater<T>, T, StateStreamLike<T>> {}
export interface StateStreamLike<T> extends StreamLike<Updater<T>, T> {}

export type StreamableOperator<TSrcReq, TSrc, TReq, T> = Function1<
  StreamableLike<TSrcReq, TSrc, StreamLike<TSrcReq, TSrc>>,
  StreamableLike<TReq, T, StreamLike<TReq, T>>
>;

export type FlowMode = "resume" | "pause";

export interface FlowableLike<T>
  extends StreamableLike<FlowMode, T, FlowableStreamLike<T>> {}
export interface FlowableStreamLike<T> extends StreamLike<FlowMode, T> {}

export interface FlowableSinkLike<T>
  extends StreamableLike<T, FlowMode, FlowableSinkStreamLike<T>> {}
export interface FlowableSinkStreamLike<T> extends StreamLike<T, FlowMode> {}

export type ConsumeContinue<T> = {
  readonly type: "continue";
  readonly data: T;
};
export type ConsumeDone<T> = {
  readonly type: "done";
  readonly data: T;
};

export {
  createActionReducer,
  createStateStore,
} from "./streamable/createActionReducer";
export {
  createStreamble,
  fromObservableOperator,
  empty,
  lift,
  mapReq,
  stream,
  __stream,
} from "./streamable/streamable";
export { identity } from "./streamable/identity";
export { flow } from "./streamable/flow";
export { sink } from "./streamable/sink";
export { createFlowableSinkAccumulator } from "./streamable/io";

export { fromArray } from "./streamable/fromArray";
export { fromEnumerable } from "./streamable/fromEnumerable";
export { fromIterable } from "./streamable/fromIterable";
export { generate } from "./streamable/generate";

export {
  consumeContinue,
  consumeDone,
  consume,
  consumeAsync,
} from "./streamable/consume";
