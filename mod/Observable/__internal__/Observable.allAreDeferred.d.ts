import { TypePredicate } from "../../functions.js";
import { DeferredObservableLike, ObservableLike } from "../../types.js";
declare const Observable_allAreDeferred: TypePredicate<ReadonlyArray<ObservableLike>, ReadonlyArray<DeferredObservableLike>>;
export default Observable_allAreDeferred;
