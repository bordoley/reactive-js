import { ComputationLike_isPure } from "../../../computations.js";
import { ObservableLike } from "../../../concurrent.js";
import { TypePredicate } from "../../../functions.js";
declare const Observable_allArePure: TypePredicate<ReadonlyArray<ObservableLike>, ReadonlyArray<ObservableLike & {
    [ComputationLike_isPure]: true;
}>>;
export default Observable_allArePure;
