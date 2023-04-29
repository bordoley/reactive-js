import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../../__internal__/util.js";
import { EnumeratorLike } from "../../../containers.js";
import {
  Function1,
  Optional,
  incrementBy,
  isSome,
  pipe,
  pipeLazy,
  returns,
  unsafeCast,
} from "../../../functions.js";
import { ReadonlyObjectMapLike } from "../../../keyed-containers.js";
import ReadonlyObjectMap_keys from "../../../keyed-containers/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.keys.js";
import ReadonlyObjectMap_map from "../../../keyed-containers/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.map.js";
import ReadonlyObjectMap_mapWithKey from "../../../keyed-containers/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.mapWithKey.js";
import ReadonlyObjectMap_reduce from "../../../keyed-containers/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.reduce.js";
import ReadonlyObjectMap_values from "../../../keyed-containers/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.values.js";
import { AnimationConfig, ObservableLike } from "../../../rx.js";
import Observable_animate from "../../../rx/Observable/__internal__/Observable.animate.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import Observable_mergeAll from "../../../rx/Observable/__internal__/Observable.mergeAll.js";
import Observable_subscribeOn from "../../../rx/Observable/__internal__/Observable.subscribeOn.js";
import Runnable_fromEnumeratorFactory from "../../../rx/Runnable/__internal__/Runnable.fromEnumeratorFactory.js";
import {
  AnimationEventHandlerLike,
  AnimationEventHandlerStreamLike,
  StreamableLike_stream,
} from "../../../streaming.js";
import {
  AssociativeCollectionLike_keys,
  CollectionLike_count,
  DisposableLike,
  EventListenerLike_notify,
  EventPublisherLike,
  EventSourceLike,
  KeyedCollectionLike_get,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import EventPublisher_create from "../../../util/EventPublisher/__internal__/EventPublisher.create.js";
import Scheduler_createAnimationFrameScheduler from "../../../util/Scheduler/__internal__/Scheduler.createAnimationFrameScheduler.js";
import Stream_delegatingMixin from "../../Stream/__internal__/Stream.delegatingMixin.js";
import Streamable_createEventHandler from "./Streamable.createEventHandler.js";

const createAnimationEventHandlerStream: <
  TEvent = unknown,
  T = number,
  TKey extends string | number | symbol = string,
>(
  animations: ReadonlyObjectMapLike<
    Function1<TEvent, AnimationConfig<T> | readonly AnimationConfig<T>[]>,
    TKey
  >,
  creationOptions: Optional<{
    readonly mode?: "switching" | "blocking" | "queueing";
    readonly concurrency?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
  }>,
  scheduler: SchedulerLike,
  streamOptions: Optional<{
    readonly replay?: number;
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
  }>,
) => AnimationEventHandlerStreamLike<TEvent, T, TKey> & DisposableLike =
  /*@__PURE__*/ (<
    TEvent,
    T,
    TKey extends string | symbol | number = string,
  >() => {
    type TProperties = {
      [CollectionLike_count]: number;
    };

    return createInstanceFactory(
      mix(
        include(Stream_delegatingMixin<TEvent, boolean>(), Delegating_mixin()),
        function AnimationEventHandlerStream(
          instance: TProperties &
            Pick<
              AnimationEventHandlerStreamLike<TEvent, T, TKey>,
              | typeof AssociativeCollectionLike_keys
              | typeof KeyedCollectionLike_get
            >,
          animations: ReadonlyObjectMapLike<
            Function1<
              TEvent,
              AnimationConfig<T> | readonly AnimationConfig<T>[]
            >,
            TKey
          >,
          creationOptions: Optional<{
            readonly mode?: "switching" | "blocking" | "queueing";
            readonly concurrency?: number;
            readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
            readonly capacity?: number;
          }>,
          scheduler: SchedulerLike,
          streamOptions: Optional<{
            readonly replay?: number;
            readonly capacity?: number;
            readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
          }>,
        ): AnimationEventHandlerStreamLike<TEvent, T, TKey> & DisposableLike {
          const streamDelegate = Streamable_createEventHandler(
            (event: TEvent) => {
              const observables: ReadonlyObjectMapLike<
                ObservableLike<T>,
                string
              > = pipe(
                animations,
                ReadonlyObjectMap_mapWithKey<
                  Function1<
                    TEvent,
                    AnimationConfig<T> | readonly AnimationConfig<T>[]
                  >,
                  ObservableLike<T>,
                  string
                >((factory, key: string) =>
                  pipe(
                    Observable_animate<T>(factory(event)),
                    Observable_map<
                      ObservableLike,
                      T,
                      { event: TEvent; value: T }
                    >(value => ({ event, value })),
                    Observable_forEach<
                      ObservableLike,
                      { event: TEvent; value: T }
                    >(value => {
                      const publisher = publishers[key];
                      if (isSome(publisher)) {
                        publisher[EventListenerLike_notify](value);
                      }
                    }),
                    Observable_ignoreElements<ObservableLike, T>(),
                  ),
                ),
              );

              return pipe(
                Runnable_fromEnumeratorFactory(
                  pipeLazy(observables, ReadonlyObjectMap_values()),
                ),
                Observable_map<
                  ObservableLike,
                  ObservableLike<T>,
                  ObservableLike<T>
                >(
                  Observable_subscribeOn(
                    pipeLazy(
                      scheduler,
                      Scheduler_createAnimationFrameScheduler,
                    ),
                  ),
                ),
                Observable_mergeAll({
                  concurrency: creationOptions?.concurrency,
                }),
              );
            },
            creationOptions as any,
          )[StreamableLike_stream](scheduler, streamOptions);

          init(
            Stream_delegatingMixin<TEvent, boolean>(),
            instance,
            streamDelegate,
          );

          const publishers = pipe(
            animations,
            ReadonlyObjectMap_map<
              unknown,
              EventPublisherLike<{ event: TEvent; value: T }>,
              string
            >(_ =>
              pipe(
                EventPublisher_create<{ event: TEvent; value: T }>(),
                Disposable_addTo(instance),
              ),
            ),
          );

          instance[CollectionLike_count] = pipe(
            publishers,
            ReadonlyObjectMap_reduce<unknown, number, string>(
              incrementBy(1),
              returns(0),
            ),
          );

          init(Delegating_mixin(), instance, publishers);

          return instance;
        },
        props<TProperties>({
          [CollectionLike_count]: 0,
        }),
        {
          get [AssociativeCollectionLike_keys](): EnumeratorLike<TKey> {
            unsafeCast<DelegatingLike<ReadonlyObjectMapLike<unknown, TKey>>>(
              this,
            );
            return pipe(
              this[DelegatingLike_delegate],
              ReadonlyObjectMap_keys(),
            );
          },

          [KeyedCollectionLike_get](
            this: DelegatingLike<
              ReadonlyObjectMapLike<
                EventSourceLike<{ event: TEvent; value: T }>,
                TKey
              >
            >,
            index: TKey,
          ): Optional<EventSourceLike<{ event: TEvent; value: T }>> {
            return this[DelegatingLike_delegate][index];
          },
        },
      ),
    );
  })();

interface CreateAnimationEventHandler {
  createAnimationEventHandler<
    TEvent = unknown,
    T = number,
    TKey extends string | symbol | number = string,
  >(
    animations: ReadonlyObjectMapLike<
      Function1<TEvent, AnimationConfig<T> | readonly AnimationConfig<T>[]>,
      TKey
    >,
    options: { readonly mode: "switching"; readonly concurrency?: number },
  ): AnimationEventHandlerLike<TEvent, T, TKey>;
  createAnimationEventHandler<
    TEvent = unknown,
    T = number,
    TKey extends string | symbol | number = string,
  >(
    animations: ReadonlyObjectMapLike<
      Function1<TEvent, AnimationConfig<T> | readonly AnimationConfig<T>[]>,
      TKey
    >,
    options: { readonly mode: "blocking"; readonly concurrency?: number },
  ): AnimationEventHandlerLike<TEvent, T, TKey>;
  createAnimationEventHandler<
    TEvent = unknown,
    T = number,
    TKey extends string | symbol | number = string,
  >(
    animations: ReadonlyObjectMapLike<
      Function1<TEvent, AnimationConfig<T> | readonly AnimationConfig<T>[]>,
      TKey
    >,
    options: {
      readonly mode: "queueing";
      readonly concurrency?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): AnimationEventHandlerLike<TEvent, T, TKey>;
  createAnimationEventHandler<
    TEvent = unknown,
    T = number,
    TKey extends string | symbol | number = string,
  >(
    animations: ReadonlyObjectMapLike<
      Function1<TEvent, AnimationConfig<T> | readonly AnimationConfig<T>[]>,
      TKey
    >,
  ): AnimationEventHandlerLike<TEvent, T, TKey>;
}
const Streamable_createAnimationEventHandler: CreateAnimationEventHandler["createAnimationEventHandler"] =
  (<
    TEvent = unknown,
    T = number,
    TKey extends string | symbol | number = string,
  >(
    animations: ReadonlyObjectMapLike<
      Function1<TEvent, AnimationConfig<T> | readonly AnimationConfig<T>[]>,
      TKey
    >,
    createOptions: {
      readonly mode: "queueing" | "blocking" | "switching";
      readonly concurrency?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): AnimationEventHandlerLike<TEvent, T, TKey> => ({
    [StreamableLike_stream]: (scheduler, options) =>
      createAnimationEventHandlerStream(
        animations,
        createOptions,
        scheduler,
        options,
      ),
  })) as CreateAnimationEventHandler["createAnimationEventHandler"];

export default Streamable_createAnimationEventHandler;
