import { ReadonlyArrayLike } from "../../../containers.js";
import { compose } from "../../../functions.js";
import Runnable_toFlowable from "../../../rx/Runnable/__internal__/Runnable.toFlowable.js";
import { ToFlowable } from "../../../streaming.js";
import ReadonlyArray_toRunnable from "./ReadonlyArray.toRunnable.js";

const ReadonlyArray_toFlowable: ToFlowable<
  ReadonlyArrayLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toFlowable"] = options =>
  compose(ReadonlyArray_toRunnable(options), Runnable_toFlowable());

export default ReadonlyArray_toFlowable;
