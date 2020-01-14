import { EnumerableLike, EnumerableObservableLike, ObservableLike, SubscriberLike } from "./interfaces";
import { fromEnumerator } from "./fromEnumerator";

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

class FromEnumerableEnumerableObservable<T> extends FromEnumerableObservable<T> {
  constructor(enumerable: EnumerableLike<void, T>) {
    super(enumerable, 0);
  }

  [Symbol.iterator]() {
    return this.enumerable[Symbol.iterator]();
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
    : delay > 0
    ? new FromEnumerableObservable(enumerable, delay)
    : new FromEnumerableEnumerableObservable(enumerable);