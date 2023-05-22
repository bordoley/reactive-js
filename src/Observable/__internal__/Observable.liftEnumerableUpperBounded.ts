import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import type { EnumerableUpperBoundObservableOperator } from "../../Observable.js";
import { Function1, invoke, pipeLazy } from "../../functions.js";
import {
  EnumerableLike_enumerate,
  EnumeratorLike,
  ObservableLike,
  ObserverLike,
} from "../../types.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_liftRunnableUpperBounded from "./Observable.liftRunnableUpperBounded.js";

const Observable_liftEnumerableUpperBound = <TA, TB>(
  enumeratorOperator: Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>,
  observerOperator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
): EnumerableUpperBoundObservableOperator<TA, TB> => {
  const lift = Observable_liftRunnableUpperBounded<TA, TB>(observerOperator);

  return ((observable: ObservableLike<TA>) =>
    Observable_isEnumerable(observable)
      ? Enumerable_create(
          pipeLazy(
            observable,
            invoke(EnumerableLike_enumerate),
            enumeratorOperator,
          ),
        )
      : lift(observable)) as EnumerableUpperBoundObservableOperator<TA, TB>;
};

export default Observable_liftEnumerableUpperBound;
