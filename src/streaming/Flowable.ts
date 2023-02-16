import { FromReadonlyArray } from "../containers";
import ReadonlyArray_toRunnableObservable from "../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable";
import { compose } from "../functions";
import { ToObservable } from "../rx";
import RunnableObservable_toFlowable from "../rx/RunnableObservable/__internal__/RunnableObservable.toFlowable";
import { FlowableLike } from "../streaming";
import Flowable_toObservable from "./Flowable/__internal__/Flowable.toObservable";

export const fromReadonlyArray: FromReadonlyArray<
  FlowableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["fromReadonlyArray"] = o =>
  compose(
    ReadonlyArray_toRunnableObservable(o),
    RunnableObservable_toFlowable(),
  );

export const toObservable: ToObservable<FlowableLike>["toObservable"] =
  Flowable_toObservable;

/** @ignore */
const Flowable = {
  fromReadonlyArray,
  toObservable,
};

export default Flowable;
