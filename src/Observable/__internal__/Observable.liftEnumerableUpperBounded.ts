import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import type { EnumerableUpperBoundObservableOperator } from "../../Observable.js";
import { Function1 } from "../../functions.js";
import { EnumeratorLike, ObservableLike, ObserverLike } from "../../types.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_liftRunnableUpperBounded from "./Observable.liftRunnableUpperBounded.js";

const Observable_liftEnumerableUpperBound = <TA, TB>(
  enumeratorOperator: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>,
  observerOperator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
): EnumerableUpperBoundObservableOperator<TA, TB> => {
  const liftEnumerable = Enumerable_lift(observerOperator, enumeratorOperator);

  const liftObservable = Observable_liftRunnableUpperBounded<TA, TB>(
    observerOperator,
  );

  return ((observable: ObservableLike<TA>) =>
    Observable_isEnumerable(observable)
      ? liftEnumerable(observable)
      : liftObservable(observable)) as EnumerableUpperBoundObservableOperator<
    TA,
    TB
  >;
};

export default Observable_liftEnumerableUpperBound;
