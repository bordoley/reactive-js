import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Observable_liftMixin from "../../Observable/__internal__/Observable.liftMixin.js";
import type * as PauseableObservable from "../../PauseableObservable.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  Lift,
  LiftedLike_operators,
  LiftedLike_source,
} from "../../__internal__/types.js";
import { Function1, unsafeCast } from "../../functions.js";
import {
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObserverLike,
  PauseableLike,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  PauseableObservableLike,
} from "../../types.js";

const createLiftedPauseableObservable: <TIn, TOut>(
  source: PauseableObservableLike<TIn>,
  ops: readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
) => PauseableObservableLike<TOut> = /*@__PURE__*/ (<TIn, TOut>() => {
  return createInstanceFactory(
    mix(
      include(Observable_liftMixin(), Delegating_mixin()),
      function LiftedPauseableObservable(
        instance: PauseableLike,
        source: PauseableObservableLike<TIn>,
        ops: readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
      ): PauseableObservableLike<TOut> {
        init(Observable_liftMixin<TIn, TOut>(), instance, source, ops, {
          [ObservableLike_isDeferred]: false,
          [ObservableLike_isRunnable]: false,
        });
        init(Delegating_mixin(), instance, source);

        return instance as PauseableObservableLike<TOut>;
      },
      props({}),
      {
        [ObservableLike_isPure]: true as const,

        get [PauseableLike_isPaused]() {
          unsafeCast<DelegatingLike<PauseableObservableLike<TIn>>>(this);
          return this[DelegatingLike_delegate][PauseableLike_isPaused];
        },
        [PauseableLike_pause](
          this: DelegatingLike<PauseableObservableLike<TIn>>,
        ): void {
          this[DelegatingLike_delegate][PauseableLike_pause]();
        },
        [PauseableLike_resume](
          this: DelegatingLike<PauseableObservableLike<TIn>>,
        ): void {
          this[DelegatingLike_delegate][PauseableLike_resume]();
        },
      },
    ),
  );
})();

const PauseableObservable_lift: Lift<PauseableObservable.Type>["lift"] =
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
