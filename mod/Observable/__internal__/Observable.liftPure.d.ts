import type { ObservableOperator } from "../../Observable.js";
import { Function1 } from "../../functions.js";
import { EnumeratorLike, ObserverLike } from "../../types.js";
declare const Observable_liftPure: <TA, TB>(enumeratorOperator: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>, observerOperator: Function1<ObserverLike<TB>, ObserverLike<TA>>) => ObservableOperator<TA, TB>;
export default Observable_liftPure;
