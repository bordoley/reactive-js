import { ToObservable } from "../rx";
import { FlowableLike } from "../streaming";
import FlowableLike__toObservable from "./__internal__/FlowableLike/FlowableLike.toObservable";

export const toObservable: ToObservable<FlowableLike>["toObservable"] =
  FlowableLike__toObservable;
export const toObservableT: ToObservable<FlowableLike> = {
  toObservable,
};
