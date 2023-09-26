import { Mixin, mix, props } from "../../../__internal__/mixins.js";
import {
  Function1,
  Optional,
  none,
  pipe,
  returns,
} from "../../../functions.js";
import {
  EventListenerLike,
  EventSourceLike,
  EventSourceLike_addEventListener,
  PublisherLike,
} from "../../../rx.js";
import { DisposableLike } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Publisher_create from "../../Publisher/__internal__/Publisher.create.js";

export const LazyInitEventMixin_eventPublisher = Symbol(
  "LazyInitEventMixin_eventPublisher",
);

export interface LazyInitEventSource<T> extends EventSourceLike<T> {
  readonly [LazyInitEventMixin_eventPublisher]: Optional<EventListenerLike<T>>;
}

const EventSource_lazyInitPublisherMixin: <T>() => Mixin<
  LazyInitEventSource<T> & DisposableLike,
  DisposableLike
> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [LazyInitEventMixin_eventPublisher]: Optional<PublisherLike<T>>;
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
        [LazyInitEventMixin_eventPublisher]: none,
      }),
      {
        [EventSourceLike_addEventListener](
          this: TProperties & DisposableLike,
          listener: EventListenerLike<T>,
        ): void {
          const publisher =
            this[LazyInitEventMixin_eventPublisher] ??
            (() => {
              const publisher = pipe(
                Publisher_create(),
                Disposable.addTo(this),
              );
              this[LazyInitEventMixin_eventPublisher] = publisher;
              return publisher;
            })();

          publisher[EventSourceLike_addEventListener](listener);
        },
      },
    ),
  );
})();

export default EventSource_lazyInitPublisherMixin;
