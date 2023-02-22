import {
  ObservableLike,
  ObservableLike_isRunnable,
  RunnableObservableLike,
} from "../../../rx.js";

const Observable_isRunnable = (
  obs: ObservableLike,
): obs is RunnableObservableLike => obs[ObservableLike_isRunnable];

export default Observable_isRunnable;
