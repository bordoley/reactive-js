import type * as Observable from "../../Observable.js";
import {
  ObservableLike,
  ObservableLike_isRunnable,
  RunnableWithSideEffectsLike,
} from "../../types.js";

const Observable_isRunnable: Observable.Signature["isRunnable"] = (
  obs: ObservableLike,
): obs is RunnableWithSideEffectsLike => obs[ObservableLike_isRunnable];

export default Observable_isRunnable;
