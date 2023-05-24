import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import type {
  ObservableOperator,
  ObservableOperatorWithSideEffects,
} from "../../Observable.js";
import { Function1 } from "../../functions.js";
import { EnumeratorLike, ObservableLike, ObserverLike } from "../../types.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_liftRunnableUpperBounded from "./Observable.liftRunnableUpperBounded.js";

interface ObservableLift {
  lift<TA, TB>(
    enumeratorOperator: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>,
    observerOperator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
    isPure: true,
  ): ObservableOperator<TA, TB>;

  lift<TA, TB>(
    enumeratorOperator: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>,
    observerOperator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
    isPure: false,
  ): ObservableOperatorWithSideEffects<TA, TB>;

  lift<TA, TB>(
    enumeratorOperator: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>,
    observerOperator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
    isPure: boolean,
  ): ObservableOperatorWithSideEffects<TA, TB>;
}

const Observable_lift: ObservableLift["lift"] = (<TA, TB>(
  enumeratorOperator: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>,
  observerOperator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  isPure: boolean,
) => {
  const liftEnumerable = Enumerable_lift(
    observerOperator,
    enumeratorOperator,
    isPure,
  );

  const liftObservable = Observable_liftRunnableUpperBounded<TA, TB>(
    observerOperator,
  );

  return ((observable: ObservableLike<TA>) =>
    Observable_isEnumerable(observable)
      ? liftEnumerable(observable)
      : liftObservable(observable)) as ObservableOperator<TA, TB>;
}) as ObservableLift["lift"];

export default Observable_lift;
