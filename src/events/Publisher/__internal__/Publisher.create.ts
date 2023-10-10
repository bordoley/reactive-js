import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
  unsafeCast,
} from "../../../__internal__/mixins.js";
import {
  EventListenerLike,
  EventListenerLike_isErrorSafe,
  EventSourceLike_addEventListener,
  PublisherLike,
  PublisherLike_listenerCount,
} from "../../../events.js";
import { error, newInstance, none, pipe } from "../../../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  SinkLike_notify,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import type * as Publisher from "../../Publisher.js";

const Publisher_listeners = Symbol("Publisher_listeners");

const Publisher_create: Publisher.Signature["create"] = /*@__PURE__*/ (<
  T,
>() => {
  type TProperties = {
    readonly [Publisher_listeners]: Set<EventListenerLike<T>>;
  };
  return createInstanceFactory(
    mix(
      include(DisposableMixin),
      function EventPublisher(
        instance: Pick<
          PublisherLike<T>,
          | typeof EventSourceLike_addEventListener
          | typeof EventListenerLike_isErrorSafe
          | typeof SinkLike_notify
          | typeof PublisherLike_listenerCount
        > &
          Mutable<TProperties>,
      ): PublisherLike<T> {
        init(DisposableMixin, instance);

        instance[Publisher_listeners] =
          newInstance<Set<EventListenerLike>>(Set);

        pipe(
          instance,
          Disposable.onDisposed(e => {
            for (const listener of instance[Publisher_listeners]) {
              listener[DisposableLike_dispose](e);
            }
          }),
        );

        return instance;
      },
      props<TProperties>({
        [Publisher_listeners]: none,
      }),
      {
        [EventListenerLike_isErrorSafe]: true as const,

        get [PublisherLike_listenerCount]() {
          unsafeCast<TProperties>(this);
          return this[Publisher_listeners].size;
        },

        [SinkLike_notify](this: TProperties & PublisherLike<T>, next: T) {
          if (this[DisposableLike_isDisposed]) {
            return;
          }

          for (const listener of this[Publisher_listeners]) {
            try {
              listener[SinkLike_notify](next);
            } catch (e) {
              listener[DisposableLike_dispose](error(e));
            }
          }
        },

        [EventSourceLike_addEventListener](
          this: TProperties & PublisherLike<T>,
          listener: EventListenerLike<T>,
        ) {
          pipe(this, Disposable.add(listener, { ignoreChildErrors: true }));

          if (this[DisposableLike_isDisposed]) {
            return;
          }

          const listeners = this[Publisher_listeners];

          if (listeners.has(listener)) {
            return;
          }

          listeners.add(listener);
          pipe(
            listener,
            Disposable.onDisposed(_ => {
              listeners.delete(listener);
            }),
          );
        },
      },
    ),
  );
})();

export default Publisher_create;
