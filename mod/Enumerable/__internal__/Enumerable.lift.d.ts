import type { ObservableOperator, ObservableOperatorWithSideEffects } from "../../Observable.js";
import { Function1 } from "../../functions.js";
import { EnumerableBaseLike, EnumeratorLike, ObserverLike } from "../../types.js";
interface EnumerableLift {
    lift<TA, TB>(observerOp: Function1<ObserverLike<TB>, ObserverLike<TA>>, enumeratorOp: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>, isPure: true): ObservableOperator<TA, TB>;
    lift<TA, TB>(observerOp: Function1<ObserverLike<TB>, ObserverLike<TA>>, enumeratorOp: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>, isPure: false): ObservableOperatorWithSideEffects<TA, TB>;
    lift<TA, TB>(observerOp: Function1<ObserverLike<TB>, ObserverLike<TA>>, enumeratorOp: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>, isPure: boolean): Function1<EnumerableBaseLike<TA>, EnumerableBaseLike<TB>>;
}
declare const Enumerable_lift: EnumerableLift["lift"];
export default Enumerable_lift;
