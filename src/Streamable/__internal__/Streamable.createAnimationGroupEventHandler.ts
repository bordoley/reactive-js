import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Enumerator_map from "../../Enumerator/__internal__/Enumerator.map.js";
import Enumerator_toReadonlyArray from "../../Enumerator/__internal__/Enumerator.toReadonlyArray.js";
import EventSource_createPublisher from "../../EventSource/__internal__/EventSource.createPublisher.js";
import type { Animation } from "../../Observable.js";
import Observable_animate from "../../Observable/__internal__/Observable.animate.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_ignoreElements from "../../Observable/__internal__/Observable.ignoreElements.js";
import Observable_mergeMany from "../../Observable/__internal__/Observable.mergeMany.js";
import Observable_subscribeOn from "../../Observable/__internal__/Observable.subscribeOn.js";
import ReadonlyObjectMap_keys from "../../ReadonlyObjectMap/__internal__/ReadonlyObjectMap.keys.js";
import ReadonlyObjectMap_map from "../../ReadonlyObjectMap/__internal__/ReadonlyObjectMap.map.js";
import ReadonlyObjectMap_mapWithKey from "../../ReadonlyObjectMap/__internal__/ReadonlyObjectMap.mapWithKey.js";
import ReadonlyObjectMap_reduce from "../../ReadonlyObjectMap/__internal__/ReadonlyObjectMap.reduce.js";
import ReadonlyObjectMap_values from "../../ReadonlyObjectMap/__internal__/ReadonlyObjectMap.values.js";
import Stream_delegatingMixin from "../../Stream/__internal__/Stream.delegatingMixin.js";
import type * as Streamable from "../../Streamable.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../__internal__/types.js";
import {
  Function1,
  Optional,
  incrementBy,
  isFunction,
  isSome,
  pipe,
  returns,
  unsafeCast,
} from "../../functions.js";
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
  QueueableLike,
  QueueableLike_backpressureStrategy,
  ReadonlyObjectMapLike,
  RunnableLike,
  SchedulerLike,
  StreamLike,
  StreamOf,
  StreamableLike,
  StreamableLike_stream,
} from "../../types.js";
import Streamable_createEventHandler from "./Streamable.createEventHandler.js";

export type AnimationGroupEventHandlerLike<
  TEvent,
  TKey extends string | number | symbol,
  T,
> = StreamableLike<
  TEvent,
  boolean,
  StreamLike<TEvent, boolean> & DictionaryLike<TKey, EventSourceLike<T>>
>;

export const Streamable_createAnimationGroupEventHandlerStream: <
  TEvent,
  TKey extends string | number | symbol,
  T,
>(
  animationGroup: ReadonlyObjectMapLike<
    TKey,
    | Function1<TEvent, Animation<T> | readonly Animation<T>[]>
    | Animation<T>
    | readonly Animation<T>[]
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
          | Function1<TEvent, Animation<T> | readonly Animation<T>[]>
          | (Animation<T> | readonly Animation<T>[])
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
              RunnableLike<T>
            > = pipe(
              animationGroup,
              ReadonlyObjectMap_mapWithKey<
                | Function1<TEvent, Animation<T> | readonly Animation<T>[]>
                | Animation<T>
                | readonly Animation<T>[],
                RunnableLike<T>,
                string
              >((factory, key: string) =>
                pipe(
                  Observable_animate<T>(
                    isFunction(factory) ? factory(event) : factory,
                  ),
                  Observable_forEach((value: T) => {
                    const publisher = publishers[key];
                    if (isSome(publisher)) {
                      publisher[EventListenerLike_notify](value);
                    }
                  }),
                  Observable_ignoreElements<T>(),
                ),
              ),
            );

            const deferredAnimatedObservables = pipe(
              observables,
              ReadonlyObjectMap_values(),
              Enumerator_map(Observable_subscribeOn(animationScheduler)),
              Enumerator_toReadonlyArray(),
            );

            return Observable_mergeMany(deferredAnimatedObservables);
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
            pipe(EventSource_createPublisher<T>(), Disposable_addTo(instance)),
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

const Streamable_createAnimationGroupEventHandler: Streamable.Signature["createAnimationGroupEventHandler"] =
  (<TEvent, TKey extends string | symbol | number, T>(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      | Function1<TEvent, Animation<T> | readonly Animation<T>[]>
      | Animation<T>
      | readonly Animation<T>[]
    >,
    createOptions: {
      readonly mode: "queueing" | "blocking" | "switching";
      readonly scheduler?: SchedulerLike;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): AnimationGroupEventHandlerLike<TEvent, TKey, T> => ({
    [StreamableLike_stream]: (scheduler, options) =>
      Streamable_createAnimationGroupEventHandlerStream(
        animationGroup,
        createOptions,
        scheduler,
        options,
      ),
  })) as Streamable.Signature["createAnimationGroupEventHandler"];

export default Streamable_createAnimationGroupEventHandler;
