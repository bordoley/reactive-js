import EnumerableBase_lift from "../../EnumerableBase/__internal__/EnumerableBase.lift.js";
import type {
  ObservableOperatorWithSideEffects,
  PureObservableOperator,
} from "../../Observable.js";
import { Function1 } from "../../functions.js";
import {
  EnumeratorLike,
  ObservableBaseLike,
  ObservableLike,
  ObserverLike,
} from "../../types.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_liftRunnableBoundedObservableOperatorWithSideEffects from "./Observable.liftRunnableBoundedObservableOperatorWithSideEffects.js";
import Observable_liftRunnableBoundedPureObservableOperator from "./Observable.liftRunnableBoundedPureObservableOperator.js";

interface ObservableLift {
  lift<TA, TB>(
    enumeratorOperator: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>,
    observerOperator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
    isPure: true,
  ): PureObservableOperator<TA, TB>;

  lift<TA, TB>(
    enumeratorOperator: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>,
    observerOperator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
    isPure: false,
  ): ObservableOperatorWithSideEffects<TA, TB>;

  lift<TA, TB>(
    enumeratorOperator: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>,
    observerOperator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
    isPure: boolean,
  ): Function1<ObservableBaseLike<TA>, ObservableBaseLike<TB>>;
}

const Observable_liftObservableOperator: ObservableLift["lift"] = (<TA, TB>(
  enumeratorOperator: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>,
  observerOperator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  isPure: boolean,
) => {
  const liftEnumerable = EnumerableBase_lift(
    observerOperator,
    enumeratorOperator,
    isPure,
  );

  const liftObservable = isPure
    ? Observable_liftRunnableBoundedPureObservableOperator<TA, TB>(
        observerOperator,
      )
    : Observable_liftRunnableBoundedObservableOperatorWithSideEffects<TA, TB>(
        observerOperator,
      );

  return (observable: ObservableLike<TA>) =>
    Observable_isEnumerable(observable)
      ? liftEnumerable(observable)
      : liftObservable(observable);
}) as ObservableLift["lift"];

export default Observable_liftObservableOperator;
