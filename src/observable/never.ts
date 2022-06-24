import { ignore } from "../functions";
import { ObservableLike } from "../observable";
import { createObservable } from "./createObservable";

const neverInstance: ObservableLike<any> = createObservable(ignore);

/**
 * Returna an `ObservableLike` instance that emits no items and never disposes its observer.
 */
export const never = <T>() => neverInstance as ObservableLike<T>;
