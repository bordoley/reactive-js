import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { __AnimationGroupEventHandler_eventPublisher } from "../../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../../__internal__/util.js";
import { EnumeratorLike } from "../../../containers.js";
import Enumerator_map from "../../../containers/Enumerator/__internal__/Enumerator.map.js";
import Enumerator_toReadonlyArray from "../../../containers/Enumerator/__internal__/Enumerator.toReadonlyArray.js";
import {
  Function1,
  Optional,
  incrementBy,
  isSome,
  none,
  pipe,
  returns,
  unsafeCast,
} from "../../../functions.js";
import { ReadonlyObjectMapLike } from "../../../keyed-containers.js";
import ReadonlyObjectMap_keys from "../../../keyed-containers/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.keys.js";
import ReadonlyObjectMap_map from "../../../keyed-containers/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.map.js";
import ReadonlyObjectMap_mapWithKey from "../../../keyed-containers/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.mapWithKey.js";
import ReadonlyObjectMap_reduce from "../../../keyed-containers/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.reduce.js";
import ReadonlyObjectMap_values from "../../../keyed-containers/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.values.js";
import {
  AnimationConfig,
  AnimationGroupEventHandlerLike,
  DisposableStreamOf,
  ObservableContainer,
  ObservableLike,
  StreamOf,
  StreamableLike_stream,
} from "../../../rx.js";
import Observable_animate from "../../../rx/Observable/__internal__/Observable.animate.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import Observable_mergeObservables from "../../../rx/Observable/__internal__/Observable.mergeObservables.js";
import Observable_subscribeOn from "../../../rx/Observable/__internal__/Observable.subscribeOn.js";
import {
  AssociativeCollectionLike_keys,
  CollectionLike_count,
  DictionaryLike,
  DispatcherEventMap,
  EventListenerLike,
  EventListenerLike_notify,
  EventPublisherLike,
  EventSourceLike,
  EventSourceLike_addEventListener,
  KeyedCollectionLike_get,
  PauseableEventMap,
  PauseableLike_resume,
  PauseableSchedulerLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import EventPublisher_create from "../../../util/EventPublisher/__internal__/EventPublisher.create.js";
import Pauseable_delegatingMixin from "../../../util/Pauseable/__internal__/Pauseable.delegatingMixin.js";
import Scheduler_toPauseableScheduler from "../../../util/Scheduler/__internal__/Scheduler.toPausableScheduler.js";
import Stream_delegatingMixin from "../../Stream/__internal__/Stream.delegatingMixin.js";
import Streamable_createEventHandler from "./Streamable.createEventHandler.js";

const createAnimationGroupEventHandlerStream: <
  TEventType = unknown,
  T = number,
  TKey extends string | number | symbol = string,
>(
  animationGroup: ReadonlyObjectMapLike<
    TKey,
    Function1<TEventType, AnimationConfig<T> | readonly AnimationConfig<T>[]>
  >,
  creationOptions: Optional<{
    readonly mode?: "switching" | "blocking" | "queueing";
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
  }>,
  scheduler: SchedulerLike,
  streamOptions: Optional<{
    readonly replay?: number;
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
  }>,
) => DisposableStreamOf<AnimationGroupEventHandlerLike<TEventType, T, TKey>> =
  /*@__PURE__*/ (<
    TEventType,
    T,
    TKey extends string | symbol | number = string,
  >() => {
    type TProperties = {
      [__AnimationGroupEventHandler_eventPublisher]: EventPublisherLike<
        | DispatcherEventMap[keyof DispatcherEventMap]
        | PauseableEventMap[keyof PauseableEventMap]
      >;
      [CollectionLike_count]: number;
    };

    return createInstanceFactory(
      mix(
        include(
          Stream_delegatingMixin<TEventType, boolean>(),
          Delegating_mixin(),
          Pauseable_delegatingMixin,
        ),
        function AnimationEventHandlerStream(
          instance: TProperties &
            Pick<
              DictionaryLike<
                TKey,
                EventSourceLike<{ type: TEventType; value: T }>
              >,
              | typeof AssociativeCollectionLike_keys
              | typeof KeyedCollectionLike_get
            > &
            Pick<
              StreamOf<AnimationGroupEventHandlerLike<TEventType, T, TKey>>,
              typeof EventSourceLike_addEventListener
            >,
          animationGroup: ReadonlyObjectMapLike<
            TKey,
            Function1<
              TEventType,
              AnimationConfig<T> | readonly AnimationConfig<T>[]
            >
          >,
          creationOptions: Optional<{
            readonly mode?: "switching" | "blocking" | "queueing";
            readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
            readonly capacity?: number;
          }>,
          scheduler: SchedulerLike,
          streamOptions: Optional<{
            readonly replay?: number;
            readonly capacity?: number;
            readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
          }>,
        ): DisposableStreamOf<
          AnimationGroupEventHandlerLike<TEventType, T, TKey>
        > {
          const streamDelegate = Streamable_createEventHandler(
            (type: TEventType) => {
              const observables: ReadonlyObjectMapLike<
                string,
                ObservableLike<T>
              > = pipe(
                animationGroup,
                ReadonlyObjectMap_mapWithKey<
                  Function1<
                    TEventType,
                    AnimationConfig<T> | readonly AnimationConfig<T>[]
                  >,
                  ObservableLike<T>,
                  string
                >((factory, key: string) =>
                  pipe(
                    Observable_animate<T>(factory(type)),
                    Observable_map<
                      ObservableContainer,
                      T,
                      { type: TEventType; value: T }
                    >(value => ({ type, value })),
                    Observable_forEach<
                      ObservableContainer,
                      { type: TEventType; value: T }
                    >(value => {
                      const publisher = publishers[key];
                      if (isSome(publisher)) {
                        publisher[EventListenerLike_notify](value);
                      }
                    }),
                    Observable_ignoreElements<ObservableContainer, T>(),
                  ),
                ),
              );

              return pipe(
                observables,
                ReadonlyObjectMap_values(),
                Enumerator_map(Observable_subscribeOn(animationScheduler)),
                Enumerator_toReadonlyArray(),
                Observable_mergeObservables,
              );
            },
            creationOptions as any,
          )[StreamableLike_stream](scheduler, streamOptions);

          init(
            Stream_delegatingMixin<TEventType, boolean>(),
            instance,
            streamDelegate,
          );

          const publishers = pipe(
            animationGroup,
            ReadonlyObjectMap_map<
              unknown,
              EventPublisherLike<{ type: TEventType; value: T }>,
              string
            >(_ =>
              pipe(
                EventPublisher_create<{ type: TEventType; value: T }>(),
                Disposable_addTo(instance),
              ),
            ),
          );

          const animationScheduler: PauseableSchedulerLike = pipe(
            scheduler,
            Scheduler_toPauseableScheduler,
            Disposable_addTo(instance),
          );
          init(Pauseable_delegatingMixin, instance, animationScheduler);

          instance[CollectionLike_count] = pipe(
            publishers,
            ReadonlyObjectMap_reduce<unknown, number, string>(
              incrementBy(1),
              returns(0),
            ),
          );

          init(Delegating_mixin(), instance, publishers);

          const eventPublisher = pipe(
            EventPublisher_create<
              | DispatcherEventMap[keyof DispatcherEventMap]
              | PauseableEventMap[keyof PauseableEventMap]
            >(),
            Disposable_addTo(instance),
          );
          instance[__AnimationGroupEventHandler_eventPublisher] =
            eventPublisher;
          animationScheduler[EventSourceLike_addEventListener](eventPublisher);
          streamDelegate[EventSourceLike_addEventListener](eventPublisher);

          animationScheduler[PauseableLike_resume]();

          return instance;
        },
        props<TProperties>({
          [__AnimationGroupEventHandler_eventPublisher]: none,
          [CollectionLike_count]: 0,
        }),
        {
          get [AssociativeCollectionLike_keys](): EnumeratorLike<TKey> {
            unsafeCast<DelegatingLike<ReadonlyObjectMapLike<TKey, unknown>>>(
              this,
            );
            return pipe(
              this[DelegatingLike_delegate],
              ReadonlyObjectMap_keys(),
            );
          },

          [EventSourceLike_addEventListener](
            this: TProperties,
            listener: EventListenerLike<
              | DispatcherEventMap[keyof DispatcherEventMap]
              | PauseableEventMap[keyof PauseableEventMap]
            >,
          ): void {
            this[__AnimationGroupEventHandler_eventPublisher][
              EventSourceLike_addEventListener
            ](listener);
          },

          [KeyedCollectionLike_get](
            this: DelegatingLike<
              ReadonlyObjectMapLike<
                TKey,
                EventSourceLike<{ type: TEventType; value: T }>
              >
            >,
            index: TKey,
          ): Optional<EventSourceLike<{ type: TEventType; value: T }>> {
            return this[DelegatingLike_delegate][index];
          },
        },
      ),
    );
  })();

interface CreateAnimationGroupEventHandler {
  createAnimationGroupEventHandler<
    TEventType = unknown,
    T = number,
    TKey extends string | symbol | number = string,
  >(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      Function1<TEventType, AnimationConfig<T> | readonly AnimationConfig<T>[]>
    >,
    options: { readonly mode: "switching" },
  ): AnimationGroupEventHandlerLike<TEventType, T, TKey>;
  createAnimationGroupEventHandler<
    TEventType = unknown,
    T = number,
    TKey extends string | symbol | number = string,
  >(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      Function1<TEventType, AnimationConfig<T> | readonly AnimationConfig<T>[]>
    >,
    options: { readonly mode: "blocking" },
  ): AnimationGroupEventHandlerLike<TEventType, T, TKey>;
  createAnimationGroupEventHandler<
    TEventType = unknown,
    T = number,
    TKey extends string | symbol | number = string,
  >(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      Function1<TEventType, AnimationConfig<T> | readonly AnimationConfig<T>[]>
    >,
    options: {
      readonly mode: "queueing";
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): AnimationGroupEventHandlerLike<TEventType, T, TKey>;
  createAnimationGroupEventHandler<
    TEventType = unknown,
    T = number,
    TKey extends string | symbol | number = string,
  >(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      Function1<TEventType, AnimationConfig<T> | readonly AnimationConfig<T>[]>
    >,
  ): AnimationGroupEventHandlerLike<TEventType, T, TKey>;
}
const Streamable_createAnimationGroupEventHandler: CreateAnimationGroupEventHandler["createAnimationGroupEventHandler"] =
  (<
    TEventType = unknown,
    T = number,
    TKey extends string | symbol | number = string,
  >(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      Function1<TEventType, AnimationConfig<T> | readonly AnimationConfig<T>[]>
    >,
    createOptions: {
      readonly mode: "queueing" | "blocking" | "switching";
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): AnimationGroupEventHandlerLike<TEventType, T, TKey> => ({
    [StreamableLike_stream]: (scheduler, options) =>
      createAnimationGroupEventHandlerStream(
        animationGroup,
        createOptions,
        scheduler,
        options,
      ),
  })) as CreateAnimationGroupEventHandler["createAnimationGroupEventHandler"];

export default Streamable_createAnimationGroupEventHandler;
