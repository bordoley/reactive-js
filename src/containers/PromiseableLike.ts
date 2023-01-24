import { PromiseableLike } from "../containers";
import { FromObservable, ToObservable } from "../rx";
import ObservableLike__toPromise from "../rx/__internal__/ObservableLike/ObservableLike.toPromise";
import PromiseableLike__toObservable from "./__internal__/PromiseableLike/PromiseableLike.toObservable";

export const fromObservable =
  ObservableLike__toPromise as FromObservable<PromiseableLike>["fromObservable"];

export const toObservable: ToObservable<PromiseableLike>["toObservable"] =
  PromiseableLike__toObservable;
