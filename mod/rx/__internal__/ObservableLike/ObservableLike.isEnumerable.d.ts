import { ObservableLike, EnumerableObservableLike } from "../../../rx.mjs";
declare const isEnumerable: (obs: ObservableLike) => obs is EnumerableObservableLike<unknown>;
export { isEnumerable as default };
