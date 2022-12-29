import {
  EnumerableObservableLike,
  ObservableLike,
  ObservableLike_isEnumerable,
} from "../../../rx";

const isEnumerable = (obs: ObservableLike): obs is EnumerableObservableLike =>
  obs[ObservableLike_isEnumerable];

export default isEnumerable;
