import { SequenceLike } from "../../../containers";
import { compose } from "../../../functions";
import RunnableObservable_toFlowable from "../../../rx/RunnableObservable/__internal__/RunnableObservable.toFlowable";
import { ToFlowable } from "../../../streaming";
import Sequence_toRunnableObservable from "./Sequence.toRunnableObservable";

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
