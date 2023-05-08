import { Mixin, mix, props } from "../../../__internal__/mixins.js";
import { __LazyInitEventMixin_eventPublisher } from "../../../__internal__/symbols.js";
import {
  DisposableLike,
  ErrorSafeEventListenerLike,
  EventListenerLike,
  EventListenerLike_isErrorSafe,
  EventListenerLike_notify,
  EventPublisherLike,
  EventSourceLike,
  EventSourceLike_addEventListener,
} from "../../../core.js";
import {
  Function1,
  Optional,
  none,
  pipe,
  returns,
} from "../../../functions.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import EventPublisher_create from "./EventPublisher.create.js";

const EventPublisher_lazyInitMixin: <T>() => Mixin<
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
                EventPublisher_create(),
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

export default EventPublisher_lazyInitMixin;
