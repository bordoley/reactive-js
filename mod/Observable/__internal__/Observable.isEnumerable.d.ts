import { EnumerableLike, ObservableLike } from "../../types.js";
declare const Observable_isEnumerable: (obs: ObservableLike) => obs is EnumerableLike<unknown>;
export default Observable_isEnumerable;
