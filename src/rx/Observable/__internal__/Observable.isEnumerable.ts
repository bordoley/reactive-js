import { EnumerableLike } from "../../../ix.js";
import { ObservableLike, ObservableLike_isEnumerable } from "../../../rx.js";

const Observable_isEnumerable = (obs: ObservableLike): obs is EnumerableLike =>
  obs[ObservableLike_isEnumerable];

export default Observable_isEnumerable;
