import { compose } from "../../../functions.js";
import { EnumerableLike } from "../../../ix.js";
import RunnableObservable_toFlowable from "../../../rx/RunnableObservable/__internal__/RunnableObservable.toFlowable.js";
import { ToFlowable } from "../../../streaming.js";
import Enumerable_toRunnableObservable from "./Enumerable.toRunnableObservable.js";

const Enumerable_toFlowable: ToFlowable<
  EnumerableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toFlowable"] = options =>
  compose(
    Enumerable_toRunnableObservable(options),
    RunnableObservable_toFlowable(),
  );

export default Enumerable_toFlowable;
