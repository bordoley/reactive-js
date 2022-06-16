import { Function2 } from "./functions";
import { ObservableLike } from "./observable";
import { StreamableLike } from "./streamable";

/** @noInheritDoc */
export interface AsyncEnumerableLike<T> extends StreamableLike<void, T> {}

export type ConsumeRequest<TAcc> =
  | {
      readonly type: "notify";
      readonly acc: TAcc;
    }
  | {
      readonly type: "done";
      readonly acc: TAcc;
    };

export type Consumer<T, TAcc> = Function2<TAcc, T, ConsumeRequest<TAcc>>;
export type AsyncConsumer<T, TAcc> = Function2<
  TAcc,
  T,
  ObservableLike<ConsumeRequest<TAcc>>
>;

export { notify, done, consume, consumeAsync } from "./asyncEnumerable/consume";
export { fromArray } from "./asyncEnumerable/fromArray";
export { fromEnumerable } from "./asyncEnumerable/fromEnumerable";
export { fromIterable } from "./asyncEnumerable/fromIterable";
export { generate } from "./asyncEnumerable/generate";
