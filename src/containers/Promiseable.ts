import { PromiseableLike } from "../containers";
import { ToObservable } from "../rx";
import Observable_toPromise from "../rx/Observable/__internal__/Observable.toPromise";
import Promiseable_toObservable from "./Promiseable/__internal__/Promiseable.toObservable";

/**
 * @category Constructor
 */
export const fromObservable = Observable_toPromise;

export const toObservable: ToObservable<PromiseableLike>["toObservable"] =
  Promiseable_toObservable;

/** @ignore */
const Promiseable = {
  fromObservable,
  toObservable,
};

export default Promiseable;
