import { MulticastObservableLike, ObservableLike } from "../../../concurrent.js";
import { TypePredicate } from "../../../functions.js";
declare const Observable_allAreMulticasted: TypePredicate<ReadonlyArray<ObservableLike>, ReadonlyArray<MulticastObservableLike>>;
export default Observable_allAreMulticasted;
