import {
  EnumerableObservableLike,
  ObservableLike,
  ObservableLike_isEnumerable,
} from "../../../rx";

const ObservableLike__isEnumerable = (
  obs: ObservableLike,
): obs is EnumerableObservableLike => obs[ObservableLike_isEnumerable];

export default ObservableLike__isEnumerable;
