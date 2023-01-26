import { ObservableLike, EnumerableObservableLike } from "../../../rx.js";
declare const Observable_isEnumerable: (obs: ObservableLike) => obs is EnumerableObservableLike<unknown>;
export { Observable_isEnumerable as default };
