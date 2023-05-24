import { Function1 } from "../../functions.js";
import { EnumerableBaseLike, EnumerableWithSideEffectsLike } from "../../types.js";
declare const EnumerableWithSideEffects_concatMap: <TA, TB>(selector: Function1<TA, EnumerableBaseLike<TB>>) => Function1<EnumerableBaseLike<TA>, EnumerableWithSideEffectsLike<TB>>;
export default EnumerableWithSideEffects_concatMap;
