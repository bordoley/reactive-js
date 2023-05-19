import type { ObservableOperator } from "../../Observable.js";
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
  ): ObservableOperator<TA, TB>;
}
const Observable_liftEnumerableUpperBounded: ObservableLiftEnumerableUpperBounded["liftEnumerableUpperBounded"] =
  <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ): ObservableOperator<TA, TB> =>
    (source => {
      const sourceSource = (source as any)[LiftedLike_source] ?? source;
      const allFunctions = [
        operator,
        ...((source as any)[LiftedLike_operators] ?? []),
      ];

      return Observable_createLifted(sourceSource, allFunctions, sourceSource);
    }) as ObservableOperator<TA, TB>;

export default Observable_liftEnumerableUpperBounded;
