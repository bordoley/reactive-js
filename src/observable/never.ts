import { ObservableLike, ObserverLike } from "../observable";

class NeverObservable<T> implements ObservableLike<T> {
  readonly type = this;
  readonly T = undefined as any;
  readonly isSynchronous = false;

  observe(_: ObserverLike<T>) {}
}

const neverInstance: ObservableLike<any> = new NeverObservable();

/**
 * Returna an `ObservableLike` instance that emits no items and never disposes its observer.
 */
export const never = <T>() => neverInstance as ObservableLike<T>;
