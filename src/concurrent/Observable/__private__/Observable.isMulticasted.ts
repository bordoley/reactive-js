import {
  MulticastObservableLike,
  ObservableLike,
  ObservableLike_isMulticasted,
} from "../../../concurrent.js";

const Observable_isMulticasted = <T = unknown>(
  obs: ObservableLike<T>,
): obs is MulticastObservableLike<T> => obs[ObservableLike_isMulticasted];

export default Observable_isMulticasted;
