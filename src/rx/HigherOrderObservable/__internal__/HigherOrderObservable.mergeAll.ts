import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { clampPositiveNonZeroInteger } from "../../../__internal__/math.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mutable,
  createInstanceFactory,
  delegatingMixin,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  MergeAllObserver_activeCount,
  MergeAllObserver_maxBufferSize,
  MergeAllObserver_maxConcurrency,
  MergeAllObserver_observablesQueue,
  MergeAllObserver_onDispose,
} from "../../../__internal__/symbols.js";
import {
  IndexedQueueLike,
  QueueLike,
  QueueLike_dequeue,
} from "../../../__internal__/util.internal.js";
import {
  ConcatAll,
  ContainerOf,
  ContainerOperator,
} from "../../../containers.js";
import {
  Function1,
  SideEffect,
  bindMethod,
  isSome,
  none,
  partial,
  pipe,
} from "../../../functions.js";
import {
  DispatcherLike_scheduler,
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import {
  CollectionLike_count,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_enqueue,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import IndexedQueue_createFifoQueue from "../../../util/Queue/__internal__/IndexedQueue.createFifoQueue.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribeWithDispatcherConfig from "../../Observable/__internal__/Observable.subscribeWithDispatcherConfig.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";

const HigherOrderObservable_mergeAll = <C extends ObservableLike>(
  lift: <T>(
    f: Function1<ObserverLike<T>, ObserverLike<ContainerOf<C, T>>>,
  ) => ContainerOperator<C, ContainerOf<C, T>, T>,
): ConcatAll<
  C,
  {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
  }
>["concatAll"] => {
  const createMergeAllObserver: <T>(
    delegate: ObserverLike<T>,
    maxBufferSize: number,
    maxConcurrency: number,
  ) => ObserverLike<ContainerOf<C, T>> = (<T>() => {
    const typedObserverMixin = Observer_mixin<ContainerOf<C, T>>();

    type TProperties = {
      [MergeAllObserver_activeCount]: number;
      readonly [MergeAllObserver_maxBufferSize]: number;
      readonly [MergeAllObserver_maxConcurrency]: number;
      readonly [MergeAllObserver_onDispose]: SideEffect;
      readonly [MergeAllObserver_observablesQueue]: IndexedQueueLike<ObservableLike>;
    };

    const subscribeNext = (
      observer: TProperties &
        ObserverLike<ContainerOf<C, T>> &
        DelegatingLike<ObserverLike<T>>,
    ) => {
      if (
        observer[MergeAllObserver_activeCount] <
        observer[MergeAllObserver_maxConcurrency]
      ) {
        const nextObs =
          observer[MergeAllObserver_observablesQueue][QueueLike_dequeue]();

        if (isSome(nextObs)) {
          observer[MergeAllObserver_activeCount]++;

          pipe(
            nextObs,
            Observable_forEach<ObservableLike, T>(
              bindMethod(
                observer[DelegatingLike_delegate],
                ObserverLike_notify,
              ),
            ),
            Observable_subscribeWithDispatcherConfig(observer),
            Disposable_addTo(observer[DelegatingLike_delegate]),
            Disposable_onComplete(observer[MergeAllObserver_onDispose]),
          );
        } else if (observer[DisposableLike_isDisposed]) {
          observer[DelegatingLike_delegate][DisposableLike_dispose]();
        }
      }
    };

    return createInstanceFactory(
      mix(
        include(Disposable_mixin, typedObserverMixin, delegatingMixin()),
        function MergeAllObserver(
          instance: Pick<
            ObserverLike<ContainerOf<C, T>>,
            typeof ObserverLike_notify
          > &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          maxBufferSize: number,
          maxConcurrency: number,
        ): ObserverLike<ContainerOf<C, T>> {
          init(Disposable_mixin, instance);
          init(
            typedObserverMixin,
            instance,
            delegate[DispatcherLike_scheduler],
            delegate[QueueableLike_capacity],
            delegate[QueueableLike_backpressureStrategy],
          );
          init(delegatingMixin<ObserverLike<T>>(), instance, delegate);

          instance[MergeAllObserver_observablesQueue] =
            IndexedQueue_createFifoQueue(MAX_SAFE_INTEGER, "overflow");
          instance[MergeAllObserver_maxBufferSize] = maxBufferSize;
          instance[MergeAllObserver_maxConcurrency] = maxConcurrency;

          instance[MergeAllObserver_activeCount] = 0;
          instance[MergeAllObserver_onDispose] = () => {
            instance[MergeAllObserver_activeCount]--;
            subscribeNext(instance);
          };

          pipe(
            instance,
            Disposable_addTo(delegate),
            Disposable_onComplete(() => {
              if (delegate[DisposableLike_isDisposed]) {
                // FIXME: Clear the queue
              } else if (
                instance[MergeAllObserver_observablesQueue][
                  CollectionLike_count
                ] +
                  instance[MergeAllObserver_activeCount] ===
                0
              ) {
                delegate[DisposableLike_dispose]();
              }
            }),
          );

          return instance;
        },
        props<TProperties>({
          [MergeAllObserver_activeCount]: 0,
          [MergeAllObserver_maxBufferSize]: 0,
          [MergeAllObserver_maxConcurrency]: 0,
          [MergeAllObserver_onDispose]: none,
          [MergeAllObserver_observablesQueue]: none,
        }),
        {
          [ObserverLike_notify](
            this: TProperties &
              ObserverLike<ContainerOf<C, T>> &
              DelegatingLike<ObserverLike<T>> &
              QueueLike<ContainerOf<C, T>>,
            next: ContainerOf<C, T>,
          ) {
            Observer_assertState(this);
            this[MergeAllObserver_observablesQueue][QueueableLike_enqueue](
              next,
            );

            // Drop old events if the maxBufferSize has been exceeded
            if (
              this[MergeAllObserver_observablesQueue][CollectionLike_count] +
                this[MergeAllObserver_activeCount] >
              this[MergeAllObserver_maxBufferSize]
            ) {
              this[MergeAllObserver_observablesQueue][QueueLike_dequeue]();
            }
            subscribeNext(this);
          },
        },
      ),
    );
  })();

  return <T>(
    options: {
      readonly maxBufferSize?: number;
      readonly maxConcurrency?: number;
    } = {},
  ): ContainerOperator<C, ContainerOf<C, T>, T> => {
    const maxBufferSize = clampPositiveNonZeroInteger(
      options.maxBufferSize ?? MAX_SAFE_INTEGER,
    );

    const maxConcurrency = clampPositiveNonZeroInteger(
      options.maxConcurrency ?? MAX_SAFE_INTEGER,
    );

    const f: Function1<ObserverLike<T>, ObserverLike<ContainerOf<C, T>>> = pipe(
      createMergeAllObserver,
      partial(maxBufferSize, maxConcurrency),
    );

    return lift(f);
  };
};

export default HigherOrderObservable_mergeAll;
