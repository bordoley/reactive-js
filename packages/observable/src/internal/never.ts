import { ObservableLike, SubscriberLike } from "./interfaces";
import { enumerate } from "./observable";

class NeverObservable<T> implements ObservableLike<T> {
  readonly enumerate = enumerate;
  readonly isSynchronous = false;

  subscribe(_: SubscriberLike<T>) {}
}

const neverInstance: ObservableLike<any> = new NeverObservable();

/**
 * Returna an `ObservableLike` instance that emits no items and never disposes its subscriber.
 */
export const never = <T>() => neverInstance as ObservableLike<T>;
