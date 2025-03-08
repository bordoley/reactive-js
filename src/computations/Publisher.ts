import {
  Set,
  Set_add,
  Set_delete,
  Set_has,
  Set_size,
} from "../__internal__/constants.js";
import {
  Mutable,
  include,
  init,
  mixInstanceFactory,
  props,
} from "../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isSynchronous,
  EventSourceLike_addEventListener,
  PublisherLike,
} from "../computations.js";
import {
  Method,
  Optional,
  error,
  newInstance,
  none,
  pipe,
} from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import DisposableMixin from "../utils/__mixins__/DisposableMixin.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike,
  EventListenerLike_notify,
} from "../utils.js";

export const create: <T>(options?: {
  readonly autoDispose?: boolean;
}) => PublisherLike<T> = /*@__PURE__*/ (<T>() => {
  const Publisher_listeners = Symbol("Publisher_listeners");
  const Publisher_onListenerDisposed = Symbol("Publisher_onListenerDisposed");

  type TProperties = {
    readonly [Publisher_listeners]: Set<EventListenerLike<T>>;
    readonly [Publisher_onListenerDisposed]: Method<EventListenerLike<T>>;
  };

  function onEventPublisherDisposed(this: TProperties, e: Optional<Error>) {
    for (const listener of this[Publisher_listeners]) {
      listener[DisposableLike_dispose](e);
    }
  }

  return mixInstanceFactory(
    include(DisposableMixin),
    function EventPublisher(
      instance: Pick<
        PublisherLike<T>,
        | typeof EventSourceLike_addEventListener
        | typeof EventListenerLike_notify
        | typeof ComputationLike_isSynchronous
        | typeof ComputationLike_isDeferred
      > &
        Mutable<TProperties>,
      options?: { readonly autoDispose?: boolean },
    ): PublisherLike<T> {
      init(DisposableMixin, instance);

      instance[Publisher_listeners] =
        newInstance<Set<EventListenerLike<T>>>(Set);

      const autoDispose = options?.autoDispose ?? false;

      pipe(instance, DisposableContainer.onDisposed(onEventPublisherDisposed));

      instance[Publisher_onListenerDisposed] = function onListenerDisposed(
        this: EventListenerLike<T>,
      ) {
        const listeners = instance[Publisher_listeners];
        listeners[Set_delete](this);

        if (autoDispose && listeners[Set_size] === 0) {
          instance[DisposableLike_dispose]();
        }
      };

      return instance;
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

        for (const listener of this[Publisher_listeners]) {
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
        this;
        pipe(listener, Disposable.addToContainer(this));

        if (this[DisposableLike_isDisposed]) {
          return;
        }

        const listeners = this[Publisher_listeners];

        if (listeners[Set_has](listener)) {
          return;
        }

        listeners[Set_add](listener);
        pipe(
          listener,
          DisposableContainer.onDisposed(this[Publisher_onListenerDisposed]),
        );
      },
    },
  );
})();
