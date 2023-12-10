import { ObservableLike, ObservableLike_isPure } from "../../../concurrent.js";
import { TypePredicate } from "../../../functions.js";
declare const Observable_allArePure: TypePredicate<readonly ObservableLike<unknown>[], readonly (ObservableLike<unknown> & {
    [ObservableLike_isPure]: true;
})[]>;
export default Observable_allArePure;
