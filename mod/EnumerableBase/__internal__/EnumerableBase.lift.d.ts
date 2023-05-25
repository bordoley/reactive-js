import type { ObservableOperatorWithSideEffects, PureObservableOperator } from "../../Observable.js";
import { Function1 } from "../../functions.js";
import { EnumerableBaseLike, EnumeratorLike, ObserverLike } from "../../types.js";
interface EnumerableBaseLift {
    lift<TA, TB>(observerOp: Function1<ObserverLike<TB>, ObserverLike<TA>>, enumeratorOp: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>, isPure: true): PureObservableOperator<TA, TB>;
    lift<TA, TB>(observerOp: Function1<ObserverLike<TB>, ObserverLike<TA>>, enumeratorOp: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>, isPure: false): ObservableOperatorWithSideEffects<TA, TB>;
    lift<TA, TB>(observerOp: Function1<ObserverLike<TB>, ObserverLike<TA>>, enumeratorOp: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>, isPure: boolean): Function1<EnumerableBaseLike<TA>, EnumerableBaseLike<TB>>;
}
declare const EnumerableBase_lift: EnumerableBaseLift["lift"];
export default EnumerableBase_lift;
