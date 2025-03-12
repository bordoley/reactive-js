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
} from "../../../computations.js";
import {
  Function1,
  Optional,
  bind,
  bindMethod,
  isSome,
  none,
  pipe,
} from "../../../functions.js";
import {
  clampPositiveInteger,
  clampPositiveNonZeroInteger,
} from "../../../math.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as Queue from "../../../utils/Queue.js";
import DelegatingObserverMixin from "../../../utils/__mixins__/DelegatingObserverMixin.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_delegate,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import {
  ObserverMixinBaseLike,
  ObserverMixinBaseLike_notify,
} from "../../../utils/__mixins__/ObserverMixin.js";
import {
  BackpressureStrategy,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  ObserverLike,
  OverflowBackpressureStrategy,
  QueueLike,
  QueueLike_count,
  QueueLike_dequeue,
  QueueableLike_enqueue,
  QueueableLike_isReady,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift, {
  ObservableLift_isStateless,
} from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";

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
      nextObs,
      Observable_forEach(
        bindMethod(
          observer[LiftedObserverLike_delegate],
          QueueableLike_enqueue,
        ),
      ),
      Observable_subscribeWithConfig(
        observer[LiftedObserverLike_delegate],
        observer,
      ),
      Disposable.addTo(observer[LiftedObserverLike_delegate]),
      DisposableContainer.onComplete(
        bind(onMergeAllObserverInnerObservableComplete, observer),
      ),
    );
  };

  function onMergeAllObserverComplete(
    this: LiftedObserverLike<ObservableLike<T>, T> & TProperties,
  ) {
    const delegate = this[LiftedObserverLike_delegate];
    if (delegate[DisposableLike_isDisposed]) {
      // FIXME: Clear the queue
    } else if (
      this[MergeAllObserver_observablesQueue][QueueLike_count] +
        this[MergeAllObserver_activeCount] ===
      0
    ) {
      delegate[DisposableLike_dispose]();
    }
  }

  function onMergeAllObserverInnerObservableComplete(
    this: LiftedObserverLike<ObservableLike<T>, T> & TProperties,
  ) {
    this[MergeAllObserver_activeCount]--;
    const nextObs: Optional<ObservableLike<T>> =
      this[MergeAllObserver_observablesQueue][QueueLike_dequeue]();

    if (isSome(nextObs)) {
      subscribeToObservable(this, nextObs);
    } else if (
      this[DisposableLike_isDisposed] &&
      this[MergeAllObserver_activeCount] <= 0
    ) {
      this[LiftedObserverLike_delegate][DisposableLike_dispose]();
    }
  }

  const createMergeAllObserver = mixInstanceFactory(
    include(
      DisposableMixin,
      DelegatingObserverMixin<DeferredObservableWithSideEffectsLike<T>>(),
      LiftedObserverMixin(),
    ),
    function MergeAllObserver(
      this: ObserverMixinBaseLike<DeferredObservableWithSideEffectsLike<T>> &
        Mutable<TProperties>,
      delegate: ObserverLike<T>,
      capacity: number,
      backpressureStrategy: BackpressureStrategy,
      concurrency: number,
    ): ObserverLike<ObservableLike<T>> {
      init(DisposableMixin, this);
      init(DelegatingObserverMixin(), this, delegate);
      init(LiftedObserverMixin(), this, delegate);

      this[MergeAllObserver_observablesQueue] = Queue.create({
        capacity,
        backpressureStrategy,
      });
      this[MergeAllObserver_concurrency] = concurrency;

      this[MergeAllObserver_activeCount] = 0;

      pipe(this, DisposableContainer.onComplete(onMergeAllObserverComplete));

      return this;
    },
    props<TProperties>({
      [MergeAllObserver_activeCount]: 0,
      [MergeAllObserver_concurrency]: 0,
      [MergeAllObserver_observablesQueue]: none,
    }),
    proto({
      [ObserverMixinBaseLike_notify](
        this: TProperties &
          LiftedObserverLike<DeferredObservableWithSideEffectsLike<T>, T>,
        next: DeferredObservableWithSideEffectsLike<T>,
      ) {
        const delegate = this[LiftedObserverLike_delegate];

        return this[MergeAllObserver_activeCount] <
          this[MergeAllObserver_concurrency]
          ? (subscribeToObservable(this, next), delegate[QueueableLike_isReady])
          : this[MergeAllObserver_observablesQueue][QueueableLike_enqueue](
              next,
            );
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
