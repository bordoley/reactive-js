import { ComputationLike_isPure } from "../../../computations.js";
import {
  MulticastObservableLike,
  ObservableLike,
  ObservableLike_isDeferred,
} from "../../../concurrent.js";

const Observable_isMulticasted = <T = unknown>(
  obs: ObservableLike<T>,
): obs is MulticastObservableLike<T> =>
  !obs[ObservableLike_isDeferred] && (obs[ComputationLike_isPure] ?? true);

export default Observable_isMulticasted;
