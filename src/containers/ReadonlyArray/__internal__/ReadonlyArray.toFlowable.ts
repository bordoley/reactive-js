import { ReadonlyArrayLike } from "../../../containers.js";
import { compose } from "../../../functions.js";
import Runnable_toFlowable from "../../../rx/Runnable/__internal__/Runnable.toFlowable.js";
import { ToFlowable } from "../../../streaming.js";
import ReadonlyArray_toObservable from "./ReadonlyArray.toObservable.js";

const ReadonlyArray_toFlowable: ToFlowable<
  ReadonlyArrayLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toFlowable"] = options =>
  compose(
    ReadonlyArray_toObservable(options as unknown),
    Runnable_toFlowable(),
  );

export default ReadonlyArray_toFlowable;
