import { IterableLike } from "../../../containers";
import { compose } from "../../../functions";
import RunnableObservable_toFlowable from "../../../rx/RunnableObservable/__internal__/RunnableObservable.toFlowable";
import { ToFlowable } from "../../../streaming";
import Iterable_toRunnableObservable from "./Iterable.toRunnableObservable";

const Iterable_toFlowable: ToFlowable<
  IterableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toFlowable"] = options =>
  compose(
    Iterable_toRunnableObservable(options),
    RunnableObservable_toFlowable(),
  );

export default Iterable_toFlowable;
