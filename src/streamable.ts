import { Function1 } from "./functions";
import { MulticastObservableLike, StreamLike } from "./observable";
import { SchedulerLike } from "./scheduler";

export interface StreamableLike<TReq, T> {
  stream(
    this: StreamableLike<TReq, T>,
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): StreamLike<TReq, T>;
}

export interface AsyncEnumerableLike<T> extends StreamableLike<void, T> {}

export type StreamableOperator<TSrcReq, TSrc, TReq, T> = Function1<
  StreamableLike<TSrcReq, TSrc>,
  StreamableLike<TReq, T>
>;

/**
 * @experimental
 * @noInheritDoc
 * */
export interface IOSinkAccumulatorLike<T, TAcc>
  extends StreamableLike<NotifyEvent<T> | DoneEvent, FlowMode>,
    MulticastObservableLike<TAcc> {}

export type FlowMode = "resume" | "pause";

export type NotifyEvent<T> = { readonly type: "notify"; readonly data: T };
export type DoneEvent = { readonly type: "done" };
export type DoneEventWithData<T> = { readonly type: "done"; readonly data: T };

export {
  createActionReducer,
  createStateStore,
  toStateStore,
} from "./streamable/createActionReducer";
export {
  createStreamable,
  empty,
  lift,
  mapReq,
  stream,
  __stream,
} from "./streamable/streamable";
export { identity } from "./streamable/identity";
export { flow } from "./streamable/flow";
export { sink } from "./streamable/sink";
export {
  createIOSinkAccumulator,
  decodeWithCharset,
  encodeUtf8,
  mapIOEventStream,
  flowIOEvents,
} from "./streamable/io";

export { fromArray } from "./streamable/fromArray";
export { fromEnumerable } from "./streamable/fromEnumerable";
export { fromIterable } from "./streamable/fromIterable";
export { generate } from "./streamable/generate";

export { consume, consumeAsync } from "./streamable/consume";

export { notifyEvent, doneEvent, doneEventWithData } from "./streamable/events";
