import { EnumerableLike, SubscriberLike } from "./interfaces";
import { enumerableMixin } from "./enumerable";

class NeverObservable<T> implements EnumerableLike<T> {
  readonly [Symbol.iterator] = enumerableMixin[Symbol.iterator];
  readonly enumerate = enumerableMixin.enumerate;
  subscribe(_: SubscriberLike<T>) {}
}

const neverInstance: EnumerableLike<any> = new NeverObservable();
export const never = <T>() => neverInstance as EnumerableLike<T>;
