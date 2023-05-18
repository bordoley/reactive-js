import { Function1 } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";
declare const Enumerator_concatMap: <TA, TB>(selector: Function1<TA, EnumeratorLike<TB>>) => Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>;
export default Enumerator_concatMap;
