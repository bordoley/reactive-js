import {
  ObservableLike,
  ObservableLike_isPure,
  PureObservableLike,
} from "../../../concurrent.js";

const Observable_isPure = <T = unknown>(
  obs: ObservableLike<T>,
): obs is PureObservableLike<T> => obs[ObservableLike_isPure];

export default Observable_isPure;
