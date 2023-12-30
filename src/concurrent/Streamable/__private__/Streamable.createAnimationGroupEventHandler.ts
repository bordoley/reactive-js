import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
  unsafeCast,
} from "../../../__internal__/mixins.js";
import {
  DictionaryLike,
  DictionaryLike_get,
  DictionaryLike_keys,
  EnumerableLike,
  ReadonlyObjectMapLike,
} from "../../../collections.js";
import * as Enumerable from "../../../collections/Enumerable.js";
import * as ReadonlyObjectMap from "../../../collections/ReadonlyObjectMap.js";
import {
  RunnableWithSideEffectsLike,
  SchedulerLike,
  StreamLike,
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
  isFunction,
  isSome,
  none,
  pipe,
} from "../../../functions.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import type { Animation } from "../../Observable.js";
import * as Observable from "../../Observable.js";
import type * as Streamable from "../../Streamable.js";
import DelegatingStreamMixin from "../../__mixins__/DelegatingStreamMixin.js";
import Streamable_createEventHandler from "./Streamable.createEventHandler.js";

const Streamable_createAnimationGroupEventHandlerStream: <
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
) => StreamLike<TEvent, boolean> & DictionaryLike<TKey, EventSourceLike<T>> =
  /*@__PURE__*/ (<TEvent, TKey extends string | symbol, T>() => {
    const AnimationEventHandlerStream_delegate = Symbol(
      "AnimationEventHandlerStream_delegate",
    );

    type TProperties = {
      [AnimationEventHandlerStream_delegate]: ReadonlyObjectMapLike<
        TKey,
        EventSourceLike<T>
      >;
    };

    return createInstanceFactory(
      mix(
        include(DelegatingStreamMixin<TEvent, boolean>()),
        function AnimationEventHandlerStream(
          instance: TProperties &
            Pick<
              DictionaryLike<TKey, EventSourceLike<T>>,
              typeof DictionaryLike_keys | typeof DictionaryLike_get
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
        ): StreamLike<TEvent, boolean> &
          DictionaryLike<TKey, EventSourceLike<T>> {
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
                    Observable.animate<T>(
                      isFunction(factory) ? factory(event) : factory,
                    ),
                    Observable.forEach((value: T) => {
                      const publisher = publishers[key];
                      if (isSome(publisher)) {
                        publisher[SinkLike_notify](value);
                      }
                    }),
                    Observable.ignoreElements<T>(),
                  ),
                ),
              );

              const deferredAnimatedObservables = pipe(
                observables,
                ReadonlyObjectMap.values(),
                Enumerable.map(Observable.subscribeOn(animationScheduler)),
                Enumerable.toReadonlyArray(),
              );

              return Observable.mergeMany(deferredAnimatedObservables);
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

          instance[AnimationEventHandlerStream_delegate] = publishers;

          return instance;
        },
        props<TProperties>({
          [AnimationEventHandlerStream_delegate]: none,
        }),
        {
          get [DictionaryLike_keys](): EnumerableLike<TKey> {
            unsafeCast<TProperties>(this);
            return pipe(
              this[AnimationEventHandlerStream_delegate],
              ReadonlyObjectMap.keys(),
            );
          },

          [DictionaryLike_get](
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
  ): StreamableLike<
    TEvent,
    boolean,
    StreamLike<TEvent, boolean> & DictionaryLike<TKey, EventSourceLike<T>>
  > => ({
    [StreamableLike_stream]: (scheduler, options) =>
      Streamable_createAnimationGroupEventHandlerStream(
        animationGroup,
        createOptions,
        scheduler,
        options,
      ),
  })) as Streamable.Signature["createAnimationGroupEventHandler"];

export default Streamable_createAnimationGroupEventHandler;
