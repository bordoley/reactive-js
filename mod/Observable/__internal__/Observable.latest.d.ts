import { ObservableBaseLike, ObservableLike } from "../../types.js";
type LatestMode = 1 | 2;
declare const Observable_latest: (observables: readonly ObservableLike<any>[], mode: LatestMode) => ObservableBaseLike<readonly unknown[]>;
export default Observable_latest;
