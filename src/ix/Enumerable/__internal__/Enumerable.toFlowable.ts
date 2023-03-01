import { compose } from "../../../functions.js";
import { EnumerableLike } from "../../../ix.js";
import Runnable_toFlowable from "../../../rx/Runnable/__internal__/Runnable.toFlowable.js";
import { ToFlowable } from "../../../streaming.js";
import Enumerable_toRunnable from "./Enumerable.toRunnable.js";

const Enumerable_toFlowable: ToFlowable<
  EnumerableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toFlowable"] = options =>
  compose(Enumerable_toRunnable(options), Runnable_toFlowable());

export default Enumerable_toFlowable;
