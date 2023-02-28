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
import { MAX_SAFE_INTEGER } from "../../../constants.js";
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
import { ObservableLike, ObserverLike, SinkLike_notify } from "../../../rx.js";
import { QueueLike_count, QueueLike_push } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import IndexedQueue_fifoQueueMixin from "../../../util/PullableQueue/__internal__/IndexedQueue.fifoQueueMixin.js";
import {
  PullableQueueLike,
  PullableQueueLike_pull,
} from "../../../util/__internal__/util.internal.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_getScheduler from "../../Observer/__internal__/Observer.getScheduler.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Sink_notifySink from "../../Sink/__internal__/Sink.notifySink.js";

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

    type TProperties = {
      [MergeAllObserver_activeCount]: number;
      readonly [MergeAllObserver_maxBufferSize]: number;
      readonly [MergeAllObserver_maxConcurrency]: number;
      readonly [MergeAllObserver_onDispose]: SideEffect;
    };

    const subscribeNext = (
      observer: TProperties &
        ObserverLike<ContainerOf<C, T>> &
        DelegatingLike<ObserverLike<T>> &
        PullableQueueLike<ObservableLike<T>>,
    ) => {
      if (
        observer[MergeAllObserver_activeCount] <
        observer[MergeAllObserver_maxConcurrency]
      ) {
        const nextObs = observer[PullableQueueLike_pull]();

        if (isSome(nextObs)) {
          observer[MergeAllObserver_activeCount]++;

          pipe(
            nextObs,
            Observable_forEach(
              Sink_notifySink(observer[DelegatingLike_delegate]),
            ),
            Observable_subscribe(Observer_getScheduler(observer)),
            Disposable_addTo(observer[DelegatingLike_delegate]),
            Disposable_onComplete(observer[MergeAllObserver_onDispose]),
          );
        } else if (Disposable_isDisposed(observer)) {
          pipe(observer[DelegatingLike_delegate], Disposable_dispose());
        }
      }
    };

    return createInstanceFactory(
      mix(
        include(
          Disposable_mixin,
          typedObserverMixin,
          delegatingMixin(),
          IndexedQueue_fifoQueueMixin<ObservableLike<T>>(),
        ),
        function MergeAllObserver(
          instance: Pick<
            ObserverLike<ContainerOf<C, T>>,
            typeof SinkLike_notify
          > &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          maxBufferSize: number,
          maxConcurrency: number,
        ): ObserverLike<ContainerOf<C, T>> {
          init(Disposable_mixin, instance);
          init(typedObserverMixin, instance, Observer_getScheduler(delegate));
          init(delegatingMixin<ObserverLike<T>>(), instance, delegate);
          init(IndexedQueue_fifoQueueMixin<ObservableLike<T>>(), instance);

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
              if (Disposable_isDisposed(delegate)) {
                // FIXME: Clear the queue
              } else if (
                instance[QueueLike_count] +
                  instance[MergeAllObserver_activeCount] ===
                0
              ) {
                pipe(delegate, Disposable_dispose());
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
        }),
        {
          [SinkLike_notify](
            this: TProperties &
              ObserverLike<ContainerOf<C, T>> &
              DelegatingLike<ObserverLike<T>> &
              PullableQueueLike<ContainerOf<C, T>>,
            next: ContainerOf<C, T>,
          ) {
            Observer_assertState(this);
            this[QueueLike_push](next);

            // Drop old events if the maxBufferSize has been exceeded
            if (
              this[QueueLike_count] + this[MergeAllObserver_activeCount] >
              this[MergeAllObserver_maxBufferSize]
            ) {
              this[PullableQueueLike_pull]();
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
      partial(maxBufferSize, maxConcurrency),
    );

    return lift(f);
  };
};

export default HigherOrderObservable_mergeAll;
