import { ObservableLike } from "../../../rx.js";
type LatestMode = 1 | 2;
declare const Observable_latest: (observables: readonly ObservableLike<any>[], mode: LatestMode) => ObservableLike<readonly unknown[]>;
export { Observable_latest as default };
