import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../../__internal__/util.js";
import { pipe, unsafeCast } from "../../../functions.js";
import {
  DisposableLike_dispose,
  EventListenerLike,
  EventListenerLike_isErrorSafe,
  EventListenerLike_notify,
  EventPublisherLike,
  EventPublisherLike_listenerCount,
  EventSourceLike_addEventListener,
} from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import EventPublisher_create from "./EventPublisher.create.js";

const EventPublisher_createRefCounted: <T>() => EventPublisherLike<T> =
  /*@__PURE__*/ (<T>() => {
    const createRefCountedEventPublisherInstance = createInstanceFactory(
      mix(
        include(Disposable_delegatingMixin, Delegating_mixin()),
        function RefCountedEventPublisher(
          instance: Pick<
            EventPublisherLike<T>,
            | typeof EventSourceLike_addEventListener
            | typeof EventListenerLike_isErrorSafe
            | typeof EventListenerLike_notify
            | typeof EventPublisherLike_listenerCount
          >,
          delegate: EventPublisherLike<T>,
        ): EventPublisherLike<T> {
          init(Disposable_delegatingMixin, instance, delegate);
          init(Delegating_mixin(), instance, delegate);

          return instance;
        },
        props({}),
        {
          [EventListenerLike_isErrorSafe]: true as const,

          get [EventPublisherLike_listenerCount]() {
            unsafeCast<DelegatingLike<EventPublisherLike<T>>>(this);
            return this[DelegatingLike_delegate][
              EventPublisherLike_listenerCount
            ];
          },
          [EventListenerLike_notify](
            this: DelegatingLike<EventPublisherLike<T>>,
            next: T,
          ) {
            this[DelegatingLike_delegate][EventListenerLike_notify](next);
          },

          [EventSourceLike_addEventListener](
            this: DelegatingLike<EventPublisherLike<T>> & EventPublisherLike<T>,
            listener: EventListenerLike<T>,
          ) {
            this[DelegatingLike_delegate][EventSourceLike_addEventListener](
              listener,
            );

            pipe(
              listener,
              Disposable_onDisposed(() => {
                if (this[EventPublisherLike_listenerCount] === 0) {
                  this[DisposableLike_dispose]();
                }
              }),
            );
          },
        },
      ),
    );

    return (): EventPublisherLike<T> => {
      const delegate = EventPublisher_create<T>();
      return createRefCountedEventPublisherInstance(delegate);
    };
  })();

export default EventPublisher_createRefCounted;
