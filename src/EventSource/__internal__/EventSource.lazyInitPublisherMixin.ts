import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import { Mixin, mix, props } from "../../__internal__/mixins.js";
import { __LazyInitEventMixin_eventPublisher } from "../../__internal__/symbols.js";
import { Function1, Optional, none, pipe, returns } from "../../functions.js";
import {
  DisposableLike,
  EventListenerLike,
  EventPublisherLike,
  EventSourceLike,
  EventSourceLike_addEventListener,
} from "../../types.js";
import EventSource_createPublisher from "./EventSource.createPublisher.js";

export const LazyInitEventMixin_eventPublisher: typeof __LazyInitEventMixin_eventPublisher =
  __LazyInitEventMixin_eventPublisher;

export interface LazyInitEventSource<T> extends EventSourceLike<T> {
  readonly [LazyInitEventMixin_eventPublisher]: Optional<EventListenerLike<T>>;
}

const EventSource_lazyInitPublisherMixin: <T>() => Mixin<
  LazyInitEventSource<T> & DisposableLike,
  DisposableLike
> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [__LazyInitEventMixin_eventPublisher]: Optional<EventPublisherLike<T>>;
  };

  return returns(
    mix<
      Function1<
        EventSourceLike<T> & TProperties & DisposableLike,
        LazyInitEventSource<T> & DisposableLike
      >,
      ReturnType<typeof props<TProperties>>,
      EventSourceLike<T>,
      DisposableLike
    >(
      function LazyInitEventPublisher(
        instance: EventSourceLike<T> & TProperties & DisposableLike,
      ): LazyInitEventSource<T> & DisposableLike {
        return instance;
      },
      props<TProperties>({
        [__LazyInitEventMixin_eventPublisher]: none,
      }),
      {
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
