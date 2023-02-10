import {
  ObservableLike,
  ObservableLike_isRunnable,
  RunnableObservableLike,
} from "../../../rx";

const Observable_isRunnable = (
  obs: ObservableLike,
): obs is RunnableObservableLike => obs[ObservableLike_isRunnable];

export default Observable_isRunnable;
