import {
  LiftedLike_operators,
  LiftedLike_source,
} from "../../__internal__/types.js";
import { Function1 } from "../../functions.js";
import {
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
} from "../../types.js";
import Observable_createLifted from "./Observable.createLifted.js";

const Observable_liftUpperBoundedBy =
  (config: {
    readonly [ObservableLike_isDeferred]: boolean;
    readonly [ObservableLike_isEnumerable]: boolean;
    readonly [ObservableLike_isRunnable]: boolean;
  }) =>
  <TA, TB>(operator: Function1<ObserverLike<TB>, ObserverLike<TA>>) =>
  (source: ObservableLike) => {
    const sourceSource = (source as any)[LiftedLike_source] ?? source;
    const allFunctions = [
      operator,
      ...((source as any)[LiftedLike_operators] ?? []),
    ];

    const isEnumerable =
      config[ObservableLike_isEnumerable] &&
      sourceSource[ObservableLike_isEnumerable];
    const isRunnable =
      isEnumerable ||
      (config[ObservableLike_isRunnable] &&
        sourceSource[ObservableLike_isRunnable]);
    const isDeferredObservable =
      isRunnable ||
      (config[ObservableLike_isDeferred] &&
        sourceSource[ObservableLike_isDeferred]);

    const liftedConfig = {
      [ObservableLike_isEnumerable]: isEnumerable,
      [ObservableLike_isRunnable]: isRunnable,
      [ObservableLike_isDeferred]: isDeferredObservable,
    };

    return Observable_createLifted(sourceSource, allFunctions, liftedConfig);
  };

export default Observable_liftUpperBoundedBy;
