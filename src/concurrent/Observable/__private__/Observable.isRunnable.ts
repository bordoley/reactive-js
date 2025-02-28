import { ComputationLike_isSynchronous } from "../../../computations.js";
import {
  ObservableLike,
  ObservableLike_isDeferred,
  RunnableLike,
} from "../../../concurrent.js";

const Observable_isRunnable = <T = unknown>(
  obs: ObservableLike<T>,
): obs is RunnableLike<T> =>
  (obs[ComputationLike_isSynchronous] ?? true) &&
  obs[ObservableLike_isDeferred];

export default Observable_isRunnable;
