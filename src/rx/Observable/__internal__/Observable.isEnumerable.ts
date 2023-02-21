import {
  EnumerableObservableLike,
  ObservableLike,
  ObservableLike_isEnumerable,
} from "../../../rx.js";

const Observable_isEnumerable = (
  obs: ObservableLike,
): obs is EnumerableObservableLike => obs[ObservableLike_isEnumerable];

export default Observable_isEnumerable;
