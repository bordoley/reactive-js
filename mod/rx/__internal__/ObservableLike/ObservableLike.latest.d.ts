import { ObservableLike } from "../../../rx.js";
type LatestMode = 1 | 2;
declare const ObservableLike__latest: (observables: readonly ObservableLike<any>[], mode: LatestMode) => ObservableLike<readonly unknown[]>;
export { ObservableLike__latest as default };
