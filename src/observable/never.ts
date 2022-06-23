import { ObservableLike } from "../observable";
import { AbstractObservable } from "./observable";
import { Observer } from "./observer";

class NeverObservable<T> extends AbstractObservable<T> {
  sink(_: Observer<T>) {}
}

const neverInstance: ObservableLike<any> = new NeverObservable();

/**
 * Returna an `ObservableLike` instance that emits no items and never disposes its observer.
 */
export const never = <T>() => neverInstance as ObservableLike<T>;
