import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import { Mixin, mix, props } from "../../__internal__/mixins.js";
import { __LazyInitEventMixin_eventPublisher } from "../../__internal__/symbols.js";
import { Function1, Optional, none, pipe, returns } from "../../functions.js";
import {
  DisposableLike,
  ErrorSafeEventListenerLike,
  EventListenerLike,
  EventListenerLike_isErrorSafe,
  EventListenerLike_notify,
  EventPublisherLike,
  EventSourceLike,
  EventSourceLike_addEventListener,
} from "../../types.js";
import EventSource_createPublisher from "./EventSource.createPublisher.js";

const EventSource_lazyInitPublisherMixin: <T>() => Mixin<
  EventPublisherLike<T>,
  DisposableLike
> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [__LazyInitEventMixin_eventPublisher]: Optional<EventPublisherLike<T>>;
  };

  return returns(
    mix<
      Function1<
        EventPublisherLike<T> & DisposableLike,
        EventPublisherLike<T> & DisposableLike
      >,
      ReturnType<typeof props<TProperties>>,
      EventSourceLike<T> &
        Pick<
          ErrorSafeEventListenerLike<T>,
          typeof EventListenerLike_isErrorSafe | typeof EventListenerLike_notify
        >,
      EventPublisherLike<T>
    >(
      function LazyInitEventPublisher(
        instance: EventPublisherLike<T>,
      ): EventPublisherLike<T> {
        return instance;
      },
      props<TProperties>({
        [__LazyInitEventMixin_eventPublisher]: none,
      }),
      {
        [EventListenerLike_isErrorSafe]: true as const,

        [EventListenerLike_notify](this: TProperties, event: T): void {
          this[__LazyInitEventMixin_eventPublisher]?.[EventListenerLike_notify](
            event,
          );
        },

        [EventSourceLike_addEventListener](
          this: TProperties & DisposableLike,
          listener: EventListenerLike<T>,
        ): void {
          const publisher =
            this[__LazyInitEventMixin_eventPublisher] ??
            (() => {
              const publisher = pipe(
                EventSource_createPublisher(),
                Disposable_addTo(this),
              );
              this[__LazyInitEventMixin_eventPublisher] = publisher;
              return publisher;
            })();

          publisher[EventSourceLike_addEventListener](listener);
        },
      },
    ),
  );
})();

export default EventSource_lazyInitPublisherMixin;
