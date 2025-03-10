import {
  Set_add,
  Set_delete,
  Set_has,
  Set_size,
} from "../../__internal__/constants.js";
import {
  Mixin1,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isSynchronous,
  EventSourceLike_addEventListener,
  PublisherLike,
} from "../../computations.js";
import {
  Method,
  Optional,
  error,
  isNone,
  isSome,
  newInstance,
  none,
  pipe,
  returns,
} from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike,
  EventListenerLike_notify,
} from "../../utils.js";
import * as Iterable from "../Iterable.js";

const PublisherMixin: <T>() => Mixin1<
  PublisherLike<T>,
  Optional<{ readonly autoDispose?: boolean }>,
  unknown,
  Pick<
    PublisherLike<T>,
    typeof EventSourceLike_addEventListener | typeof EventListenerLike_notify
  >
> = /*@__PURE__*/ (<T>() => {
  const Publisher_listeners = Symbol("Publisher_listeners");
  const Publisher_onListenerDisposed = Symbol("Publisher_onListenerDisposed");

  type TProperties = {
    [Publisher_listeners]: Optional<
      Set<EventListenerLike<T>> | EventListenerLike<T>
    >;
    readonly [Publisher_onListenerDisposed]: Method<EventListenerLike<T>>;
  };

  function onEventPublisherDisposed(this: TProperties, e: Optional<Error>) {
    const maybeListeners = this[Publisher_listeners];
    const listeners =
      maybeListeners instanceof Set
        ? maybeListeners
        : isSome(maybeListeners)
          ? [maybeListeners]
          : [];

    for (const listener of listeners) {
      listener[DisposableLike_dispose](e);
    }

    this[Publisher_listeners] = none;
  }

  return returns(
    mix(
      include(DisposableMixin),
      function EventPublisher(
        this: Pick<
          PublisherLike<T>,
          | typeof EventSourceLike_addEventListener
          | typeof EventListenerLike_notify
          | typeof ComputationLike_isSynchronous
          | typeof ComputationLike_isDeferred
        > &
          Mutable<TProperties>,
        options: Optional<{ readonly autoDispose?: boolean }>,
      ): PublisherLike<T> {
        init(DisposableMixin, this);

        const autoDispose = options?.autoDispose ?? false;

        pipe(this, DisposableContainer.onDisposed(onEventPublisherDisposed));

        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const instance = this;
        this[Publisher_onListenerDisposed] = function onListenerDisposed(
          this: EventListenerLike<T>,
        ) {
          const maybeListeners = instance[Publisher_listeners];

          if (maybeListeners instanceof Set) {
            maybeListeners[Set_delete](this);
          } else if (maybeListeners === this) {
            instance[Publisher_listeners] = none;
          }

          if (maybeListeners instanceof Set && maybeListeners[Set_size] == 1) {
            instance[Publisher_listeners] =
              Iterable.first<EventListenerLike<T>>()(maybeListeners);
          }

          if (autoDispose && isNone(instance[Publisher_listeners])) {
            instance[DisposableLike_dispose]();
            instance[Publisher_listeners] = none;
          }
        };

        return this;
      },
      props<TProperties>({
        [Publisher_listeners]: none,
        [Publisher_onListenerDisposed]: none,
      }),
      {
        [ComputationLike_isDeferred]: false as const,
        [ComputationLike_isSynchronous]: false as const,

        [EventListenerLike_notify](
          this: TProperties & PublisherLike<T>,
          next: T,
        ) {
          if (this[DisposableLike_isDisposed]) {
            return;
          }

          const maybeListeners = this[Publisher_listeners];
          const listeners =
            maybeListeners instanceof Set
              ? maybeListeners
              : isSome(maybeListeners)
                ? [maybeListeners]
                : [];

          for (const listener of listeners) {
            try {
              listener[EventListenerLike_notify](next);
            } catch (e) {
              listener[DisposableLike_dispose](error(e));
            }
          }
        },

        [EventSourceLike_addEventListener](
          this: TProperties & PublisherLike<T>,
          listener: EventListenerLike<T>,
        ) {
          pipe(listener, Disposable.addToContainer(this));

          const maybeListeners = this[Publisher_listeners];

          if (
            this[DisposableLike_isDisposed] ||
            listener === this ||
            (maybeListeners instanceof Set &&
              maybeListeners[Set_has](listener)) ||
            maybeListeners === listener
          ) {
            return;
          }

          if (maybeListeners instanceof Set) {
            maybeListeners[Set_add](listener);
          } else if (isSome(maybeListeners)) {
            const listeners = (this[Publisher_listeners] =
              newInstance<Set<EventListenerLike<T>>>(Set));
            listeners[Set_add](maybeListeners);
            listeners[Set_add](listener);
          } else {
            this[Publisher_listeners] = listener;
          }

          pipe(
            listener,
            DisposableContainer.onDisposed(this[Publisher_onListenerDisposed]),
          );
        },
      },
    ),
  );
})();

export default PublisherMixin;
