import {
  Set_add,
  Set_delete,
  Set_has,
  Set_size,
} from "../../__internal__/constants.js";
import {
  Mixin1,
  include,
  init,
  mix,
  props,
  proto,
} from "../../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isSynchronous,
  PublisherLike,
  SourceLike_subscribe,
} from "../../computations.js";
import {
  Method,
  Optional,
  call,
  error,
  isNone,
  isSome,
  newInstance,
  none,
  pipe,
  returns,
} from "../../functions.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import QueueMixin from "../../utils/__mixins__/QueueMixin.js";
import {
  DisposableContainerLike_add,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EnumeratorLike_current,
  EnumeratorLike_moveNext,
  EventListenerLike,
  EventListenerLike_notify,
  QueueLike,
  QueueLike_enqueue,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import Iterable_first from "../Iterable/__private__/Iterable.first.js";

type TPrototype<T> = Omit<
  PublisherLike<T>,
  keyof DisposableLike | typeof SinkLike_isCompleted
>;

type TOptions = Optional<{ readonly autoDispose?: boolean }>;

const AsyncPublisherMixin: <T>() => Mixin1<
  PublisherLike<T>,
  TOptions,
  TPrototype<T>
> = /*@__PURE__*/ (<T>() => {
  const AsyncPublisher_EventListeners = Symbol("AsyncPublisher_EventListeners");
  const AsyncPublisher_onSinkDisposed = Symbol("AsyncPublisher_onSinkDisposed");
  const AsyncPublisher_isDispatchingEvents = Symbol(
    "AsyncPublisher_isDispatchingEvents",
  );

  type TProperties = {
    [AsyncPublisher_isDispatchingEvents]: boolean;
    [SinkLike_isCompleted]: boolean;
    [AsyncPublisher_EventListeners]: Optional<
      Set<EventListenerLike<T>> | EventListenerLike<T>
    >;
    [AsyncPublisher_onSinkDisposed]: Method<EventListenerLike<T>>;
  };

  async function dispatch(this: TProperties & QueueLike<T>) {
    const isRunning = this[AsyncPublisher_isDispatchingEvents];
    if (isRunning) {
      return;
    }
    this[AsyncPublisher_isDispatchingEvents] = true;

    await Promise.resolve();

    while (
      !this[DisposableLike_isDisposed] &&
      this[EnumeratorLike_moveNext]()
    ) {
      const next = this[EnumeratorLike_current];

      const maybeEventListeners = this[AsyncPublisher_EventListeners];
      const eventListeners =
        maybeEventListeners instanceof Set
          ? maybeEventListeners
          : isSome(maybeEventListeners)
            ? [maybeEventListeners]
            : [];

      for (const eventListener of eventListeners) {
        try {
          eventListener[EventListenerLike_notify](next);
        } catch (e) {
          eventListener[DisposableLike_dispose](error(e));
        }
      }

      await Promise.resolve();
    }

    if (!this[DisposableLike_isDisposed] && this[SinkLike_isCompleted]) {
      const maybeEventListeners = this[AsyncPublisher_EventListeners];
      const EventListeners =
        maybeEventListeners instanceof Set
          ? maybeEventListeners
          : isSome(maybeEventListeners)
            ? [maybeEventListeners]
            : [];

      for (const EventListener of EventListeners) {
        EventListener[DisposableLike_dispose]();
      }

      this[DisposableLike_dispose]();
    }

    this[AsyncPublisher_isDispatchingEvents] = false;
  }

  function onPublisherDisposed(this: TProperties, e: Optional<Error>) {
    this[SinkLike_isCompleted] = true;

    const maybeEventListeners = this[AsyncPublisher_EventListeners];
    const EventListeners =
      maybeEventListeners instanceof Set
        ? maybeEventListeners
        : isSome(maybeEventListeners)
          ? [maybeEventListeners]
          : [];

    for (const EventListener of EventListeners) {
      EventListener[DisposableLike_dispose](e);
    }
  }

  return returns(
    mix(
      include(DisposableMixin, QueueMixin()),
      function AsyncPublisherMixin(
        this: TPrototype<T> & TProperties,
        options: TOptions,
      ): PublisherLike<T> {
        init(DisposableMixin, this);
        init(QueueMixin<T>(), this, {} /* Maybe take in queue options*/);

        const autoDispose = options?.autoDispose ?? false;

        pipe(this, DisposableContainer.onDisposed(onPublisherDisposed));

        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const instance = this;
        this[AsyncPublisher_onSinkDisposed] = function onSinkDisposed(
          this: EventListenerLike<T>,
        ) {
          const maybeEventListeners = instance[AsyncPublisher_EventListeners];

          if (maybeEventListeners instanceof Set) {
            maybeEventListeners[Set_delete](this);
          } else if (maybeEventListeners === this) {
            instance[AsyncPublisher_EventListeners] = none;
          }

          if (
            maybeEventListeners instanceof Set &&
            maybeEventListeners[Set_size] == 1
          ) {
            instance[AsyncPublisher_EventListeners] =
              Iterable_first<EventListenerLike<T>>()(maybeEventListeners);
          }

          if (autoDispose && isNone(instance[AsyncPublisher_EventListeners])) {
            instance[DisposableLike_dispose]();
          }
        };

        return this;
      },
      props<TProperties>({
        [SinkLike_isCompleted]: false,
        [AsyncPublisher_EventListeners]: none,
        [AsyncPublisher_onSinkDisposed]: none,
        [AsyncPublisher_isDispatchingEvents]: false,
      }),
      proto<TPrototype<T>>({
        [ComputationLike_isDeferred]: false as const,
        [ComputationLike_isSynchronous]: false as const,

        [EventListenerLike_notify](
          this: TProperties & PublisherLike<T> & QueueLike<T>,
          next: T,
        ) {
          if (this[SinkLike_isCompleted]) {
            return;
          }

          this[QueueLike_enqueue](next);
          call(dispatch, this);
        },

        [SinkLike_complete](this: TProperties & PublisherLike<T>) {
          if (this[SinkLike_isCompleted]) {
            return;
          }
          this[SinkLike_isCompleted] = true;

          call(dispatch, this);
        },

        [SourceLike_subscribe](
          this: TProperties & PublisherLike<T>,
          eventListener: EventListenerLike<T>,
        ) {
          const maybeEventListeners = this[AsyncPublisher_EventListeners];
          this[DisposableContainerLike_add](eventListener);

          if (
            this[DisposableLike_isDisposed] ||
            eventListener === this ||
            (maybeEventListeners instanceof Set &&
              maybeEventListeners[Set_has](eventListener)) ||
            maybeEventListeners === eventListener
          ) {
            return;
          }

          if (maybeEventListeners instanceof Set) {
            maybeEventListeners[Set_add](eventListener);
          } else if (isSome(maybeEventListeners)) {
            const EventListeners = (this[AsyncPublisher_EventListeners] =
              newInstance<Set<EventListenerLike<T>>>(Set));
            EventListeners[Set_add](maybeEventListeners);
            EventListeners[Set_add](eventListener);
          } else {
            this[AsyncPublisher_EventListeners] = eventListener;
          }

          pipe(
            eventListener,
            DisposableContainer.onDisposed(this[AsyncPublisher_onSinkDisposed]),
          );
        },
      }),
    ),
  );
})();

export default AsyncPublisherMixin;
