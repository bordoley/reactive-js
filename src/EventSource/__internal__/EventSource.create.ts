import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_createRefCountedPublisher from "../../EventSource/__internal__/EventSource.createRefCountedPublisher.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { __CreateEventSource_createDelegate } from "../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../__internal__/types.js";
import {
  Function1,
  Optional,
  SideEffect1,
  error,
  none,
  pipe,
} from "../../functions.js";
import {
  DisposableLike_dispose,
  EventListenerLike,
  EventPublisherLike,
  EventSourceLike,
  EventSourceLike_addEventListener,
} from "../../types.js";

const EventSource_create: EventSource.Signature["create"] = /*@__PURE__*/ (<
  T,
>() => {
  type TProperties = {
    [__CreateEventSource_createDelegate]: Function1<
      EventListenerLike<T>,
      EventPublisherLike<T>
    >;
  };

  return createInstanceFactory(
    mix(
      include(Delegating_mixin()),
      function CreateEventSource(
        instance: Pick<
          EventSourceLike<T>,
          typeof EventSourceLike_addEventListener
        > &
          TProperties,
        setup: SideEffect1<EventListenerLike<T>>,
      ): EventSourceLike<T> {
        init(Delegating_mixin(), instance, none);

        // Pass in the initial listener to the setup function
        // so that we can connect it to the publisher before
        // the setup function is run, in case the setup function
        // publishes notifications. useful for testing.
        instance[__CreateEventSource_createDelegate] = (
          listener: EventListenerLike<T>,
        ) => {
          const delegate = pipe(
            EventSource_createRefCountedPublisher<T>(),
            Disposable_onDisposed(() => {
              (
                instance as Mutable<
                  DelegatingLike<Optional<EventPublisherLike<T>>>
                >
              )[DelegatingLike_delegate] = none;
            }),
          );

          delegate[EventSourceLike_addEventListener](listener);

          (
            instance as Mutable<DelegatingLike<Optional<EventPublisherLike<T>>>>
          )[DelegatingLike_delegate] = delegate;
          try {
            setup(delegate);
          } catch (e) {
            delegate[DisposableLike_dispose](error(e));
          }

          return delegate;
        };

        return instance;
      },
      props<TProperties>({
        [__CreateEventSource_createDelegate]: none,
      }),
      {
        [EventSourceLike_addEventListener](
          this: TProperties &
            Mutable<DelegatingLike<Optional<EventPublisherLike<T>>>>,
          listener: EventListenerLike,
        ) {
          const delegate =
            this[DelegatingLike_delegate] ??
            this[__CreateEventSource_createDelegate](listener);

          delegate[EventSourceLike_addEventListener](listener);
        },
      },
    ),
  );
})();

export default EventSource_create;
