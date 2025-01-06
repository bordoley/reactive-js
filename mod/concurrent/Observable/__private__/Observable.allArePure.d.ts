import { ObservableLike, ObservableLike_isPure } from "../../../concurrent.js";
import { TypePredicate } from "../../../functions.js";
declare const Observable_allArePure: TypePredicate<ReadonlyArray<ObservableLike>, ReadonlyArray<ObservableLike & {
    [ObservableLike_isPure]: true;
}>>;
export default Observable_allArePure;
