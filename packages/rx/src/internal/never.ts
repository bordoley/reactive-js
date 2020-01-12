import { EnumerableLike, SubscriberLike } from "./interfaces";
import { enumerableMixin } from "./enumerable";

class NeverEnumerable<T> implements EnumerableLike<T> {
  readonly [Symbol.iterator] = enumerableMixin[Symbol.iterator];
  readonly enumerate = enumerableMixin.enumerate;
  subscribe(_: SubscriberLike<T>) {}
}

const neverInstance: EnumerableLike<any> = new NeverEnumerable();

/**
 * Returna an `ObservableLike` instance that emits no items and never disposes its subscriber.
 */
export const never = <T>() => neverInstance as EnumerableLike<T>;
