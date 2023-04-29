import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Function1, Optional, none, pipe } from "../../../functions.js";
import { AnimationConfig } from "../../../rx.js";
import {
  AnimationEventHandlerLike,
  AnimationEventHandlerStreamLike,
  StreamableLike_stream,
} from "../../../streaming.js";
import {
  DisposableLike,
  EventEmitterLike_addEventListener,
  EventListenerLike,
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
import Stream_delegatingMixin from "../../Stream/__internal__/Stream.delegatingMixin.js";
import Streamable_createAnimationsEventHandler from "./Streamable.createAnimationsEventHandler.js";

const createAnimationEventHandlerStream: <TEventType = unknown, T = number>(
  animation: Function1<
    TEventType,
    AnimationConfig<T> | readonly AnimationConfig<T>[]
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
) => AnimationEventHandlerStreamLike<TEventType, T> & DisposableLike =
  /*@__PURE__*/ (<TEventType, T>() => {
    type TProperties = {
      publisher: EventPublisherLike<
        { type: TEventType; value: T } & {
          type: "wait" | "drain" | "complete";
        }
      >;
    };

    return createInstanceFactory(
      mix(
        include(
          Stream_delegatingMixin<TEventType, boolean>(),
          Delegating_mixin(),
        ),
        function AnimationEventHandlerStream(
          instance: TProperties,
          animation: Function1<
            TEventType,
            AnimationConfig<T> | readonly AnimationConfig<T>[]
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
        ): AnimationEventHandlerStreamLike<TEventType, T> & DisposableLike {
          const streamDelegate = Streamable_createAnimationsEventHandler(
            { v: animation },
            creationOptions as any,
          )[StreamableLike_stream](scheduler, streamOptions);

          init(
            Stream_delegatingMixin<TEventType, boolean>(),
            instance,
            streamDelegate,
          );

          init(Delegating_mixin(), instance, streamDelegate);

          const animationEventsPublisher = streamDelegate[
            KeyedCollectionLike_get
          ]("v") as EventSourceLike<{
            type: TEventType;
            value: T;
          }>;

          const publisher = pipe(
            EventPublisher_create(),
            Disposable_addTo(instance),
          );
          instance.publisher = publisher;

          animationEventsPublisher[EventEmitterLike_addEventListener](
            publisher,
          );

          streamDelegate[EventEmitterLike_addEventListener](publisher);

          return instance;
        },
        props<TProperties>({
          publisher: none,
        }),
        {
          [EventEmitterLike_addEventListener](
            this: TProperties,
            listener: EventListenerLike<
              { type: TEventType; value: T } & {
                type: "wait" | "drain" | "complete";
              }
            >,
          ) {
            this.publisher[EventEmitterLike_addEventListener](listener);
          },
        },
      ),
    );
  })();

interface CreateAnimationEventHandler {
  createAnimationEventHandler<TEventType = unknown, T = number>(
    animation: Function1<
      TEventType,
      AnimationConfig<T> | readonly AnimationConfig<T>[]
    >,
    options: { readonly mode: "switching"; readonly concurrency?: number },
  ): AnimationEventHandlerLike<TEventType, T>;
  createAnimationEventHandler<TEventType = unknown, T = number>(
    animation: Function1<
      TEventType,
      AnimationConfig<T> | readonly AnimationConfig<T>[]
    >,
    options: { readonly mode: "blocking"; readonly concurrency?: number },
  ): AnimationEventHandlerLike<TEventType, T>;
  createAnimationEventHandler<TEventType = unknown, T = number>(
    animation: Function1<
      TEventType,
      AnimationConfig<T> | readonly AnimationConfig<T>[]
    >,
    options: {
      readonly mode: "queueing";
      readonly concurrency?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): AnimationEventHandlerLike<TEventType, T>;
  createAnimationEventHandler<TEventType = unknown, T = number>(
    animation: Function1<
      TEventType,
      AnimationConfig<T> | readonly AnimationConfig<T>[]
    >,
  ): AnimationEventHandlerLike<TEventType, T>;
}

const Streamable_createAnimationEventHandler: CreateAnimationEventHandler["createAnimationEventHandler"] =
  (<TEventType = unknown, T = number>(
    animation: Function1<
      TEventType,
      AnimationConfig<T> | readonly AnimationConfig<T>[]
    >,
    createOptions: {
      readonly mode: "queueing" | "blocking" | "switching";
      readonly concurrency?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): AnimationEventHandlerLike<TEventType, T> => ({
    [StreamableLike_stream]: (scheduler, options) =>
      createAnimationEventHandlerStream(
        animation,
        createOptions,
        scheduler,
        options,
      ),
  })) as CreateAnimationEventHandler["createAnimationEventHandler"];

export default Streamable_createAnimationEventHandler;
