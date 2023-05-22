import type * as Observable from "../../Observable.js";
import {
  EnumerableLike,
  ObservableLike,
  ObservableLike_isEnumerable,
} from "../../types.js";

const Observable_isEnumerable: Observable.Signature["isEnumerable"] = <
  T = unknown,
>(
  obs: ObservableLike,
): obs is EnumerableLike<T> => obs[ObservableLike_isEnumerable];

export default Observable_isEnumerable;
