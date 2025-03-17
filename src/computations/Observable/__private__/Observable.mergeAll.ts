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
  isSome,
  none,
  pipe,
} from "../../../functions.js";
import {
  clampPositiveInteger,
  clampPositiveNonZeroInteger,
} from "../../../math.js";
import * as Consumer from "../../../utils/Consumer.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { LiftedConsumerLike_isReady } from "../../../utils/__mixins__/LiftedConsumerMixin.js";
import {
  LiftedEventListenerLike_notify,
  LiftedEventListenerLike_notifyDelegate,
} from "../../../utils/__mixins__/LiftedEventListenerMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import {
  LiftedSinkLike_complete,
  LiftedSinkLike_completeDelegate,
} from "../../../utils/__mixins__/LiftedSinkMixin.js";
import {
  BackpressureStrategy,
  ConsumerLike,
  EventListenerLike_notify,
  ObserverLike,
  OverflowBackpressureStrategy,
  QueueLike,
  QueueLike_count,
  QueueLike_dequeue,
  SchedulerLike_requestYield,
  SinkLike_isCompleted,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift, {
  ObservableLift_isStateless,
} from "./Observable.lift.js";
import Observable_subscribe from "./Observable.subscribe.js";

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
    readonly [MergeAllObserver_observablesQueue]: ConsumerLike<
      ObservableLike<T>
    > &
      QueueLike<ObservableLike<T>>;
  };

  const subscribeToObservable = (
    observer: LiftedObserverLike<ObservableLike<T>, T> & TProperties,
    nextObs: ObservableLike<T>,
  ) => {
    observer[MergeAllObserver_activeCount]++;

    pipe(
      nextObs,
      Observable_forEach<T>(v => {
        observer[LiftedEventListenerLike_notifyDelegate](v);
        if (!observer[LiftedConsumerLike_isReady]) {
          observer[SchedulerLike_requestYield]();
        }
      }),
      Observable_subscribe(observer),
      Disposable.addTo(observer),
      DisposableContainer.onComplete(
        bind(onMergeAllObserverInnerObservableComplete, observer),
      ),
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
      this[LiftedSinkLike_completeDelegate]();
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
        typeof LiftedEventListenerLike_notify
      > &
        Mutable<TProperties>,
      delegate: ObserverLike<T>,
      capacity: number,
      backpressureStrategy: BackpressureStrategy,
      concurrency: number,
    ): ObserverLike<ObservableLike<T>> {
      init(DelegatingDisposableMixin, this, delegate);
      init(LiftedObserverMixin<ObservableLike<T>, T>(), this, delegate, none);

      this[MergeAllObserver_observablesQueue] = pipe(
        Consumer.create<ObservableLike<T>>({
          capacity,
          backpressureStrategy,
        }),
        Disposable.addTo(this),
      );
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
      [LiftedEventListenerLike_notify](
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
          this[MergeAllObserver_observablesQueue][EventListenerLike_notify](
            next,
          );
        }
      },

      [LiftedSinkLike_complete](
        this: LiftedObserverLike<ObservableLike<T>, T> & TProperties,
      ) {
        if (
          this[MergeAllObserver_observablesQueue][QueueLike_count] +
            this[MergeAllObserver_activeCount] ===
          0
        ) {
          this[LiftedSinkLike_completeDelegate]();
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
