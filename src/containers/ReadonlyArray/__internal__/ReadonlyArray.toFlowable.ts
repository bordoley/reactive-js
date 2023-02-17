import { ReadonlyArrayLike } from "../../../containers";
import { compose } from "../../../functions";
import RunnableObservable_toFlowable from "../../../rx/RunnableObservable/__internal__/RunnableObservable.toFlowable";
import { ToFlowable } from "../../../streaming";
import ReadonlyArray_toRunnableObservable from "./ReadonlyArray.toRunnableObservable";

const ReadonlyArray_toFlowable: ToFlowable<
  ReadonlyArrayLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toFlowable"] = options =>
  compose(
    ReadonlyArray_toRunnableObservable(options),
    RunnableObservable_toFlowable(),
  );

export default ReadonlyArray_toFlowable;
