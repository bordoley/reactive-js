import {
  MulticastObservableLike,
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
} from "../../../concurrent.js";

const Observable_isMulticasted = <T = unknown>(
  obs: ObservableLike<T>,
): obs is MulticastObservableLike<T> =>
  !obs[ObservableLike_isDeferred] && obs[ObservableLike_isPure];

export default Observable_isMulticasted;
