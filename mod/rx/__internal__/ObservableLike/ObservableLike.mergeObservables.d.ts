import { ObservableLike } from "../../../rx.mjs";
declare const mergeAll: <T>(observables: readonly ObservableLike<T>[]) => ObservableLike<T>;
export { mergeAll as default };
