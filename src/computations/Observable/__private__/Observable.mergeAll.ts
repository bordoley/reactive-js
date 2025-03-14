import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import {
  Mutable,
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import * as Computation from "../../../computations/Computation.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  DeferredObservableWithSideEffectsLike,
  HigherOrderInnerComputationLike,
  ObservableLike,
  ObservableLike_observe,
} from "../../../computations.js";
import {
  Function1,
  Optional,
  bind,
  bindMethod,
  invoke,
  isSome,
  none,
  pipe,
} from "../../../functions.js";
import {
  clampPositiveInteger,
  clampPositiveNonZeroInteger,
} from "../../../math.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import Observer_createWithDelegate from "../../../utils/Observer/__internal__/Observer.createWithDelegate.js";
import * as Queue from "../../../utils/Queue.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_complete,
  LiftedObserverLike_completeDelegate,
  LiftedObserverLike_delegate,
  LiftedObserverLike_notify,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import {
  BackpressureStrategy,
  ObserverLike,
  OverflowBackpressureStrategy,
  QueueLike,
  QueueLike_count,
  QueueLike_dequeue,
  QueueableLike_isReady,
  SinkLike_isCompleted,
  SinkLike_push,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_lift, {
  ObservableLift_isStateless,
} from "./Observable.lift.js";

const createMergeAllObserverOperator: <T>(options?: {
  readonly backpressureStrategy?: BackpressureStrategy;
  readonly capacity?: number;
  readonly concurrency?: number;
}) => Function1<
  ObserverLike<T>,
  ObserverLike<DeferredObservableWithSideEffectsLike<T>>
> = /*@__PURE__*/ (<T>() => {
  const MergeAllObserver_activeCount = Symbol("MergeAllObserver_activeCount");
  const MergeAllObserver_concurrency = Symbol("MergeAllObserver_concurrency");
  const MergeAllObserver_observablesQueue = Symbol(
    "MergeAllObserver_observablesQueue",
  );

  type TProperties = {
    [MergeAllObserver_activeCount]: number;
    readonly [MergeAllObserver_concurrency]: number;
    readonly [MergeAllObserver_observablesQueue]: QueueLike<ObservableLike<T>>;
  };

  const subscribeToObservable = (
    observer: LiftedObserverLike<ObservableLike<T>, T> & TProperties,
    nextObs: ObservableLike<T>,
  ) => {
    observer[MergeAllObserver_activeCount]++;

    pipe(
      observer[LiftedObserverLike_delegate],
      Observer_createWithDelegate<T>,
      DisposableContainer.onComplete(
        bind(onMergeAllObserverInnerObservableComplete, observer),
      ),
      bindMethod(nextObs, ObservableLike_observe),
    );
  };

  function onMergeAllObserverInnerObservableComplete(
    this: LiftedObserverLike<ObservableLike<T>, T> & TProperties,
  ) {
    this[MergeAllObserver_activeCount]--;
    const nextObs: Optional<ObservableLike<T>> =
      this[MergeAllObserver_observablesQueue][QueueLike_dequeue]();

    if (isSome(nextObs)) {
      subscribeToObservable(this, nextObs);
    } else if (
      this[SinkLike_isCompleted] &&
      this[MergeAllObserver_activeCount] <= 0
    ) {
      this[LiftedObserverLike_completeDelegate]();
    }
  }

  const createMergeAllObserver = mixInstanceFactory(
    include(
      DelegatingDisposableMixin,
      LiftedObserverMixin<DeferredObservableWithSideEffectsLike<T>>(),
    ),
    function MergeAllObserver(
      this: Pick<
        LiftedObserverLike<DeferredObservableWithSideEffectsLike<T>>,
        typeof LiftedObserverLike_notify
      > &
        Mutable<TProperties>,
      delegate: ObserverLike<T>,
      capacity: number,
      backpressureStrategy: BackpressureStrategy,
      concurrency: number,
    ): ObserverLike<ObservableLike<T>> {
      init(DelegatingDisposableMixin, this, delegate);
      init(LiftedObserverMixin<ObservableLike<T>, T>(), this, delegate, none);

      this[MergeAllObserver_observablesQueue] = Queue.create({
        capacity,
        backpressureStrategy,
      });
      this[MergeAllObserver_concurrency] = concurrency;
      this[MergeAllObserver_activeCount] = 0;

      return this;
    },
    props<TProperties>({
      [MergeAllObserver_activeCount]: 0,
      [MergeAllObserver_concurrency]: 0,
      [MergeAllObserver_observablesQueue]: none,
    }),
    proto({
      [LiftedObserverLike_notify](
        this: TProperties &
          LiftedObserverLike<DeferredObservableWithSideEffectsLike<T>, T>,
        next: DeferredObservableWithSideEffectsLike<T>,
      ) {
        if (
          this[MergeAllObserver_activeCount] <
          this[MergeAllObserver_concurrency]
        ) {
          subscribeToObservable(this, next);
        } else {
          this[MergeAllObserver_observablesQueue][SinkLike_push](next);
        }

        return this[QueueableLike_isReady];
      },

      [LiftedObserverLike_complete](
        this: LiftedObserverLike<ObservableLike<T>, T> & TProperties,
      ) {
        if (
          this[MergeAllObserver_observablesQueue][QueueLike_count] +
            this[MergeAllObserver_activeCount] ===
          0
        ) {
          this[LiftedObserverLike_completeDelegate]();
        }
      },
    }),
  );

  return (
    options: {
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
      readonly concurrency?: number;
    } = {},
  ) => {
    const concurrency = clampPositiveNonZeroInteger(
      options.concurrency ?? MAX_SAFE_INTEGER,
    );

    const capacity = clampPositiveInteger(options.capacity ?? MAX_SAFE_INTEGER);

    return (observer: ObserverLike<T>) =>
      createMergeAllObserver(
        observer,
        capacity,
        options.backpressureStrategy ?? OverflowBackpressureStrategy,
        concurrency,
      );
  };
})();

const Observable_mergeAll: Observable.Signature["mergeAll"] = ((options?: {
  readonly innerType?: HigherOrderInnerComputationLike;
  readonly backpressureStrategy?: BackpressureStrategy;
  readonly capacity?: number;
  readonly concurrency?: number;
}) =>
  Observable_lift({
    [ObservableLift_isStateless]: false,
    [ComputationLike_isDeferred]: Computation.isDeferred(
      options?.innerType ?? {},
    ),
    [ComputationLike_isPure]: Computation.isPure(options?.innerType ?? {}),
    [ComputationLike_isSynchronous]: Computation.isSynchronous(
      options?.innerType ?? {},
    ),
  })(
    createMergeAllObserverOperator(options),
  )) as Observable.Signature["mergeAll"];

export default Observable_mergeAll;
