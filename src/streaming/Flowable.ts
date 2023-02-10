import { ToObservable } from "../rx";
import { FlowableLike } from "../streaming";
import Flowable_toObservable from "./Flowable/__internal__/Flowable.toObservable";

export const toObservable: ToObservable<FlowableLike>["toObservable"] =
  Flowable_toObservable;

/** @ignore */
const Flowable = {
  toObservable,
};

export default Flowable;
