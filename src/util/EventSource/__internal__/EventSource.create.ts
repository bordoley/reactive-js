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
  BufferLike_capacity,
  DisposableLike_dispose,
  EventEmitterLike_addListener,
  EventListenerLike,
  EventPublisherLike,
  EventSourceLike,
  IndexedBufferCollectionLike,
  ReplayableLike_buffer,
} from "../../../util.js";
import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
import EventPublisher_createRefCounted from "../../EventPublisher/__internal__/EventPublisher.createRefCounted.js";
import IndexedBufferCollection_createWithMutableDelegate from "../../IndexedBufferCollection/__internal__/IndexedBufferCollection.createWithMutableDelegate.js";

const EventSource_create: <T>(
  setup: SideEffect1<EventListenerLike<T>>,
  options?: { readonly replay?: number },
) => EventSourceLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [__CreateEventSource_createDelegate]: Factory<EventPublisherLike<T>>;
    [ReplayableLike_buffer]: Mutable<
      DelegatingLike<IndexedBufferCollectionLike<T>>
    > &
      IndexedBufferCollectionLike<T>;
  };

  return createInstanceFactory(
    mix(
      include(Delegating_mixin()),
      function CreateEventSource(
        instance: Pick<
          EventSourceLike<T>,
          typeof EventEmitterLike_addListener | typeof ReplayableLike_buffer
        > &
          TProperties,
        setup: SideEffect1<EventListenerLike<T>>,
        options: { readonly replay?: number } = {},
      ): EventSourceLike<T> {
        init(Delegating_mixin(), instance, none);
        instance[ReplayableLike_buffer] =
          IndexedBufferCollection_createWithMutableDelegate({
            [BufferLike_capacity]: options.replay,
          });

        instance[__CreateEventSource_createDelegate] = () => {
          const delegate = pipe(
            EventPublisher_createRefCounted<T>(options),
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

          const buffer = delegate[ReplayableLike_buffer];
          instance[ReplayableLike_buffer][DelegatingLike_delegate] = buffer;

          return delegate;
        };

        return instance;
      },
      props<TProperties>({
        [__CreateEventSource_createDelegate]: none,
        [ReplayableLike_buffer]: none,
      }),
      {
        [EventEmitterLike_addListener](
          this: TProperties &
            Mutable<DelegatingLike<Optional<EventPublisherLike<T>>>>,
          listener: EventListenerLike,
        ) {
          const delegate =
            this[DelegatingLike_delegate] ??
            this[__CreateEventSource_createDelegate]();

          delegate[EventEmitterLike_addListener](listener);
        },
      },
    ),
  );
})();

export default EventSource_create;
