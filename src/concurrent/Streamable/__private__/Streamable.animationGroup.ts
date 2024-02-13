import {
  include,
  init,
  mixInstanceFactory,
  props,
  unsafeCast,
} from "../../../__internal__/mixins.js";
import * as Enumerable from "../../../collections/Enumerable.js";
import * as ReadonlyObjectMap from "../../../collections/ReadonlyObjectMap.js";
import {
  DictionaryLike,
  DictionaryLike_get,
  DictionaryLike_keys,
  EnumerableLike,
  ReadonlyObjectMapLike,
} from "../../../collections.js";
import {
  DeferredObservableLike,
  PureRunnableLike,
  SchedulerLike,
  StreamLike,
  StreamableLike,
  StreamableLike_stream,
} from "../../../concurrent.js";
import * as Publisher from "../../../events/Publisher.js";
import {
  EventListenerLike_notify,
  EventSourceLike,
  PublisherLike,
} from "../../../events.js";
import {
  Function1,
  Optional,
  isFunction,
  none,
  pipe,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { BackpressureStrategy } from "../../../utils.js";
import * as Observable from "../../Observable.js";
import type * as Streamable from "../../Streamable.js";
import DelegatingStreamMixin from "../../__mixins__/DelegatingStreamMixin.js";
import Streamable_createEventHandler from "./Streamable.eventHandler.js";

const Streamable_createAnimationGroupStream: <TEvent, TKey extends string, T>(
  animationGroup: ReadonlyObjectMapLike<
    TKey,
    Function1<TEvent, PureRunnableLike<T>> | PureRunnableLike<T>
  >,
  creationOptions: {
    readonly mode: "switching" | "blocking" | "queueing";
    readonly schedule?: SchedulerLike;
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
  },
  scheduler: SchedulerLike,
  streamOptions: Optional<{
    readonly replay?: number;
    readonly capacity?: number;
    readonly backpressureStrategy?: BackpressureStrategy;
  }>,
) => StreamLike<TEvent, boolean> & DictionaryLike<TKey, EventSourceLike<T>> =
  /*@__PURE__*/ (<TEvent, TKey extends string, T>() => {
    const AnimationGroupStream_eventSources = Symbol(
      "AnimationGroupStream_delegate",
    );

    type TProperties = {
      [AnimationGroupStream_eventSources]: ReadonlyObjectMapLike<
        TKey,
        EventSourceLike<T>
      >;
    };

    return mixInstanceFactory(
      include(DelegatingStreamMixin<TEvent, boolean>()),
      function AnimationGroupStream(
        instance: TProperties &
          Pick<
            DictionaryLike<TKey, EventSourceLike<T>>,
            typeof DictionaryLike_keys | typeof DictionaryLike_get
          >,
        animationGroup: ReadonlyObjectMapLike<
          TKey,
          Function1<TEvent, PureRunnableLike<T>> | PureRunnableLike<T>
        >,
        creationOptions: {
          readonly mode: "switching" | "blocking" | "queueing";
          readonly scheduler?: SchedulerLike;
          readonly backpressureStrategy?: BackpressureStrategy;
          readonly capacity?: number;
        },
        scheduler: SchedulerLike,
        streamOptions: Optional<{
          readonly replay?: number;
          readonly capacity?: number;
          readonly backpressureStrategy?: BackpressureStrategy;
        }>,
      ): StreamLike<TEvent, boolean> &
        DictionaryLike<TKey, EventSourceLike<T>> {
        const streamDelegate = Streamable_createEventHandler(
          (event: TEvent) =>
            Observable.mergeMany(
              pipe(
                animationGroup,
                ReadonlyObjectMap.map<
                  Function1<TEvent, PureRunnableLike<T>> | PureRunnableLike<T>,
                  DeferredObservableLike<T>,
                  string
                >((factory, key: string) =>
                  pipe(
                    isFunction(factory) ? factory(event) : factory,
                    Observable.forEach((value: T) => {
                      const publisher = publishers[key];
                      publisher?.[EventListenerLike_notify](value);
                    }),
                    Observable.ignoreElements<T>(),
                    Observable.subscribeOn(animationScheduler),
                  ),
                ),
                ReadonlyObjectMap.values(),
                Enumerable.toReadonlyArray<DeferredObservableLike<T>>(),
              ),
            ),
          creationOptions as any,
        )[StreamableLike_stream](scheduler, streamOptions);

        const publishers = pipe(
          animationGroup,
          ReadonlyObjectMap.map<unknown, PublisherLike<T>, string>(_ =>
            pipe(Publisher.create<T>(), Disposable.addTo(streamDelegate)),
          ),
        );

        const animationScheduler: SchedulerLike =
          creationOptions?.scheduler ?? scheduler;

        init(
          DelegatingStreamMixin<TEvent, boolean>(),
          instance,
          streamDelegate,
        );

        instance[AnimationGroupStream_eventSources] = publishers;

        return instance;
      },
      props<TProperties>({
        [AnimationGroupStream_eventSources]: none,
      }),
      {
        get [DictionaryLike_keys](): EnumerableLike<TKey> {
          unsafeCast<TProperties>(this);
          return pipe(
            this[AnimationGroupStream_eventSources],
            ReadonlyObjectMap.keys(),
          );
        },

        [DictionaryLike_get](
          this: TProperties,
          index: TKey,
        ): Optional<EventSourceLike<T>> {
          return this[AnimationGroupStream_eventSources][index];
        },
      },
    );
  })();

const Streamable_animationGroup: Streamable.Signature["animationGroup"] = (<
  T,
  TEvent = unknown,
  TKey extends string = string,
>(
  animationGroup: ReadonlyObjectMapLike<
    TKey,
    Function1<TEvent, PureRunnableLike<T>> | PureRunnableLike<T>
  >,
  createOptions: {
    readonly mode: "queueing" | "blocking" | "switching";
    readonly scheduler?: SchedulerLike;
    readonly backpressureStrategy?: BackpressureStrategy;
    readonly capacity?: number;
  },
): StreamableLike<
  TEvent,
  boolean,
  StreamLike<TEvent, boolean> & DictionaryLike<TKey, EventSourceLike<T>>
> => ({
  [StreamableLike_stream]: (scheduler, options) =>
    Streamable_createAnimationGroupStream(
      animationGroup,
      createOptions,
      scheduler,
      options,
    ),
})) as Streamable.Signature["animationGroup"];

export default Streamable_animationGroup;
