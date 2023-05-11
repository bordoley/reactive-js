import type { ObservableOperator } from "../../Observable.js";
import { createInstanceFactory } from "../../__internal__/mixins.js";
import {
  LiftedLike_operators,
  LiftedLike_source,
} from "../../__internal__/types.js";
import { Function1 } from "../../functions.js";
import { ObserverLike } from "../../types.js";
import Observable_liftMixin from "./Observable.liftMixin.js";

interface ObservableLift {
  lift<TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ): ObservableOperator<TA, TB>;
}
const Observable_liftSource: ObservableLift["lift"] = (<TA, TB>() => {
  const createLiftedObservable = createInstanceFactory(
    Observable_liftMixin<TA, TB>(),
  );

  return (
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ): ObservableOperator<TA, TB> =>
    (source => {
      const sourceSource = (source as any)[LiftedLike_source] ?? source;
      const allFunctions = [
        operator,
        ...((source as any)[LiftedLike_operators] ?? []),
      ];

      return createLiftedObservable(sourceSource, allFunctions, sourceSource);
    }) as ObservableOperator<TA, TB>;
})();

export default Observable_liftSource;
