import { PromiseableLike } from "../containers";
import { FromObservable, ToObservable } from "../rx";
import Observable$toPromise from "../rx/__internal__/Observable/Observable.toPromise";
import Promiseable$toObservable from "./__internal__/Promiseable/Promiseable.toObservable";

export const fromObservable =
  Observable$toPromise as FromObservable<PromiseableLike>["fromObservable"];

export const toObservable: ToObservable<PromiseableLike>["toObservable"] =
  Promiseable$toObservable;
