import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { __CreateEventSource_createDelegate } from "../../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../../__internal__/util.js";
import {
  Factory,
  Optional,
  SideEffect1,
  error,
  none,
  pipe,
} from "../../../functions.js";
import {
  DisposableLike_dispose,
  EventListenerLike,
  EventPublisherLike,
  EventSourceLike,
  EventSourceLike_addEventListener,
} from "../../../util.js";
import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
import EventPublisher_createRefCounted from "../../EventPublisher/__internal__/EventPublisher.createRefCounted.js";

const EventSource_create: <T>(
  setup: SideEffect1<EventListenerLike<T>>,
) => EventSourceLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [__CreateEventSource_createDelegate]: Factory<EventPublisherLike<T>>;
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

        instance[__CreateEventSource_createDelegate] = () => {
          const delegate = pipe(
            EventPublisher_createRefCounted<T>(),
            Disposable_onDisposed(() => {
              (
                instance as Mutable<
                  DelegatingLike<Optional<EventPublisherLike<T>>>
                >
              )[DelegatingLike_delegate] = none;
            }),
          );

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
            this[__CreateEventSource_createDelegate]();

          delegate[EventSourceLike_addEventListener](listener);
        },
      },
    ),
  );
})();

export default EventSource_create;
