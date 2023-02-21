import { IterableLike } from "../../../containers.js";
import { compose } from "../../../functions.js";
import RunnableObservable_toFlowable from "../../../rx/RunnableObservable/__internal__/RunnableObservable.toFlowable.js";
import { ToFlowable } from "../../../streaming.js";
import Iterable_toRunnableObservable from "./Iterable.toRunnableObservable.js";

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
