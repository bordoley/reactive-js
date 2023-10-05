import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
  unsafeCast,
} from "../../../__internal__/mixins.js";
import {
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObserverLike,
  PauseableObservableLike,
} from "../../../concurrent.js";
import { Function1 } from "../../../functions.js";
import {
  PauseableLike,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
} from "../../../rx.js";
import LiftedObservableMixin, {
  LiftedObservableLike,
  LiftedObservableLike_operators,
  LiftedObservableLike_source,
} from "../../__mixins__/LiftedObservableMixin.js";

const createLiftedPauseableObservable: <TIn, TOut>(
  source: PauseableObservableLike<TIn>,
  ops: readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
) => PauseableObservableLike<TOut> = /*@__PURE__*/ (<TIn, TOut>() => {
  return createInstanceFactory(
    mix(
      include(LiftedObservableMixin()),
      function LiftedPauseableObservable(
        instance: PauseableLike,
        source: PauseableObservableLike<TIn>,
        ops: readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
      ): PauseableObservableLike<TOut> {
        init(
          LiftedObservableMixin<TIn, TOut, PauseableObservableLike<TIn>>(),
          instance,
          source,
          ops,
          {
            [ObservableLike_isDeferred]: false,
            [ObservableLike_isPure]: true,
            [ObservableLike_isRunnable]: false,
          },
        );

        return instance as PauseableObservableLike<TOut>;
      },
      props({}),
      {
        [ObservableLike_isPure]: true as const,

        get [PauseableLike_isPaused]() {
          unsafeCast<
            LiftedObservableLike<TIn, TOut, PauseableObservableLike<TIn>>
          >(this);
          return this[LiftedObservableLike_source][PauseableLike_isPaused];
        },
        [PauseableLike_pause](
          this: LiftedObservableLike<TIn, TOut, PauseableObservableLike<TIn>>,
        ): void {
          this[LiftedObservableLike_source][PauseableLike_pause]();
        },
        [PauseableLike_resume](
          this: LiftedObservableLike<TIn, TOut, PauseableObservableLike<TIn>>,
        ): void {
          this[LiftedObservableLike_source][PauseableLike_resume]();
        },
      },
    ),
  );
})();

const PauseableObservable_lift =
  <TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ): Function1<PauseableObservableLike<TA>, PauseableObservableLike<TB>> =>
  source => {
    const sourceSource = (source as any)[LiftedObservableLike_source] ?? source;
    const allFunctions = [
      operator,
      ...((source as any)[LiftedObservableLike_operators] ?? []),
    ];

    return createLiftedPauseableObservable(sourceSource, allFunctions);
  };

export default PauseableObservable_lift;
