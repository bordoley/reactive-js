import {
  LiftedLike,
  LiftedLike_operators,
  LiftedLike_source,
} from "../../../__internal__/containers.js";
import { Lift } from "../../../__internal__/rx.js";
import { Function1, newInstance, pipeUnsafe } from "../../../functions.js";
import {
  MulticastObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  PauseableObservableContainerLike,
  PauseableObservableLike,
  PauseableObservableLike_isPaused,
} from "../../../rx.js";
import {
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
} from "../../../util.js";
import Observer_sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";

class LiftedPauseableObservable<TIn, TOut>
  implements
    PauseableObservableLike<TOut>,
    LiftedLike<PauseableObservableContainerLike<TIn>, ObserverLike<any>>
{
  readonly [LiftedLike_source]: PauseableObservableLike<TIn>;
  readonly [LiftedLike_operators]: readonly Function1<
    ObserverLike<any>,
    ObserverLike<any>
  >[];
  readonly [ObservableLike_isEnumerable]: false = false as const;
  readonly [ObservableLike_isRunnable]: false = false as const;

  constructor(
    source: PauseableObservableLike<TIn>,
    operators: readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
  ) {
    this[LiftedLike_source] = source;
    this[LiftedLike_operators] = operators;
  }

  get [PauseableObservableLike_isPaused](): MulticastObservableLike<boolean> {
    return this[LiftedLike_source][PauseableObservableLike_isPaused];
  }

  get [PauseableLike_isPaused](): boolean {
    return this[LiftedLike_source][PauseableLike_isPaused];
  }

  [PauseableLike_pause]() {
    this[LiftedLike_source][PauseableLike_pause]();
  }

  [PauseableLike_resume]() {
    this[LiftedLike_source][PauseableLike_resume]();
  }

  [ObservableLike_observe](observer: ObserverLike<TOut>) {
    pipeUnsafe(
      observer,
      ...this[LiftedLike_operators],
      Observer_sourceFrom(this[LiftedLike_source]),
    );
  }
}

const PauseableObservable_lift: Lift<PauseableObservableContainerLike>["lift"] =

    <TA, TB>(
      operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
    ): Function1<PauseableObservableLike<TA>, PauseableObservableLike<TB>> =>
    source => {
      const sourceSource = (source as any)[LiftedLike_source] ?? source;
      const allFunctions = [
        operator,
        ...((source as any)[LiftedLike_operators] ?? []),
      ];

      return newInstance(LiftedPauseableObservable, sourceSource, allFunctions);
    };

export default PauseableObservable_lift;
