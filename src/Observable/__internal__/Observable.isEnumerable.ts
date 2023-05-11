import type * as Observable from "../../Observable.js";
import {
  EnumerableLike,
  ObservableLike,
  ObservableLike_isEnumerable,
} from "../../types.js";

const Observable_isEnumerable: Observable.Signature["isEnumerable"] = (
  obs: ObservableLike,
): obs is EnumerableLike => obs[ObservableLike_isEnumerable];

export default Observable_isEnumerable;
