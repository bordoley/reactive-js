import { Mixin, mix, props } from "../../__internal__/mixins.js";
import {
  EventListenerLike,
  EventSourceLike,
  EventSourceLike_addEventListener,
  PublisherLike,
} from "../../events.js";
import { Function1, Optional, none, pipe, returns } from "../../functions.js";
import { DisposableLike } from "../../utils.js";
import * as Disposable from "../../utils/Disposable.js";
import Publisher_create from "../Publisher/__internal__/Publisher.create.js";

export const LazyInitEventSourceMixin_publisher = Symbol(
  "LazyInitEventSourceMixin_publisher",
);

export interface LazyInitEventSourceLike<T> extends EventSourceLike<T> {
  readonly [LazyInitEventSourceMixin_publisher]: Optional<EventListenerLike<T>>;
}

const LazyInitEventSourceMixin: <T>() => Mixin<
  LazyInitEventSourceLike<T> & DisposableLike,
  DisposableLike
> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [LazyInitEventSourceMixin_publisher]: Optional<PublisherLike<T>>;
  };

  return returns(
    mix<
      Function1<
        EventSourceLike<T> & TProperties & DisposableLike,
        LazyInitEventSourceLike<T> & DisposableLike
      >,
      ReturnType<typeof props<TProperties>>,
      EventSourceLike<T>,
      DisposableLike
    >(
      function LazyInitEventSourceMixin(
        instance: EventSourceLike<T> & TProperties & DisposableLike,
      ): LazyInitEventSourceLike<T> & DisposableLike {
        return instance;
      },
      props<TProperties>({
        [LazyInitEventSourceMixin_publisher]: none,
      }),
      {
        [EventSourceLike_addEventListener](
          this: TProperties & DisposableLike,
          listener: EventListenerLike<T>,
        ): void {
          const publisher =
            this[LazyInitEventSourceMixin_publisher] ??
            (() => {
              const publisher = pipe(
                Publisher_create(),
                Disposable.addTo(this),
              );
              this[LazyInitEventSourceMixin_publisher] = publisher;
              return publisher;
            })();

          publisher[EventSourceLike_addEventListener](listener);
        },
      },
    ),
  );
})();

export default LazyInitEventSourceMixin;
