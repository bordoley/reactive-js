import type { ObservableOperatorWithSideEffects } from "../../Observable.js";
import { Function1 } from "../../functions.js";
import { EnumeratorLike, ObserverLike } from "../../types.js";
declare const Observable_liftObservableOperatorWithSideEffects: <TA, TB>(enumeratorOperator: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>, observerOperator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => ObservableOperatorWithSideEffects<TA, TB>;
export default Observable_liftObservableOperatorWithSideEffects;
