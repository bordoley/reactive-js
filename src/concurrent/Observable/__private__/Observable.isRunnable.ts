import {
  ComputationLike_isDeferred,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import { ObservableLike, RunnableLike } from "../../../concurrent.js";

const Observable_isRunnable = <T = unknown>(
  obs: ObservableLike<T>,
): obs is RunnableLike<T> =>
  (obs[ComputationLike_isSynchronous] ?? true) &&
  (obs[ComputationLike_isDeferred] ?? true);

export default Observable_isRunnable;
