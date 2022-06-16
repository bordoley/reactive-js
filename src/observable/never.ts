import { AbstractContainer } from "../container";
import { ObservableLike, ObserverLike } from "../observable";

class NeverObservable<T>
  extends AbstractContainer
  implements ObservableLike<T>
{
  readonly isSynchronous = false;

  observe(_: ObserverLike<T>) {}
}

const neverInstance: ObservableLike<any> = new NeverObservable();

/**
 * Returna an `ObservableLike` instance that emits no items and never disposes its observer.
 */
export const never = <T>() => neverInstance as ObservableLike<T>;
