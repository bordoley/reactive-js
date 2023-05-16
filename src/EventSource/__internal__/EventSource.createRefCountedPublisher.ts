import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
import type * as EventSource from "../../EventSource.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../__internal__/types.js";
import { pipe, unsafeCast } from "../../functions.js";
import {
  DisposableLike_dispose,
  EventListenerLike,
  EventListenerLike_isErrorSafe,
  EventPublisherLike,
  EventPublisherLike_listenerCount,
  EventSourceLike_addEventListener,
  SinkLike_notify,
} from "../../types.js";
import EventSource_createPublisher from "./EventSource.createPublisher.js";

const EventSource_createRefCountedPublisher: EventSource.Signature["createRefCountedPublisher"] =
  /*@__PURE__*/ (<T>() => {
    const createRefCountedEventPublisherInstance = createInstanceFactory(
      mix(
        include(Disposable_delegatingMixin, Delegating_mixin()),
        function RefCountedEventPublisher(
          instance: Pick<
            EventPublisherLike<T>,
            | typeof EventSourceLike_addEventListener
            | typeof EventListenerLike_isErrorSafe
            | typeof SinkLike_notify
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
          [SinkLike_notify](
            this: DelegatingLike<EventPublisherLike<T>>,
            next: T,
          ) {
            this[DelegatingLike_delegate][SinkLike_notify](next);
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
      const delegate = EventSource_createPublisher<T>();
      return createRefCountedEventPublisherInstance(delegate);
    };
  })();

export default EventSource_createRefCountedPublisher;
