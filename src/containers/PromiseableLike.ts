import { PromiseableLike } from "../containers";
import { ToObservable } from "../rx";
import PromiseableLike__toObservable from "./__internal__/PromiseableLike/PromiseableLike.toObservable";

export const toObservable: ToObservable<PromiseableLike>["toObservable"] =
  PromiseableLike__toObservable;
export const toObservableT: ToObservable<PromiseableLike> = { toObservable };
