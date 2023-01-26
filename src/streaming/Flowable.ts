import { ToObservable } from "../rx";
import { FlowableLike } from "../streaming";
import Flowable$toObservable from "./__internal__/Flowable/Flowable.toObservable";

export const toObservable: ToObservable<FlowableLike>["toObservable"] =
  Flowable$toObservable;
