import type { ObservableOperator, ObservableOperatorWithSideEffects } from "../../Observable.js";
import { Function1 } from "../../functions.js";
import { EnumeratorLike, ObserverLike } from "../../types.js";
interface ObservableLift {
    lift<TA, TB>(enumeratorOperator: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>, observerOperator: Function1<ObserverLike<TB>, ObserverLike<TA>>, isPure: true): ObservableOperator<TA, TB>;
    lift<TA, TB>(enumeratorOperator: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>, observerOperator: Function1<ObserverLike<TB>, ObserverLike<TA>>, isPure: false): ObservableOperatorWithSideEffects<TA, TB>;
    lift<TA, TB>(enumeratorOperator: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>, observerOperator: Function1<ObserverLike<TB>, ObserverLike<TA>>, isPure: boolean): ObservableOperatorWithSideEffects<TA, TB>;
}
declare const Observable_lift: ObservableLift["lift"];
export default Observable_lift;
