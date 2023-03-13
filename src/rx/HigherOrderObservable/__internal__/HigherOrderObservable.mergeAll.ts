import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { max } from "../../../__internal__/math.js";
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
  IndexedQueueLike,
  QueueLike,
  QueueLike_count,
  QueueLike_pull,
} from "../../../__internal__/util.internal.js";
import {
  ConcatAll,
  ContainerOf,
  ContainerOperator,
} from "../../../containers.js";
import {
  Function1,
  SideEffect,
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
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueableLike_maxBufferSize,
  QueueableLike_push,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import IndexedQueue_createFifoQueue from "../../../util/Queue/__internal__/IndexedQueue.createFifoQueue.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observer_notifyObserver from "../../Observer/__internal__/Observer.notifyObserver.js";

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

    const MergeAllObserver_activeCount = Symbol("MergeAllObserver_activeCount");
    const MergeAllObserver_maxBufferSize = Symbol(
      "MergeAllObserver_maxBufferSize",
    );
    const MergeAllObserver_maxConcurrency = Symbol(
      "MergeAllObserver_maxConcurrency",
    );
    const MergeAllObserver_onDispose = Symbol("MergeAllObserver_onDispose");

    const MergeAllObserver_observablesQueue = Symbol(
      "MergeAllObserver_observablesQueue",
    );

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
          observer[MergeAllObserver_observablesQueue][QueueLike_pull]();

        if (isSome(nextObs)) {
          observer[MergeAllObserver_activeCount]++;

          pipe(
            nextObs,
            Observable_forEach<ObservableLike, T>(
              Observer_notifyObserver(observer[DelegatingLike_delegate]),
            ),
            Observable_subscribe(observer[DispatcherLike_scheduler]),
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
            delegate[QueueableLike_maxBufferSize],
          );
          init(delegatingMixin<ObserverLike<T>>(), instance, delegate);

          instance[MergeAllObserver_observablesQueue] =
            IndexedQueue_createFifoQueue();
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
                instance[MergeAllObserver_observablesQueue][QueueLike_count] +
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
            this[MergeAllObserver_observablesQueue][QueueableLike_push](next);

            // Drop old events if the maxBufferSize has been exceeded
            if (
              this[MergeAllObserver_observablesQueue][QueueLike_count] +
                this[MergeAllObserver_activeCount] >
              this[MergeAllObserver_maxBufferSize]
            ) {
              this[MergeAllObserver_observablesQueue][QueueLike_pull]();
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
    const {
      maxBufferSize = MAX_SAFE_INTEGER,
      maxConcurrency = MAX_SAFE_INTEGER,
    } = options;

    const f: Function1<ObserverLike<T>, ObserverLike<ContainerOf<C, T>>> = pipe(
      createMergeAllObserver,
      partial(max(maxBufferSize, 0), max(maxConcurrency, 1)),
    );

    return lift(f);
  };
};

export default HigherOrderObservable_mergeAll;
