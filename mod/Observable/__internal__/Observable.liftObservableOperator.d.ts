import type { ObservableOperatorWithSideEffects, PureObservableOperator } from "../../Observable.js";
import { Function1 } from "../../functions.js";
import { EnumeratorLike, ObservableBaseLike, ObserverLike } from "../../types.js";
interface ObservableLift {
    lift<TA, TB>(enumeratorOperator: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>, observerOperator: Function1<ObserverLike<TB>, ObserverLike<TA>>, isPure: true): PureObservableOperator<TA, TB>;
    lift<TA, TB>(enumeratorOperator: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>, observerOperator: Function1<ObserverLike<TB>, ObserverLike<TA>>, isPure: false): ObservableOperatorWithSideEffects<TA, TB>;
    lift<TA, TB>(enumeratorOperator: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>, observerOperator: Function1<ObserverLike<TB>, ObserverLike<TA>>, isPure: boolean): Function1<ObservableBaseLike<TA>, ObservableBaseLike<TB>>;
}
declare const Observable_liftObservableOperator: ObservableLift["lift"];
export default Observable_liftObservableOperator;
