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
  Function1,
  Optional,
  none,
  pipe,
  unsafeCast,
} from "../../../functions.js";
import {
  AnimationConfig,
  PauseableObservableLike,
  PauseableObservableLike_isPaused,
} from "../../../rx.js";
import {
  AnimationEventHandlerLike,
  DisposableStreamOf,
  StreamableLike_stream,
} from "../../../streaming.js";
import {
  EventListenerLike,
  EventPublisherLike,
  EventSourceLike,
  EventSourceLike_addEventListener,
  KeyedCollectionLike_get,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import EventPublisher_create from "../../../util/EventPublisher/__internal__/EventPublisher.create.js";
import Stream_delegatingMixin from "../../Stream/__internal__/Stream.delegatingMixin.js";
import Streamable_createAnimationGroupEventHandler from "./Streamable.createAnimationGroupEventHandler.js";

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
) => DisposableStreamOf<AnimationEventHandlerLike<TEventType, T>> =
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
          instance: TProperties &
            Pick<
              PauseableObservableLike,
              | typeof PauseableObservableLike_isPaused
              | typeof PauseableLike_isPaused
              | typeof PauseableLike_pause
              | typeof PauseableLike_resume
            >,
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
        ): DisposableStreamOf<AnimationEventHandlerLike<TEventType, T>> {
          const streamDelegate = Streamable_createAnimationGroupEventHandler(
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

          animationEventsPublisher[EventSourceLike_addEventListener](publisher);

          streamDelegate[EventSourceLike_addEventListener](publisher);

          return instance;
        },
        props<TProperties>({
          publisher: none,
        }),
        {
          get [PauseableObservableLike_isPaused]() {
            unsafeCast<DelegatingLike<PauseableObservableLike>>(this);
            return this[DelegatingLike_delegate][
              PauseableObservableLike_isPaused
            ];
          },

          get [PauseableLike_isPaused](): boolean {
            unsafeCast<DelegatingLike<PauseableObservableLike>>(this);
            return this[DelegatingLike_delegate][PauseableLike_isPaused];
          },

          [PauseableLike_pause](this: DelegatingLike<PauseableObservableLike>) {
            this[DelegatingLike_delegate][PauseableLike_pause]();
          },

          [PauseableLike_resume](
            this: DelegatingLike<PauseableObservableLike>,
          ) {
            this[DelegatingLike_delegate][PauseableLike_resume]();
          },

          [EventSourceLike_addEventListener](
            this: TProperties,
            listener: EventListenerLike<
              { type: TEventType; value: T } & {
                type: "wait" | "drain" | "complete";
              }
            >,
          ) {
            this.publisher[EventSourceLike_addEventListener](listener);
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
