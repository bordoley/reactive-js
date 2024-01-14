import { Mixin, mix, props } from "../../__internal__/mixins.js";
import {
  EventListenerLike,
  EventSourceLike,
  EventSourceLike_addEventListener,
  PublisherLike,
} from "../../events.js";
import { Optional, none, pipe, returns } from "../../functions.js";
import { DisposableLike } from "../../utils.js";
import * as Disposable from "../../utils/Disposable.js";
import * as Publisher from "../Publisher.js";

export const LazyInitEventSourceLike_publisher = Symbol(
  "LazyInitEventSourceLike_publisher",
);

/**
 * @noInheritDoc
 */
export interface LazyInitEventSourceLike<T> extends EventSourceLike<T> {
  readonly [LazyInitEventSourceLike_publisher]: Optional<EventListenerLike<T>>;
}

const LazyInitEventSourceMixin: <T>() => Mixin<
  LazyInitEventSourceLike<T>,
  DisposableLike
> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [LazyInitEventSourceLike_publisher]: Optional<PublisherLike<T>>;
  };

  return returns(
    mix<
      LazyInitEventSourceLike<T>,
      TProperties,
      EventSourceLike<T>,
      DisposableLike
    >(
      function LazyInitEventSourceMixin(
        instance: EventSourceLike<T> & TProperties & DisposableLike,
      ): LazyInitEventSourceLike<T> {
        return instance;
      },
      props<TProperties>({
        [LazyInitEventSourceLike_publisher]: none,
      }),
      {
        [EventSourceLike_addEventListener](
          this: EventSourceLike<T> & TProperties & DisposableLike,
          listener: EventListenerLike<T>,
        ): void {
          const publisher =
            this[LazyInitEventSourceLike_publisher] ??
            (() => {
              const publisher = pipe(
                Publisher.create(),
                Disposable.addTo(this),
              );
              this[LazyInitEventSourceLike_publisher] = publisher;
              return publisher;
            })();

          publisher[EventSourceLike_addEventListener](listener);
        },
      },
    ),
  );
})();

export default LazyInitEventSourceMixin;
