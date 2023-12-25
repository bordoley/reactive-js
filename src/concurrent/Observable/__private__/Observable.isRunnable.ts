import {
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isRunnable,
  RunnableLike,
} from "../../../concurrent.js";

const Observable_isRunnable = <T = unknown>(
  obs: ObservableLike<T>,
): obs is RunnableLike<T> =>
  obs[ObservableLike_isRunnable] && obs[ObservableLike_isDeferred];

export default Observable_isRunnable;
