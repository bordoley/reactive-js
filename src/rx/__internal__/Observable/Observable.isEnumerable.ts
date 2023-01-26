import {
  EnumerableObservableLike,
  ObservableLike,
  ObservableLike_isEnumerable,
} from "../../../rx";

const Observable$isEnumerable = (
  obs: ObservableLike,
): obs is EnumerableObservableLike => obs[ObservableLike_isEnumerable];

export default Observable$isEnumerable;
