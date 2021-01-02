import { StreamableLike } from "./streamable";

/** @noInheritDoc */
export interface AsyncEnumerableLike<T> extends StreamableLike<void, T> {}

export type {
  ConsumeRequest,
  Consumer,
  AsyncConsumer,
} from "./asyncEnumerable/consume";
export { notify, done, consume, consumeAsync } from "./asyncEnumerable/consume";
export { fromArray } from "./asyncEnumerable/fromArray";
export { fromEnumerable } from "./asyncEnumerable/fromEnumerable";
export { fromIterable } from "./asyncEnumerable/fromIterable";
export { generate } from "./asyncEnumerable/generate";
