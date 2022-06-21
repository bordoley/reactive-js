import { AbstractContainer } from "../container";
import { ObservableLike } from "../observable";
import { Observer } from "./observer";

class NeverObservable<T>
  extends AbstractContainer
  implements ObservableLike<T>
{
  readonly isSynchronous = false;

  get sinkType(): Observer<T> {
    return undefined as any;
  }

  observe(_: Observer<T>) {}
}

const neverInstance: ObservableLike<any> = new NeverObservable();

/**
 * Returna an `ObservableLike` instance that emits no items and never disposes its observer.
 */
export const never = <T>() => neverInstance as ObservableLike<T>;
