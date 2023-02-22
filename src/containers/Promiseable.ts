import { PromiseableLike } from "../containers.js";
import { ToObservable } from "../rx.js";
import Observable_toPromise from "../rx/Observable/__internal__/Observable.toPromise.js";
import Promiseable_toObservable from "./Promiseable/__internal__/Promiseable.toObservable.js";

/**
 * @category Constructor
 */
export const fromObservable = Observable_toPromise;

export const toObservable: ToObservable<PromiseableLike>["toObservable"] =
  Promiseable_toObservable;
