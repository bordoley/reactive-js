import {
  Mutable,
  createInstanceFactory,
  include,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../../__internal__/util.js";
import {
  Optional,
  SideEffect1,
  error,
  none,
  pipe,
  unsafeCast,
} from "../../../functions.js";
import {
  DisposableLike_dispose,
  EventListenerLike,
  EventPublisherLike,
  EventSourceLike,
  EventSourceLike_addListener,
  ReplayableLike_buffer,
} from "../../../util.js";
import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
import EventPublisher_createRefCounted from "../../EventPublisher/__internal__/EventPublisher.createRefCounted.js";
import IndexedBufferCollection_empty from "../../IndexedBufferCollection/__internal__/IndexedBufferCollection.empty.js";

const EventSource_create: <T>(
  setup: SideEffect1<EventListenerLike<T>>,
  options?: { readonly replay?: number },
) => EventSourceLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    // FIXME: Use Symbols
    su: SideEffect1<EventListenerLike<T>>;
    op: Optional<{ readonly replay?: number }>;
  };

  return createInstanceFactory(
    mix(
      include(Delegating_mixin()),
      function CreateEventSource(
        instance: Pick<
          EventSourceLike<T>,
          typeof EventSourceLike_addListener | typeof ReplayableLike_buffer
        > &
          TProperties,
        setup: SideEffect1<EventListenerLike<T>>,
        options?: { readonly replay?: number },
      ): EventSourceLike<T> {
        instance.su = setup;
        instance.op = options;

        return instance;
      },
      props<TProperties>({
        su: none,
        op: none,
      }),
      {
        get [ReplayableLike_buffer]() {
          unsafeCast<DelegatingLike<Optional<EventPublisherLike<T>>>>(this);
          return (
            this[DelegatingLike_delegate]?.[ReplayableLike_buffer] ??
            IndexedBufferCollection_empty<T>()
          );
        },

        [EventSourceLike_addListener](
          this: TProperties &
            Mutable<DelegatingLike<Optional<EventPublisherLike<T>>>>,
          listener: EventListenerLike,
        ) {
          const delegate =
            this[DelegatingLike_delegate] ??
            (() => {
              const delegate = pipe(
                EventPublisher_createRefCounted<T>(this.op),
                Disposable_onDisposed(() => {
                  this[DelegatingLike_delegate] = none;
                }),
              );

              this[DelegatingLike_delegate] = delegate;
              try {
                this.su(delegate);
              } catch (e) {
                delegate[DisposableLike_dispose](error(e));
              }

              return delegate;
            })();

          delegate[EventSourceLike_addListener](listener);
        },
      },
    ),
  );
})();

export default EventSource_create;
