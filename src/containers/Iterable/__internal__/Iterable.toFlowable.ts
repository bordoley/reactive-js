import { IterableLike } from "../../../containers.js";
import { compose } from "../../../functions.js";
import Runnable_toFlowable from "../../../rx/Runnable/__internal__/Runnable.toFlowable.js";
import { ToFlowable } from "../../../streaming.js";
import Iterable_toObservable from "./Iterable.toObservable.js";

const Iterable_toFlowable: ToFlowable<
  IterableLike,
  {
    readonly delay: number;
    readonly delayStart?: boolean;
  }
>["toFlowable"] = options =>
  compose(Iterable_toObservable(options as unknown), Runnable_toFlowable());

export default Iterable_toFlowable;
