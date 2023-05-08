import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../../__internal__/core.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  AssociativeCollectionLike_keys,
  CollectionLike_count,
  DictionaryLike,
  DisposableLike,
  EnumeratorLike,
  EventListenerLike_notify,
  EventPublisherLike,
  EventSourceLike,
  KeyedCollectionLike_get,
  ObservableContainer,
  ObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  ReactiveContainer,
  ReadonlyObjectMapLike,
  SchedulerLike,
  StreamLike,
  StreamOf,
  StreamableLike,
  StreamableLike_stream,
} from "../../../core.js";
import Delegating_mixin from "../../../core/Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../../core/Disposable/__internal__/Disposable.addTo.js";
import Enumerator_map from "../../../core/Enumerator/__internal__/Enumerator.map.js";
import Enumerator_toReadonlyArray from "../../../core/Enumerator/__internal__/Enumerator.toReadonlyArray.js";
import EventPublisher_create from "../../../core/EventPublisher/__internal__/EventPublisher.create.js";
import Observable_animate from "../../../core/Observable/__internal__/Observable.animate.js";
import Observable_forEach from "../../../core/Observable/__internal__/Observable.forEach.js";
import Observable_ignoreElements from "../../../core/Observable/__internal__/Observable.ignoreElements.js";
import Observable_mergeObservables from "../../../core/Observable/__internal__/Observable.mergeObservables.js";
import Observable_subscribeOn from "../../../core/Observable/__internal__/Observable.subscribeOn.js";
import ReadonlyObjectMap_keys from "../../../core/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.keys.js";
import ReadonlyObjectMap_map from "../../../core/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.map.js";
import ReadonlyObjectMap_mapWithKey from "../../../core/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.mapWithKey.js";
import ReadonlyObjectMap_reduce from "../../../core/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.reduce.js";
import ReadonlyObjectMap_values from "../../../core/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.values.js";
import {
  Function1,
  Optional,
  incrementBy,
  isFunction,
  isSome,
  pipe,
  returns,
  unsafeCast,
} from "../../../functions.js";
import Stream_delegatingMixin from "../../Stream/__internal__/Stream.delegatingMixin.js";
import Streamable_createEventHandler from "./Streamable.createEventHandler.js";

type AnimationGroupEventHandlerLike<
  TEvent,
  TKey extends string | number | symbol,
  T,
> = StreamableLike<
  TEvent,
  boolean,
  StreamLike<TEvent, boolean> & DictionaryLike<TKey, EventSourceLike<T>>
>;

const createAnimationGroupEventHandlerStream: <
  TEvent,
  TKey extends string | number | symbol,
  T,
