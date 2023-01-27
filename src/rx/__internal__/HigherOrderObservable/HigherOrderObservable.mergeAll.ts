import {
  Mutable,
  createInstanceFactory,
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

    type TProperties = {
      activeCount: number;
      readonly delegate: ObserverLike<T>;
      readonly maxBufferSize: number;
      readonly maxConcurrency: number;
      readonly onDispose: SideEffect;
      readonly queue: ObservableLike<T>[];
    };

    const subscribeNext = <T>(
      observer: TProperties & ObserverLike<ContainerOf<C, T>>,
    ) => {
      if (observer.activeCount < observer.maxConcurrency) {
        const nextObs = observer.queue.shift();

        if (isSome(nextObs)) {
          observer.activeCount++;

          pipe(
            nextObs,
            Observable_forEach(Sink_notifySink(observer.delegate)),
            Observable_subscribe(Observer_getScheduler(observer)),
            Disposable_addTo(observer.delegate),
            Disposable_onComplete(observer.onDispose),
          );
        } else if (Disposable_isDisposed(observer)) {
          pipe(observer.delegate, Disposable_dispose());
        }
      }
    };

    return createInstanceFactory(
      mix(
        include(Disposable_mixin, typedObserverMixin),
        function Observer(
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

          instance.delegate = delegate;
          instance.maxBufferSize = maxBufferSize;
          instance.maxConcurrency = maxConcurrency;

          instance.activeCount = 0;
          instance.onDispose = () => {
            instance.activeCount--;
            subscribeNext(instance);
          };
          instance.queue = [];

          pipe(
            instance,
            Disposable_addTo(delegate),
            Disposable_onComplete(() => {
              if (Disposable_isDisposed(delegate)) {
                instance.queue.length = 0;
              } else if (
                getLength(instance.queue) + instance.activeCount ===
                0
              ) {
                pipe(instance.delegate, Disposable_dispose());
              }
            }),
          );

          return instance;
        },
        props<TProperties>({
          activeCount: 0,
          delegate: none,
          maxBufferSize: 0,
          maxConcurrency: 0,
          onDispose: none,
          queue: none,
        }),
        {
          [SinkLike_notify](
            this: TProperties & ObserverLike<ContainerOf<C, T>>,
            next: ContainerOf<C, T>,
          ) {
            const { queue } = this;

            queue.push(next);

            // Drop old events if the maxBufferSize has been exceeded
            if (getLength(queue) + this.activeCount > this.maxBufferSize) {
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
