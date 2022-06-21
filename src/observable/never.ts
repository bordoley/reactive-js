import { ObservableLike } from "../observable";
import { AbstractSource } from "../source";
import { Observer } from "./observer";

class NeverObservable<T>
  extends AbstractSource<T, Observer<T>>
  implements ObservableLike<T>
{
  readonly isSynchronous = false;

  observe(_: Observer<T>) {}
}

const neverInstance: ObservableLike<any> = new NeverObservable();

/**
 * Returna an `ObservableLike` instance that emits no items and never disposes its observer.
 */
export const never = <T>() => neverInstance as ObservableLike<T>;
