import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
import type * as EventSource from "../../EventSource.js";
import Iterable_enumerate from "../../Iterable/__internal__/Iterable.enumerate.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { __EventPublisher_listeners } from "../../__internal__/symbols.js";
import { error, newInstance, none, pipe, unsafeCast } from "../../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EnumeratorLike_current,
  EnumeratorLike_move,
  EventListenerLike,
  EventListenerLike_isErrorSafe,
  EventListenerLike_notify,
  EventPublisherLike,
  EventPublisherLike_listenerCount,
  EventSourceLike_addEventListener,
} from "../../types.js";

const EventSource_createPublisher: EventSource.Signature["createPublisher"] =
  /*@__PURE__*/ (<T>() => {
    type TProperties = {
      readonly [__EventPublisher_listeners]: Set<EventListenerLike<T>>;
    };
    return createInstanceFactory(
      mix(
        include(Disposable_mixin),
        function EventPublisher(
          instance: Pick<
            EventPublisherLike<T>,
            | typeof EventSourceLike_addEventListener
            | typeof EventListenerLike_isErrorSafe
            | typeof EventListenerLike_notify
            | typeof EventPublisherLike_listenerCount
          > &
            Mutable<TProperties>,
        ): EventPublisherLike<T> {
          init(Disposable_mixin, instance);

          instance[__EventPublisher_listeners] =
            newInstance<Set<EventListenerLike>>(Set);

          pipe(
            instance,
            Disposable_onDisposed(e => {
              const enumerator = pipe(
                instance[__EventPublisher_listeners],
                Iterable_enumerate(),
              );

              while (enumerator[EnumeratorLike_move]()) {
                const listener = enumerator[EnumeratorLike_current];
                listener[DisposableLike_dispose](e);
              }
            }),
          );

          return instance;
        },
        props<TProperties>({
          [__EventPublisher_listeners]: none,
        }),
        {
          [EventListenerLike_isErrorSafe]: true as const,

          get [EventPublisherLike_listenerCount]() {
            unsafeCast<TProperties>(this);
            return this[__EventPublisher_listeners].size;
          },

          [EventListenerLike_notify](
            this: TProperties & EventPublisherLike<T>,
            next: T,
          ) {
            if (this[DisposableLike_isDisposed]) {
              return;
            }

            for (const listener of this[__EventPublisher_listeners]) {
              try {
                listener[EventListenerLike_notify](next);
              } catch (e) {
                listener[DisposableLike_dispose](error(e));
              }
            }
          },

          [EventSourceLike_addEventListener](
            this: TProperties & EventPublisherLike<T>,
            listener: EventListenerLike<T>,
          ) {
            if (!this[DisposableLike_isDisposed]) {
              const listeners = this[__EventPublisher_listeners];
              listeners.add(listener);

              pipe(
                listener,
                Disposable_onDisposed(_ => {
                  listeners.delete(listener);
                }),
              );
            }
          },
        },
      ),
    );
  })();

export default EventSource_createPublisher;
