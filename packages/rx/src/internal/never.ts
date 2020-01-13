import { EnumerableObservableLike, SubscriberLike } from "./interfaces";
import { enumerableMixin } from "./enumerable";

class NeverEnumerable<T> implements EnumerableObservableLike<T> {
  readonly [Symbol.iterator] = enumerableMixin[Symbol.iterator];
  readonly enumerate = enumerableMixin.enumerate;
  subscribe(_: SubscriberLike<T>) {}
}

const neverInstance: EnumerableObservableLike<any> = new NeverEnumerable();

/**
 * Returna an `ObservableLike` instance that emits no items and never disposes its subscriber.
 */
export const never = <T>() => neverInstance as EnumerableObservableLike<T>;
