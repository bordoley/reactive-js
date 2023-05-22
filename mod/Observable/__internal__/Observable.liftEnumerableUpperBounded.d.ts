import type { EnumerableUpperBoundObservableOperator } from "../../Observable.js";
import { Function1 } from "../../functions.js";
import { EnumeratorLike, ObserverLike } from "../../types.js";
declare const Observable_liftEnumerableUpperBound: <TA, TB>(enumeratorOperator: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>, observerOperator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => EnumerableUpperBoundObservableOperator<TA, TB>;
export default Observable_liftEnumerableUpperBound;
