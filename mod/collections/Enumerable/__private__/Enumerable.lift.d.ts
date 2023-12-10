import { EnumerableLike, EnumeratorLike } from "../../../collections.js";
import { Function1 } from "../../../functions.js";
declare const Enumerable_lift: <TA, TB>(enumeratorOp: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>) => Function1<EnumerableLike<TA>, EnumerableLike<TB>>;
export default Enumerable_lift;
