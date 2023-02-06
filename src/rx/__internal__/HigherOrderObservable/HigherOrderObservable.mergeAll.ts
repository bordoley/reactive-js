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
} from "../../../__internal__/mixins";
import { MAX_SAFE_INTEGER } from "../../../constants";
import { ConcatAll, ContainerOf, ContainerOperator } from "../../../containers";
import {
  Function1,
  SideEffect,
  getLength,
  isSome,
  none,
  partial,
  pipe,
} from "../../../functions";
import { ObservableLike, ObserverLike, SinkLike_notify } from "../../../rx";
import Disposable_addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable_isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable_mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Disposable_onComplete from "../../../util/__internal__/Disposable/Disposable.onComplete";
import Observable_forEach from "../Observable/Observable.forEach";
import Observable_subscribe from "../Observable/Observable.subscribe";
import Observer_getScheduler from "../Observer/Observer.getScheduler";
import Observer_mixin from "../Observer/Observer.mixin";
import Sink_notifySink from "../Sink/Sink.notifySink";

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
    const MergeAllObserver_queue = Symbol("MergeAllObserver_queue");

    type TProperties = {
      [MergeAllObserver_activeCount]: number;
      readonly [MergeAllObserver_maxBufferSize]: number;
      readonly [MergeAllObserver_maxConcurrency]: number;
      readonly [MergeAllObserver_onDispose]: SideEffect;
      readonly [MergeAllObserver_queue]: ObservableLike<T>[];
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
        const nextObs = observer[MergeAllObserver_queue].shift();

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
        include(Disposable_mixin, typedObserverMixin, delegatingMixin()),
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

          instance[MergeAllObserver_maxBufferSize] = maxBufferSize;
          instance[MergeAllObserver_maxConcurrency] = maxConcurrency;

          instance[MergeAllObserver_activeCount] = 0;
          instance[MergeAllObserver_onDispose] = () => {
            instance[MergeAllObserver_activeCount]--;
            subscribeNext(instance);
          };
          instance[MergeAllObserver_queue] = [];

          pipe(
            instance,
            Disposable_addTo(delegate),
            Disposable_onComplete(() => {
              if (Disposable_isDisposed(delegate)) {
                instance[MergeAllObserver_queue].length = 0;
              } else if (
                getLength(instance[MergeAllObserver_queue]) +
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
          [MergeAllObserver_queue]: none,
        }),
        {
          [SinkLike_notify](
            this: TProperties &
              ObserverLike<ContainerOf<C, T>> &
              DelegatingLike<ObserverLike<T>>,
            next: ContainerOf<C, T>,
          ) {
            const { [MergeAllObserver_queue]: queue } = this;

            queue.push(next);

            // Drop old events if the maxBufferSize has been exceeded
            if (
              getLength(queue) + this[MergeAllObserver_activeCount] >
              this[MergeAllObserver_maxBufferSize]
            ) {
              queue.shift();
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
