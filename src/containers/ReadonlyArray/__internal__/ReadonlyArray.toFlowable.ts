import { ReadonlyArrayLike } from "../../../containers.js";
import { compose } from "../../../functions.js";
import RunnableObservable_toFlowable from "../../../rx/RunnableObservable/__internal__/RunnableObservable.toFlowable.js";
import { ToFlowable } from "../../../streaming.js";
import ReadonlyArray_toRunnableObservable from "./ReadonlyArray.toRunnableObservable.js";

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
