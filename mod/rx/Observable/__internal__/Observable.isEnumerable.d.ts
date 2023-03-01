import { EnumerableLike } from "../../../ix.js";
import { ObservableLike } from "../../../rx.js";
declare const Observable_isEnumerable: (obs: ObservableLike) => obs is EnumerableLike<unknown>;
export default Observable_isEnumerable;
