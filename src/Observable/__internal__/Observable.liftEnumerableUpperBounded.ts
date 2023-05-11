import type { EnumerableUpperBoundObservableOperator } from "../../Observable.js";
import {
  LiftedLike_operators,
  LiftedLike_source,
} from "../../__internal__/types.js";
import { Function1 } from "../../functions.js";
import { ObserverLike } from "../../types.js";
import Observable_createLifted from "./Observable.createLifted.js";

interface ObservableLiftEnumerableUpperBounded {
  liftEnumerableUpperBounded<TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ): EnumerableUpperBoundObservableOperator<TA, TB>;
}
const Observable_liftEnumerableUpperBounded: ObservableLiftEnumerableUpperBounded["liftEnumerableUpperBounded"] =
  <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ): EnumerableUpperBoundObservableOperator<TA, TB> =>
    (source => {
      const sourceSource = (source as any)[LiftedLike_source] ?? source;
      const allFunctions = [
        operator,
        ...((source as any)[LiftedLike_operators] ?? []),
      ];

      return Observable_createLifted(sourceSource, allFunctions, sourceSource);
    }) as EnumerableUpperBoundObservableOperator<TA, TB>;

export default Observable_liftEnumerableUpperBounded;
