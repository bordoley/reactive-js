import {
  EnumerableLike,
  ObservableLike,
  ObservableLike_isEnumerable,
} from "../../../core.js";

const Observable_isEnumerable = (obs: ObservableLike): obs is EnumerableLike =>
  obs[ObservableLike_isEnumerable];

export default Observable_isEnumerable;
