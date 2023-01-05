import { MAX_SAFE_INTEGER } from "../../../__internal__/constants";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
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
import DisposableLike__addTo from "../../../util/__internal__/DisposableLike/DisposableLike.addTo";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__isDisposed from "../../../util/__internal__/DisposableLike/DisposableLike.isDisposed";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import DisposableLike__onComplete from "../../../util/__internal__/DisposableLike/DisposableLike.onComplete";
import ObservableLike__forEach from "../ObservableLike/ObservableLike.forEach";
import ObservableLike__subscribe from "../ObservableLike/ObservableLike.subscribe";
import ObserverLike__getScheduler from "../ObserverLike/ObserverLike.getScheduler";
import ObserverLike__mixin from "../ObserverLike/ObserverLike.mixin";
import SinkLike__notifySink from "../SinkLike/SinkLike.notifySink";

const HigherOrderObservableLike__mergeAll = <C extends ObservableLike>(
  lift: <T>(
    f: Function1<ObserverLike<T>, ObserverLike<ContainerOf<C, T>>>,
  ) => ContainerOperator<C, ContainerOf<C, T>, T>,
): ConcatAll<C>["concatAll"] => {
  const createMergeAllObserver: <T>(
    delegate: ObserverLike<T>,
    maxBufferSize: number,
    maxConcurrency: number,
  ) => ObserverLike<ContainerOf<C, T>> = (<T>() => {
    const typedObserverMixin = ObserverLike__mixin<ContainerOf<C, T>>();

    type TProperties = {
      activeCount: number;
      readonly delegate: ObserverLike<T>;
      readonly maxBufferSize: number;
      readonly maxConcurrency: number;
      readonly onDispose: SideEffect;
      readonly queue: ContainerOf<C, T>[];
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
            ObservableLike__forEach(SinkLike__notifySink(observer.delegate)),
            ObservableLike__subscribe(ObserverLike__getScheduler(observer)),
            DisposableLike__addTo(observer.delegate),
            DisposableLike__onComplete(observer.onDispose),
          );
        } else if (DisposableLike__isDisposed(observer)) {
          pipe(observer.delegate, DisposableLike__dispose());
        }
      }
    };

    return createInstanceFactory(
      mix(
        include(DisposableLike__mixin, typedObserverMixin),
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
          init(DisposableLike__mixin, instance);
          init(
            typedObserverMixin,
            instance,
            ObserverLike__getScheduler(delegate),
          );

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
            DisposableLike__addTo(delegate),
            DisposableLike__onComplete(() => {
              if (DisposableLike__isDisposed(delegate)) {
                instance.queue.length = 0;
              } else if (
                getLength(instance.queue) + instance.activeCount ===
                0
              ) {
                pipe(instance.delegate, DisposableLike__dispose());
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

  return (
    options: {
      readonly maxBufferSize?: number;
      readonly maxConcurrency?: number;
    } = {},
  ) => {
    const {
      maxBufferSize = MAX_SAFE_INTEGER,
      maxConcurrency = MAX_SAFE_INTEGER,
    } = options;

    return lift(
      pipe(createMergeAllObserver, partial(maxBufferSize, maxConcurrency)),
    );
  };
};

export default HigherOrderObservableLike__mergeAll;
