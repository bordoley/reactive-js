import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
  unsafeCast,
} from "../../../__internal__/mixins.js";
import {
  AssociativeLike_keys,
  CollectionLike_count,
  DictionaryLike,
  EnumerableLike,
  EnumerableLike_enumerate,
  KeyedLike_get,
  ReadonlyObjectMapLike,
} from "../../../collections.js";
import * as ReadonlyObjectMap from "../../../collections/ReadonlyObjectMap.js";
import {
  DeferredObservableLike,
  RunnableWithSideEffectsLike,
  SchedulerLike,
  StreamLike,
  StreamOf,
  StreamableLike,
  StreamableLike_stream,
} from "../../../concurrent.js";
import {
  EventSourceLike,
  PublisherLike,
  SinkLike_notify,
} from "../../../events.js";
import * as Publisher from "../../../events/Publisher.js";
import {
  Function1,
  Optional,
  incrementBy,
  isFunction,
  isSome,
  none,
  pipe,
  returns,
} from "../../../functions.js";
import {
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import type { Animation } from "../../Observable.js";
import Observable_animate from "../../Observable/__internal__/Observable.animate.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_fromEnumerable from "../../Observable/__internal__/Observable.fromEnumerable.js";
import Observable_ignoreElements from "../../Observable/__internal__/Observable.ignoreElements.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import Observable_mergeMany from "../../Observable/__internal__/Observable.mergeMany.js";
import Observable_subscribeOn from "../../Observable/__internal__/Observable.subscribeOn.js";
import Observable_toReadonlyArray from "../../Observable/__internal__/Observable.toReadonlyArray.js";
import type * as Streamable from "../../Streamable.js";
import DelegatingStreamMixin from "../../__mixins__/DelegatingStreamMixin.js";
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
  TKey extends string | symbol,
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
  TKey extends string | symbol,
  T,
>() => {
  const AnimationEventHandlerStream_delegate = Symbol(
    "AnimationEventHandlerStream_delegate",
  );

  type TProperties = {
    [AnimationEventHandlerStream_delegate]: ReadonlyObjectMapLike<
      TKey,
      EventSourceLike<T>
    >;
    [CollectionLike_count]: number;
  };

  return createInstanceFactory(
    mix(
      include(DelegatingStreamMixin<TEvent, boolean>()),
      function AnimationEventHandlerStream(
        instance: TProperties &
          Pick<
            DictionaryLike<TKey, EventSourceLike<T>>,
            | typeof AssociativeLike_keys
            | typeof KeyedLike_get
            | typeof EnumerableLike_enumerate
            | typeof Symbol.iterator
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
              RunnableWithSideEffectsLike<T>
            > = pipe(
              animationGroup,
              ReadonlyObjectMap.map<
                | Function1<TEvent, Animation<T> | readonly Animation<T>[]>
                | Animation<T>
                | readonly Animation<T>[],
                RunnableWithSideEffectsLike<T>,
                string
              >((factory, key: string) =>
                pipe(
                  Observable_animate<T>(
                    isFunction(factory) ? factory(event) : factory,
                  ),
                  Observable_forEach((value: T) => {
                    const publisher = publishers[key];
                    if (isSome(publisher)) {
                      publisher[SinkLike_notify](value);
                    }
                  }),
                  Observable_ignoreElements<T>(),
                ),
              ),
            );

            const deferredAnimatedObservables = pipe(
              observables,
              ReadonlyObjectMap.values(),
              Observable_fromEnumerable(),
              Observable_map<
                RunnableWithSideEffectsLike<T>,
                DeferredObservableLike<T>
              >(Observable_subscribeOn(animationScheduler)),
              Observable_toReadonlyArray(),
            );

            return Observable_mergeMany(deferredAnimatedObservables);
          },
          creationOptions as any,
        )[StreamableLike_stream](scheduler, streamOptions);

        init(
          DelegatingStreamMixin<TEvent, boolean>(),
          instance,
          streamDelegate,
        );

        const publishers = pipe(
          animationGroup,
          ReadonlyObjectMap.map<unknown, PublisherLike<T>, string>(_ =>
            pipe(Publisher.create<T>(), Disposable.addTo(instance)),
          ),
        );

        const animationScheduler: SchedulerLike =
          creationOptions?.scheduler ?? scheduler;

        instance[CollectionLike_count] = pipe(
          publishers,
          ReadonlyObjectMap.reduce<unknown, number, string>(
            incrementBy(1),
            returns(0),
          ),
        );

        instance[AnimationEventHandlerStream_delegate] = publishers;

        return instance;
      },
      props<TProperties>({
        [AnimationEventHandlerStream_delegate]: none,
        [CollectionLike_count]: 0,
      }),
      {
        get [AssociativeLike_keys](): EnumerableLike<TKey> {
          unsafeCast<TProperties>(this);
          return pipe(
            this[AnimationEventHandlerStream_delegate],
            ReadonlyObjectMap.keys(),
          );
        },

        [EnumerableLike_enumerate](this: TProperties) {
          return pipe(
            this[AnimationEventHandlerStream_delegate],
            ReadonlyObjectMap.values(),
          )[EnumerableLike_enumerate]();
        },

        [Symbol.iterator]() {
          return this[AnimationEventHandlerStream_delegate][Symbol.iterator]();
        },

        [KeyedLike_get](
          this: TProperties,
          index: TKey,
        ): Optional<EventSourceLike<T>> {
          return this[AnimationEventHandlerStream_delegate][index];
        },
      },
    ),
  );
})();

const Streamable_createAnimationGroupEventHandler: Streamable.Signature["createAnimationGroupEventHandler"] =
  (<TEvent, TKey extends string | symbol, T>(
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
