import { ComputationLike_isSynchronous } from "../../../computations.js";
import { ObservableLike, ObservableLike_isDeferred } from "../../../concurrent.js";
import { TypePredicate } from "../../../functions.js";
declare const Observable_allAreRunnable: TypePredicate<ReadonlyArray<ObservableLike>, ReadonlyArray<ObservableLike & {
    [ObservableLike_isDeferred]: true;
    [ComputationLike_isSynchronous]: true;
}>>;
export default Observable_allAreRunnable;
