import {
  EnumerableObservableLike,
  ObservableLike,
  SubscriberLike,
} from "./interfaces";
import { fromEnumerator } from "./fromEnumerator";
import { EnumerableLike } from "@reactive-js/enumerable";

class FromEnumerableObservable<T> implements ObservableLike<T> {
  constructor(
    protected readonly enumerable: EnumerableLike<void, T>,
    private readonly delay: number,
  ) {}

  subscribe(subscriber: SubscriberLike<T>) {
    const enumerator = this.enumerable.enumerate();
    subscriber.add(enumerator);

    fromEnumerator(enumerator, this.delay).subscribe(subscriber);
  }
}

class FromEnumerableEnumerableObservable<T> extends FromEnumerableObservable<
  T
> {
  constructor(enumerable: EnumerableLike<void, T>) {
    super(enumerable, 0);
  }

  [Symbol.iterator]() {
    const enumerable = this.enumerable;
    const iterate = ((enumerable as unknown) as Iterable<T>)[Symbol.iterator];
    return iterate !== undefined
      ? iterate.call(enumerable)
      : fromEnumerator(enumerable.enumerate())[Symbol.iterator]();
  }

  enumerate() {
    return this.enumerable.enumerate();
  }
}

export const fromEnumerable = <T>(
  enumerable: EnumerableLike<void, T>,
  delay = 0,
): ObservableLike<T> =>
  (enumerable as any).subscribe !== undefined && delay <= 0
    ? (enumerable as EnumerableObservableLike<T>)
    : delay <= 0
    ? new FromEnumerableEnumerableObservable(enumerable)
    : new FromEnumerableObservable(enumerable, delay);
