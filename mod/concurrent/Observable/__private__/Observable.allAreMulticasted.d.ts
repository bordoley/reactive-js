import { ObservableLike, ObservableLike_isMulticasted } from "../../../concurrent.js";
import { TypePredicate } from "../../../functions.js";
declare const Observable_allAreMulticasted: TypePredicate<readonly ObservableLike<unknown>[], readonly (ObservableLike<unknown> & {
    [ObservableLike_isMulticasted]: true;
})[]>;
export default Observable_allAreMulticasted;
