import { StreamableLike } from "./streamable";

/** @noInheritDoc */
export interface AsyncEnumerableLike<T> extends StreamableLike<void, T> {}

export {
  ConsumeRequestType,
  ConsumeRequest,
  Consumer,
  AsyncConsumer,
  notify,
  done,
  consume,
  consumeAsync,
} from "./internal/asyncEnumerable/consume";
export { fromArray } from "./internal/asyncEnumerable/fromArray";
export { fromEnumerable } from "./internal/asyncEnumerable/fromEnumerable";
export { fromIterable } from "./internal/asyncEnumerable/fromIterable";
export { generate } from "./internal/asyncEnumerable/generate";
