import { PromiseableLike } from "../containers";
import { FromObservable, ToObservable } from "../rx";
import Observable_toPromise from "../rx/__internal__/Observable/Observable.toPromise";
import Promiseable_toObservable from "./__internal__/Promiseable/Promiseable.toObservable";

export const fromObservable =
  Observable_toPromise as FromObservable<PromiseableLike>["fromObservable"];

export const toObservable: ToObservable<PromiseableLike>["toObservable"] =
  Promiseable_toObservable;

/** @ignore */
const Promiseable = {
  fromObservable,
  toObservable,
};

export default Promiseable;
