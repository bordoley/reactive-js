import type { ObservableOperatorWithSideEffects } from "../../Observable.js";
import { Function1 } from "../../functions.js";
import { EnumeratorLike, ObserverLike } from "../../types.js";
import Observable_lift from "./Observable.lift.js";

const Observable_liftWithSideEffects = <TA, TB>(
  enumeratorOperator: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>,
  observerOperator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
): ObservableOperatorWithSideEffects<TA, TB> =>
  Observable_lift(enumeratorOperator, observerOperator, false);

export default Observable_liftWithSideEffects;
