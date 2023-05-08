import {
  Lift,
  LiftedLike_operators,
  LiftedLike_source,
} from "../../../__internal__/core.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins.js";
import {
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
  PauseableObservableContainer,
  PauseableObservableLike,
} from "../../../core.js";
import Pauseable_delegatingMixin from "../../../core/Pauseable/__internal__/Pauseable.delegatingMixin.js";
import { Function1 } from "../../../functions.js";
import Observable_liftMixin from "../../Observable/__internal__/Observable.liftMixin.js";

const createLiftedPauseableObservable: <TIn, TOut>(
  source: PauseableObservableLike<TIn>,
  ops: readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
) => PauseableObservableLike<TOut> = /*@__PURE__*/ (<TIn, TOut>() => {
  return createInstanceFactory(
    mix(
      include(Observable_liftMixin(), Pauseable_delegatingMixin),
      function LiftedPauseableObservable(
        instance: unknown,
        source: PauseableObservableLike<TIn>,
        ops: readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
      ): PauseableObservableLike<TOut> {
        init(Observable_liftMixin<TIn, TOut>(), instance, source, ops, {
          [ObservableLike_isDeferred]: false,
          [ObservableLike_isEnumerable]: false,
          [ObservableLike_isRunnable]: false,
        });
        init(Pauseable_delegatingMixin, instance, source);

        return instance as PauseableObservableLike<TOut>;
      },
    ),
  );
})();

const PauseableObservable_lift: Lift<PauseableObservableContainer>["lift"] =
  <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ): Function1<PauseableObservableLike<TA>, PauseableObservableLike<TB>> =>
  source => {
    const sourceSource = (source as any)[LiftedLike_source] ?? source;
    const allFunctions = [
      operator,
      ...((source as any)[LiftedLike_operators] ?? []),
    ];

    return createLiftedPauseableObservable(sourceSource, allFunctions);
  };

export default PauseableObservable_lift;
