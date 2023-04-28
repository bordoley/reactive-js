import {
  MappingLike,
  MappingLike_selector,
  PredicatedLike,
  PredicatedLike_predicate,
} from "../../../__internal__/containers.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { __EventPublisher_listeners } from "../../../__internal__/symbols.js";
import {
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../../containers.js";
import Iterable_enumerate from "../../../containers/Iterable/__internal__/Iterable.enumerate.js";
import {
  Function1,
  Predicate,
  error,
  newInstance,
  none,
  pipe,
  unsafeCast,
} from "../../../functions.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventEmitterLike_addEventListener,
  EventListenerLike,
  EventListenerLike_isErrorSafe,
  EventListenerLike_notify,
  EventPublisherLike_listenerCount,
  EventSourceLike,
} from "../../../util.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";

export interface EventKeepMapPublisherLike<T, TOut = T>
  extends EventSourceLike<TOut>,
    EventListenerLike<T>,
    DisposableLike {
  readonly [EventListenerLike_isErrorSafe]: true;
  readonly [EventPublisherLike_listenerCount]: number;
}

const EventPublisher_createWithPredicateAndSelector: <T, TOut>(
  predicate: Predicate<T>,
  selector: Function1<T, TOut>,
  options?: {
    readonly replay?: number;
  },
) => EventKeepMapPublisherLike<T, TOut> = /*@__PURE__*/ (<T, TOut>() => {
  type TProperties = {
    readonly [__EventPublisher_listeners]: Set<EventListenerLike<TOut>>;
  } & PredicatedLike<T> &
    MappingLike<T, TOut>;

  const createPublisherInstance = createInstanceFactory(
    mix(
      include(Disposable_mixin),
      function EventPublisher(
        instance: Pick<
          EventKeepMapPublisherLike<T, TOut>,
          | typeof EventEmitterLike_addEventListener
          | typeof EventListenerLike_isErrorSafe
          | typeof EventListenerLike_notify
          | typeof EventPublisherLike_listenerCount
        > &
          Mutable<TProperties>,
        predicate: Predicate<T>,
        selector: Function1<T, TOut>,
      ): EventKeepMapPublisherLike<T, TOut> {
        init(Disposable_mixin, instance);

        instance[__EventPublisher_listeners] =
          newInstance<Set<EventListenerLike>>(Set);

        instance[PredicatedLike_predicate] = predicate;
        instance[MappingLike_selector] = selector;

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
        [PredicatedLike_predicate]: none,
        [MappingLike_selector]: none,
      }),
      {
        [EventListenerLike_isErrorSafe]: true as const,

        get [EventPublisherLike_listenerCount]() {
          unsafeCast<TProperties>(this);
          return this[__EventPublisher_listeners].size;
        },

        [EventListenerLike_notify](
          this: TProperties & EventKeepMapPublisherLike<T, TOut>,
          next: T,
        ) {
          if (this[DisposableLike_isDisposed]) {
            return;
          }

          if (!this[PredicatedLike_predicate](next)) {
            return;
          }

          const result = this[MappingLike_selector](next);

          for (const listener of this[__EventPublisher_listeners]) {
            try {
              listener[EventListenerLike_notify](result);
            } catch (e) {
              listener[DisposableLike_dispose](error(e));
            }
          }
        },

        [EventEmitterLike_addEventListener](
          this: TProperties & EventKeepMapPublisherLike<T, TOut>,
          listener: EventListenerLike<TOut>,
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

  return (predicate: Predicate<T>, selector: Function1<T, TOut>) => {
    return createPublisherInstance(predicate, selector);
  };
})();

export default EventPublisher_createWithPredicateAndSelector;
