import { ObservableLike, EnumerableObservableLike } from "../../../rx.js";
declare const Observable$isEnumerable: (obs: ObservableLike) => obs is EnumerableObservableLike<unknown>;
export { Observable$isEnumerable as default };
