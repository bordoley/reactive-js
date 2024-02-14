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
  EventListenerLike,
  EventListenerLike_isErrorSafe,
  EventListenerLike_notify,
  EventSourceLike_addEventListener,
  PublisherLike,
} from "../events.js";
import { error, newInstance, none, pipe } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import DisposableMixin from "../utils/__mixins__/DisposableMixin.js";
import { DisposableLike_dispose, DisposableLike_isDisposed } from "../utils.js";

export const create: <T>(options?: {
  readonly autoDispose?: boolean;
}) => PublisherLike<T> = /*@__PURE__*/ (<T>() => {
  const Publisher_autoDispose = Symbol("Publisher_autoDispose");
  const Publisher_listeners = Symbol("Publisher_listeners");

  type TProperties = {
    readonly [Publisher_autoDispose]: boolean;
    readonly [Publisher_listeners]: Set<EventListenerLike<T>>;
  };

  return mixInstanceFactory(
    include(DisposableMixin),
    function EventPublisher(
      instance: Pick<
        PublisherLike<T>,
        | typeof EventSourceLike_addEventListener
        | typeof EventListenerLike_isErrorSafe
        | typeof EventListenerLike_notify
      > &
        Mutable<TProperties>,
      options?: { readonly autoDispose?: boolean },
    ): PublisherLike<T> {
      init(DisposableMixin, instance);

      instance[Publisher_listeners] = newInstance<Set<EventListenerLike>>(Set);

      instance[Publisher_autoDispose] = options?.autoDispose ?? false;

      pipe(
        instance,
        DisposableContainer.onDisposed(e => {
          for (const listener of instance[Publisher_listeners]) {
            listener[DisposableLike_dispose](e);
          }
        }),
      );

      return instance;
    },
    props<TProperties>({
      [Publisher_autoDispose]: false,
      [Publisher_listeners]: none,
    }),
    {
      [EventListenerLike_isErrorSafe]: true as const,

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
          DisposableContainer.onDisposed(_ => {
            listeners[Set_delete](listener);

            if (
              this[Publisher_autoDispose] &&
              this[Publisher_listeners][Set_size] === 0
            ) {
              this[DisposableLike_dispose]();
            }
          }),
        );
      },
    },
  );
})();
