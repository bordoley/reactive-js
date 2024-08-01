import { ObservableLike, ObservableLike_isDeferred, ObservableLike_isRunnable } from "../../../concurrent.js";
import { TypePredicate } from "../../../functions.js";
declare const Observable_allAreRunnable: TypePredicate<ReadonlyArray<ObservableLike>, ReadonlyArray<ObservableLike & {
    [ObservableLike_isDeferred]: true;
    [ObservableLike_isRunnable]: true;
}>>;
export default Observable_allAreRunnable;
