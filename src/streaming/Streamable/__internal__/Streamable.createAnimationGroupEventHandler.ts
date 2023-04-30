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
  none,
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
import {
  AnimationConfig,
  MulticastObservableLike_buffer,
  ObservableContainer,
  ObservableLike,
  PauseableObservableLike,
  PauseableObservableLike_isPaused,
  PublisherLike,
} from "../../../rx.js";
import Observable_animate from "../../../rx/Observable/__internal__/Observable.animate.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import Observable_mergeAll from "../../../rx/Observable/__internal__/Observable.mergeAll.js";
import Observable_subscribe from "../../../rx/Observable/__internal__/Observable.subscribe.js";
import Observable_subscribeOn from "../../../rx/Observable/__internal__/Observable.subscribeOn.js";
import Publisher_create from "../../../rx/Publisher/__internal__/Publisher.create.js";
import Runnable_fromEnumeratorFactory from "../../../rx/Runnable/__internal__/Runnable.fromEnumeratorFactory.js";
import {
  AnimationGroupEventHandlerLike,
  DisposableStreamOf,
  StreamableLike_stream,
} from "../../../streaming.js";
import {
  AssociativeCollectionLike_keys,
  CollectionLike_count,
  DictionaryLike,
  EventListenerLike_notify,
  EventPublisherLike,
  EventSourceLike,
  KeyedCollectionLike_get,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  PauseableSchedulerLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import EventPublisher_create from "../../../util/EventPublisher/__internal__/EventPublisher.create.js";
import Scheduler_createAnimationFrameScheduler from "../../../util/Scheduler/__internal__/Scheduler.createAnimationFrameScheduler.js";
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
) => DisposableStreamOf<AnimationGroupEventHandlerLike<TEventType, T, TKey>> =
  /*@__PURE__*/ (<
    TEventType,
    T,
    TKey extends string | symbol | number = string,
  >() => {
    type TProperties = {
      [CollectionLike_count]: number;
      [PauseableObservableLike_isPaused]: PublisherLike<boolean>;
    };

    return createInstanceFactory(
      mix(
        include(
          Stream_delegatingMixin<TEventType, boolean>(),
          Delegating_mixin(),
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
              PauseableObservableLike<boolean>,
              | typeof PauseableObservableLike_isPaused
              | typeof PauseableLike_isPaused
              | typeof PauseableLike_pause
              | typeof PauseableLike_resume
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
                Runnable_fromEnumeratorFactory(
                  pipeLazy(observables, ReadonlyObjectMap_values()),
                ),
                Observable_map<
                  ObservableContainer,
                  ObservableLike<T>,
                  ObservableLike<T>
                >(Observable_subscribeOn(animationScheduler)),
                Observable_mergeAll({
                  concurrency: creationOptions?.concurrency,
                }),
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
            Scheduler_createAnimationFrameScheduler,
            Disposable_addTo(instance),
            Scheduler_toPauseableScheduler,
            Disposable_addTo(instance),
          );

          instance[CollectionLike_count] = pipe(
            publishers,
            ReadonlyObjectMap_reduce<unknown, number, string>(
              incrementBy(1),
              returns(0),
            ),
          );

          init(Delegating_mixin(), instance, publishers);

          const isPausePublisher = Publisher_create<boolean>({
            replay: 1,
          });
          instance[PauseableObservableLike_isPaused] = isPausePublisher;
          isPausePublisher[EventListenerLike_notify](false);

          pipe(
            isPausePublisher,
            Observable_forEach<ObservableContainer, boolean>(isPaused => {
              if (isPaused) {
                animationScheduler[PauseableLike_pause]();
              } else {
                animationScheduler[PauseableLike_resume]();
              }
            }),
            Observable_subscribe(scheduler, {
              capacity: 1,
              backpressureStrategy: "drop-oldest",
            }),
            Disposable_addTo(instance),
          );

          return instance;
        },
        props<TProperties>({
          [CollectionLike_count]: 0,
          [PauseableObservableLike_isPaused]: none,
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

          get [PauseableLike_isPaused](): boolean {
            unsafeCast<TProperties>(this);
            return this[PauseableObservableLike_isPaused][
              MulticastObservableLike_buffer
            ][KeyedCollectionLike_get](0);
          },

          [PauseableLike_pause](this: TProperties) {
            this[PauseableObservableLike_isPaused][EventListenerLike_notify](
              true,
            );
          },

          [PauseableLike_resume](this: TProperties) {
            this[PauseableObservableLike_isPaused][EventListenerLike_notify](
              false,
            );
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
    options: { readonly mode: "switching"; readonly concurrency?: number },
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
    options: { readonly mode: "blocking"; readonly concurrency?: number },
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
      readonly concurrency?: number;
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
      readonly concurrency?: number;
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
