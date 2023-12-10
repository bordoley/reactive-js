import { ObservableLike, ObservableLike_isDeferred } from "../../../concurrent.js";
import { TypePredicate } from "../../../functions.js";
declare const Observable_allAreDeferred: TypePredicate<readonly ObservableLike<unknown>[], readonly (ObservableLike<unknown> & {
    [ObservableLike_isDeferred]: true;
})[]>;
export default Observable_allAreDeferred;
