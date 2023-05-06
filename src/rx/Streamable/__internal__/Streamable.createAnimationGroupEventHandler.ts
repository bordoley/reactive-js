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
import {
  AssociativeCollectionLike_keys,
  CollectionLike_count,
  DictionaryLike,
  EnumeratorLike,
  KeyedCollectionLike_get,
  ReadonlyObjectMapLike,
} from "../../../containers.js";
import Enumerator_map from "../../../containers/Enumerator/__internal__/Enumerator.map.js";
import Enumerator_toReadonlyArray from "../../../containers/Enumerator/__internal__/Enumerator.toReadonlyArray.js";
import ReadonlyObjectMap_keys from "../../../containers/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.keys.js";
import ReadonlyObjectMap_map from "../../../containers/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.map.js";
import ReadonlyObjectMap_mapWithKey from "../../../containers/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.mapWithKey.js";
import ReadonlyObjectMap_reduce from "../../../containers/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.reduce.js";
import ReadonlyObjectMap_values from "../../../containers/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.values.js";
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
import {
  AnimationGroupEventHandlerLike,
  DisposableStreamOf,
  ObservableContainer,
  ObservableLike,
  Reactive,
  StreamableLike_stream,
} from "../../../rx.js";
import Observable_animate from "../../../rx/Observable/__internal__/Observable.animate.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_mergeObservables from "../../../rx/Observable/__internal__/Observable.mergeObservables.js";
import Observable_subscribeOn from "../../../rx/Observable/__internal__/Observable.subscribeOn.js";
import {
  EventListenerLike_notify,
  EventPublisherLike,
  EventSourceLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import EventPublisher_create from "../../../util/EventPublisher/__internal__/EventPublisher.create.js";
import Stream_delegatingMixin from "../../Stream/__internal__/Stream.delegatingMixin.js";
import Streamable_createEventHandler from "./Streamable.createEventHandler.js";

const createAnimationGroupEventHandlerStream: <
  TEventType,
  TKey extends string | number | symbol,
  T,
>(
  animationGroup: ReadonlyObjectMapLike<
    TKey,
    | Function1<
        TEventType,
        Reactive.AnimationConfig<T> | readonly Reactive.AnimationConfig<T>[]
      >
    | Reactive.AnimationConfig<T>
    | readonly Reactive.AnimationConfig<T>[]
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
) => DisposableStreamOf<AnimationGroupEventHandlerLike<TEventType, TKey, T>> =
  /*@__PURE__*/ (<TEventType, TKey extends string | symbol | number, T>() => {
    type TProperties = {
      [CollectionLike_count]: number;
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
              DictionaryLike<TKey, EventSourceLike<T>>,
              | typeof AssociativeCollectionLike_keys
              | typeof KeyedCollectionLike_get
            >,
          animationGroup: ReadonlyObjectMapLike<
            TKey,
            | Function1<
                TEventType,
                | Reactive.AnimationConfig<T>
                | readonly Reactive.AnimationConfig<T>[]
              >
            | (
                | Reactive.AnimationConfig<T>
                | readonly Reactive.AnimationConfig<T>[]
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
        ): DisposableStreamOf<
          AnimationGroupEventHandlerLike<TEventType, TKey, T>
        > {
          const streamDelegate = Streamable_createEventHandler(
            (type: TEventType) => {
              const observables: ReadonlyObjectMapLike<
                string,
                ObservableLike<T>
              > = pipe(
                animationGroup,
                ReadonlyObjectMap_mapWithKey<
                  | Function1<
                      TEventType,
                      | Reactive.AnimationConfig<T>
                      | readonly Reactive.AnimationConfig<T>[]
                    >
                  | Reactive.AnimationConfig<T>
                  | readonly Reactive.AnimationConfig<T>[],
                  ObservableLike<T>,
                  string
                >((factory, key: string) =>
                  pipe(
                    Observable_animate<T>(
                      isFunction(factory) ? factory(type) : factory,
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
            Stream_delegatingMixin<TEventType, boolean>(),
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
            return pipe(
              this[DelegatingLike_delegate],
              ReadonlyObjectMap_keys(),
            );
          },

          [KeyedCollectionLike_get](
            this: DelegatingLike<
              ReadonlyObjectMapLike<TKey, EventSourceLike<T>>
            >,
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
    TEventType,
    TKey extends string | symbol | number,
    T,
  >(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      Function1<
        TEventType,
        Reactive.AnimationConfig<T> | readonly Reactive.AnimationConfig<T>[]
      >
    >,
    options: { readonly mode: "switching"; readonly scheduler?: SchedulerLike },
  ): AnimationGroupEventHandlerLike<TEventType, TKey, T>;
  createAnimationGroupEventHandler<
    TEventType,
    TKey extends string | symbol | number,
    T,
  >(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      Function1<
        TEventType,
        Reactive.AnimationConfig<T> | readonly Reactive.AnimationConfig<T>[]
      >
    >,
    options: { readonly mode: "blocking"; readonly scheduler?: SchedulerLike },
  ): AnimationGroupEventHandlerLike<TEventType, TKey, T>;
  createAnimationGroupEventHandler<
    TEventType,
    TKey extends string | symbol | number,
    T,
  >(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      Function1<
        TEventType,
        Reactive.AnimationConfig<T> | readonly Reactive.AnimationConfig<T>[]
      >
    >,
    options: {
      readonly mode: "queueing";
      readonly scheduler?: SchedulerLike;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): AnimationGroupEventHandlerLike<TEventType, TKey, T>;

  createAnimationGroupEventHandler<TKey extends string | symbol | number, T>(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      Reactive.AnimationConfig<T> | readonly Reactive.AnimationConfig<T>[]
    >,
    options: { readonly mode: "switching"; readonly scheduler?: SchedulerLike },
  ): AnimationGroupEventHandlerLike<void, TKey, T>;
  createAnimationGroupEventHandler<TKey extends string | symbol | number, T>(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      Reactive.AnimationConfig<T> | readonly Reactive.AnimationConfig<T>[]
    >,
    options: { readonly mode: "blocking"; readonly scheduler?: SchedulerLike },
  ): AnimationGroupEventHandlerLike<void, TKey, T>;
  createAnimationGroupEventHandler<TKey extends string | symbol | number, T>(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      Reactive.AnimationConfig<T> | readonly Reactive.AnimationConfig<T>[]
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
  (<TEventType, TKey extends string | symbol | number, T>(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      | Function1<
          TEventType,
          Reactive.AnimationConfig<T> | readonly Reactive.AnimationConfig<T>[]
        >
      | Reactive.AnimationConfig<T>
      | readonly Reactive.AnimationConfig<T>[]
    >,
    createOptions: {
      readonly mode: "queueing" | "blocking" | "switching";
      readonly scheduler?: SchedulerLike;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): AnimationGroupEventHandlerLike<TEventType, TKey, T> => ({
    [StreamableLike_stream]: (scheduler, options) =>
      createAnimationGroupEventHandlerStream(
        animationGroup,
        createOptions,
        scheduler,
        options,
      ),
  })) as CreateAnimationGroupEventHandler["createAnimationGroupEventHandler"];

export default Streamable_createAnimationGroupEventHandler;
