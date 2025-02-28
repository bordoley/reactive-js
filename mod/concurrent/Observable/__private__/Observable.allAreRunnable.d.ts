import { ComputationLike_isDeferred, ComputationLike_isSynchronous } from "../../../computations.js";
import { ObservableLike } from "../../../concurrent.js";
import { TypePredicate } from "../../../functions.js";
declare const Observable_allAreRunnable: TypePredicate<ReadonlyArray<ObservableLike>, ReadonlyArray<ObservableLike & {
    [ComputationLike_isDeferred]: true;
    [ComputationLike_isSynchronous]: true;
}>>;
export default Observable_allAreRunnable;
