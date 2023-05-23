import { Function1 } from "../../functions.js";
import { EnumerableLike, EnumeratorLike, ObserverLike } from "../../types.js";
declare const Enumerable_lift: <TA, TB>(observerOp: Function1<ObserverLike<TB>, ObserverLike<TA>>, enumeratorOp: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>) => Function1<EnumerableLike<TA>, EnumerableLike<TB>>;
export default Enumerable_lift;
