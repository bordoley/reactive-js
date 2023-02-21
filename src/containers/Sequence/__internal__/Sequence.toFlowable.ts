import { SequenceLike } from "../../../containers.js";
import { compose } from "../../../functions.js";
import RunnableObservable_toFlowable from "../../../rx/RunnableObservable/__internal__/RunnableObservable.toFlowable.js";
import { ToFlowable } from "../../../streaming.js";
import Sequence_toRunnableObservable from "./Sequence.toRunnableObservable.js";

const Sequence_toFlowable: ToFlowable<
  SequenceLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toFlowable"] = options =>
  compose(
    Sequence_toRunnableObservable(options),
    RunnableObservable_toFlowable(),
  );

export default Sequence_toFlowable;
