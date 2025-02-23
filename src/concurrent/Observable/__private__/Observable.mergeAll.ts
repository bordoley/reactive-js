import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import {
  clampPositiveInteger,
  clampPositiveNonZeroInteger,
} from "../../../__internal__/math.js";
import {
  Mutable,
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  DeferredObservableWithSideEffectsLike,
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObserverLike,
  ObserverLike_notify,
} from "../../../concurrent.js";
import {
  Function1,
  Optional,
  bind,
  bindMethod,
  isSome,
  none,
  pipe,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as Queue from "../../../utils/Queue.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import {
  BackpressureStrategy,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  OverflowBackpressureStrategy,
  QueueLike,
  QueueLike_count,
  QueueLike_dequeue,
  QueueableLike_enqueue,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observer_assertObserverState from "../../Observer/__private__/Observer.assertObserverState.js";
import DelegatingObserverMixin from "../../__mixins__/DelegatingObserverMixin.js";
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
  const MergeAllObserver_delegate = Symbol("MergeAllObserver_delegate");
  const MergeAllObserver_observablesQueue = Symbol(
    "MergeAllObserver_observablesQueue",
  );

  type TProperties = {
    [MergeAllObserver_activeCount]: number;
    readonly [MergeAllObserver_concurrency]: number;
    readonly [MergeAllObserver_delegate]: ObserverLike<T>;
    readonly [MergeAllObserver_observablesQueue]: QueueLike<ObservableLike<T>>;
  };

  const subscribeToObservable = (
    observer: ObserverLike<ObservableLike<T>> & TProperties,
    nextObs: ObservableLike<T>,
  ) => {
    observer[MergeAllObserver_activeCount]++;

    pipe(
      nextObs,
      Observable_forEach(
        bindMethod(observer[MergeAllObserver_delegate], ObserverLike_notify),
      ),
      Observable_subscribeWithConfig(
        observer[MergeAllObserver_delegate],
        observer,
      ),
      Disposable.addTo(observer[MergeAllObserver_delegate]),
      DisposableContainer.onComplete(
        bind(onMergeAllObserverInnerObservableComplete, observer),
      ),
    );
  };

  function onMergeAllObserverComplete(
    this: ObserverLike<ObservableLike<T>> & TProperties,
  ) {
    const delegate = this[MergeAllObserver_delegate];
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
    this: ObserverLike<ObservableLike<T>> & TProperties,
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
      this[MergeAllObserver_delegate][DisposableLike_dispose]();
    }
  }

  const createMergeAllObserver = mixInstanceFactory(
    include(
      DisposableMixin,
      DelegatingObserverMixin<DeferredObservableWithSideEffectsLike<T>>(),
    ),
    function MergeAllObserver(
      instance: Pick<
        ObserverLike<DeferredObservableWithSideEffectsLike<T>>,
        typeof ObserverLike_notify
      > &
        Mutable<TProperties>,
      delegate: ObserverLike<T>,
      capacity: number,
      backpressureStrategy: BackpressureStrategy,
      concurrency: number,
    ): ObserverLike<ObservableLike<T>> {
      init(DisposableMixin, instance);
      init(DelegatingObserverMixin(), instance, delegate);

      instance[MergeAllObserver_observablesQueue] = Queue.create({
        capacity,
        backpressureStrategy,
      });
      instance[MergeAllObserver_concurrency] = concurrency;
      instance[MergeAllObserver_delegate] = delegate;

      instance[MergeAllObserver_activeCount] = 0;

      pipe(
        instance,
        DisposableContainer.onComplete(onMergeAllObserverComplete),
      );

      return instance;
    },
    props<TProperties>({
      [MergeAllObserver_activeCount]: 0,
      [MergeAllObserver_concurrency]: 0,
      [MergeAllObserver_delegate]: none,
      [MergeAllObserver_observablesQueue]: none,
    }),
    {
      [ObserverLike_notify]: Observer_assertObserverState(function (
        this: TProperties &
          ObserverLike<DeferredObservableWithSideEffectsLike<T>> &
          QueueLike<DeferredObservableWithSideEffectsLike<T>>,
        next: DeferredObservableWithSideEffectsLike<T>,
      ) {
        if (
          this[MergeAllObserver_activeCount] <
          this[MergeAllObserver_concurrency]
        ) {
          subscribeToObservable(this, next);
        } else {
          this[MergeAllObserver_observablesQueue][QueueableLike_enqueue](next);
        }
      }),
    },
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
  readonly innerType?: {
    readonly [ObservableLike_isDeferred]: boolean;
    readonly [ObservableLike_isPure]: boolean;
    readonly [ObservableLike_isRunnable]: boolean;
  };
  readonly backpressureStrategy?: BackpressureStrategy;
  readonly capacity?: number;
  readonly concurrency?: number;
}) =>
  Observable_lift({
    [ObservableLift_isStateless]: false,
    ...(options?.innerType ?? {
      [ObservableLike_isDeferred]: true,
      [ObservableLike_isPure]: true,
      [ObservableLike_isRunnable]: true,
    }),
  })(
    createMergeAllObserverOperator(options),
  )) as Observable.Signature["mergeAll"];

export default Observable_mergeAll;