>(
  animationGroup: ReadonlyObjectMapLike<
    TKey,
    | Function1<
        TEvent,
        | ReactiveContainer.AnimationConfig<T>
        | readonly ReactiveContainer.AnimationConfig<T>[]
      >
    | ReactiveContainer.AnimationConfig<T>
    | readonly ReactiveContainer.AnimationConfig<T>[]
  >,
  creationOptions: {
    readonly mode: "switching" | "blocking" | "queueing";
    readonly schedule?: SchedulerLike;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
  },
  scheduler: SchedulerLike,
  streamOptions: Optional<{
    readonly replay?: number;
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
  }>,
) => StreamOf<AnimationGroupEventHandlerLike<TEvent, TKey, T>> &
  DisposableLike = /*@__PURE__*/ (<
  TEvent,
  TKey extends string | symbol | number,
  T,
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
            DictionaryLike<TKey, EventSourceLike<T>>,
            | typeof AssociativeCollectionLike_keys
            | typeof KeyedCollectionLike_get
          >,
        animationGroup: ReadonlyObjectMapLike<
          TKey,
          | Function1<
              TEvent,
              | ReactiveContainer.AnimationConfig<T>
              | readonly ReactiveContainer.AnimationConfig<T>[]
            >
          | (
              | ReactiveContainer.AnimationConfig<T>
              | readonly ReactiveContainer.AnimationConfig<T>[]
            )
        >,
        creationOptions: {
          readonly mode: "switching" | "blocking" | "queueing";
          readonly scheduler?: SchedulerLike;
          readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
          readonly capacity?: number;
        },
        scheduler: SchedulerLike,
        streamOptions: Optional<{
          readonly replay?: number;
          readonly capacity?: number;
          readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        }>,
      ): StreamOf<AnimationGroupEventHandlerLike<TEvent, TKey, T>> &
        DisposableLike {
        const streamDelegate = Streamable_createEventHandler(
          (event: TEvent) => {
            const observables: ReadonlyObjectMapLike<
              string,
              ObservableLike<T>
            > = pipe(
              animationGroup,
              ReadonlyObjectMap_mapWithKey<
                | Function1<
                    TEvent,
                    | ReactiveContainer.AnimationConfig<T>
                    | readonly ReactiveContainer.AnimationConfig<T>[]
                  >
                | ReactiveContainer.AnimationConfig<T>
                | readonly ReactiveContainer.AnimationConfig<T>[],
                ObservableLike<T>,
                string
              >((factory, key: string) =>
                pipe(
                  Observable_animate<T>(
                    isFunction(factory) ? factory(event) : factory,
                  ),
                  Observable_forEach<ObservableContainer, T>(value => {
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
          Stream_delegatingMixin<TEvent, boolean>(),
          instance,
          streamDelegate,
        );

        const publishers = pipe(
          animationGroup,
          ReadonlyObjectMap_map<unknown, EventPublisherLike<T>, string>(_ =>
            pipe(EventPublisher_create<T>(), Disposable_addTo(instance)),
          ),
        );

        const animationScheduler: SchedulerLike =
          creationOptions?.scheduler ?? scheduler;

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
          unsafeCast<DelegatingLike<ReadonlyObjectMapLike<TKey, unknown>>>(
            this,
          );
          return pipe(this[DelegatingLike_delegate], ReadonlyObjectMap_keys());
        },

        [KeyedCollectionLike_get](
          this: DelegatingLike<ReadonlyObjectMapLike<TKey, EventSourceLike<T>>>,
          index: TKey,
        ): Optional<EventSourceLike<T>> {
          return this[DelegatingLike_delegate][index];
        },
      },
    ),
  );
})();

interface CreateAnimationGroupEventHandler {
  createAnimationGroupEventHandler<
    TEvent,
    TKey extends string | symbol | number,
    T,
  >(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      Function1<
        TEvent,
        | ReactiveContainer.AnimationConfig<T>
        | readonly ReactiveContainer.AnimationConfig<T>[]
      >
    >,
    options: { readonly mode: "switching"; readonly scheduler?: SchedulerLike },
  ): AnimationGroupEventHandlerLike<TEvent, TKey, T>;
  createAnimationGroupEventHandler<
    TEvent,
    TKey extends string | symbol | number,
    T,
  >(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      Function1<
        TEvent,
        | ReactiveContainer.AnimationConfig<T>
        | readonly ReactiveContainer.AnimationConfig<T>[]
      >
    >,
    options: { readonly mode: "blocking"; readonly scheduler?: SchedulerLike },
  ): AnimationGroupEventHandlerLike<TEvent, TKey, T>;
  createAnimationGroupEventHandler<
    TEvent,
    TKey extends string | symbol | number,
    T,
  >(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      Function1<
        TEvent,
        | ReactiveContainer.AnimationConfig<T>
        | readonly ReactiveContainer.AnimationConfig<T>[]
      >
    >,
    options: {
      readonly mode: "queueing";
      readonly scheduler?: SchedulerLike;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): AnimationGroupEventHandlerLike<TEvent, TKey, T>;

  createAnimationGroupEventHandler<TKey extends string | symbol | number, T>(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      | ReactiveContainer.AnimationConfig<T>
      | readonly ReactiveContainer.AnimationConfig<T>[]
    >,
    options: { readonly mode: "switching"; readonly scheduler?: SchedulerLike },
  ): AnimationGroupEventHandlerLike<void, TKey, T>;
  createAnimationGroupEventHandler<TKey extends string | symbol | number, T>(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      | ReactiveContainer.AnimationConfig<T>
      | readonly ReactiveContainer.AnimationConfig<T>[]
    >,
    options: { readonly mode: "blocking"; readonly scheduler?: SchedulerLike },
  ): AnimationGroupEventHandlerLike<void, TKey, T>;
  createAnimationGroupEventHandler<TKey extends string | symbol | number, T>(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      | ReactiveContainer.AnimationConfig<T>
      | readonly ReactiveContainer.AnimationConfig<T>[]
    >,
    options: {
      readonly mode: "queueing";
      readonly scheduler?: SchedulerLike;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): AnimationGroupEventHandlerLike<void, TKey, T>;
}
const Streamable_createAnimationGroupEventHandler: CreateAnimationGroupEventHandler["createAnimationGroupEventHandler"] =
  (<TEvent, TKey extends string | symbol | number, T>(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      | Function1<
          TEvent,
          | ReactiveContainer.AnimationConfig<T>
          | readonly ReactiveContainer.AnimationConfig<T>[]
        >
      | ReactiveContainer.AnimationConfig<T>
      | readonly ReactiveContainer.AnimationConfig<T>[]
    >,
    createOptions: {
      readonly mode: "queueing" | "blocking" | "switching";
      readonly scheduler?: SchedulerLike;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): AnimationGroupEventHandlerLike<TEvent, TKey, T> => ({
    [StreamableLike_stream]: (scheduler, options) =>
      createAnimationGroupEventHandlerStream(
        animationGroup,
        createOptions,
        scheduler,
        options,
      ),
  })) as CreateAnimationGroupEventHandler["createAnimationGroupEventHandler"];

export default Streamable_createAnimationGroupEventHandler;
