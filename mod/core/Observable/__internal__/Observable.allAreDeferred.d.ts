import { DeferredObservableLike, ObservableLike } from "../../../core.js";
declare const Observable_allAreDeferred: (srcs: ReadonlyArray<ObservableLike>) => srcs is readonly DeferredObservableLike<unknown>[];
export default Observable_allAreDeferred;
