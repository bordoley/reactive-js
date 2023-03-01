import { SequenceLike } from "../../../containers.js";
import { compose } from "../../../functions.js";
import Runnable_toFlowable from "../../../rx/Runnable/__internal__/Runnable.toFlowable.js";
import { ToFlowable } from "../../../streaming.js";
import Sequence_toRunnable from "./Sequence.toRunnable.js";

const Sequence_toFlowable: ToFlowable<
  SequenceLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toFlowable"] = options =>
  compose(Sequence_toRunnable(options), Runnable_toFlowable());

export default Sequence_toFlowable;
