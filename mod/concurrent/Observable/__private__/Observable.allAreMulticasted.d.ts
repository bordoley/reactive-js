import { ObservableLike, ObservableLike_isMulticasted } from "../../../concurrent.js";
import { TypePredicate } from "../../../functions.js";
declare const Observable_allAreMulticasted: TypePredicate<ReadonlyArray<ObservableLike>, ReadonlyArray<ObservableLike & {
    [ObservableLike_isMulticasted]: true;
}>>;
export default Observable_allAreMulticasted;
