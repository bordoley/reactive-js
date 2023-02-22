import { EnumerableObservableLike, ObservableLike } from "../../../rx.js";
declare const Observable_isEnumerable: (obs: ObservableLike) => obs is EnumerableObservableLike<unknown>;
export default Observable_isEnumerable;
