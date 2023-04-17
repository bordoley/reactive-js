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
import { Function1, error } from "../../../functions.js";
import {
  DisposableLike_dispose,
  ErrorSafeEventListenerLike,
  EventListenerLike,
  EventListenerLike_isErrorSafe,
  EventListenerLike_notify,
} from "../../../util.js";
import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";

const ErrorSafeEventListener_create: <T>(
  delegate: EventListenerLike<T>,
) => ErrorSafeEventListenerLike<T> = /*@__PURE__*/ (<T>() => {
  return createInstanceFactory(
    mix(
      include(Disposable_delegatingMixin, Delegating_mixin()),
      function ErrorSafeEventListener(
        instance: Pick<
          ErrorSafeEventListenerLike,
          typeof EventListenerLike_isErrorSafe | typeof EventListenerLike_notify
        >,
        delegate: EventListenerLike<T>,
      ): ErrorSafeEventListenerLike<T> {
        init(Disposable_delegatingMixin, instance, delegate);
        init(Delegating_mixin(), instance, delegate);

        return instance;
      },
      props({}),
      {
        [EventListenerLike_isErrorSafe]: true as const,

        [EventListenerLike_notify](
          this: DelegatingLike<EventListenerLike<T>> &
            ErrorSafeEventListenerLike<T>,
          ev: T,
        ) {
          try {
            this[DelegatingLike_delegate][EventListenerLike_notify](ev);
          } catch (e) {
            this[DisposableLike_dispose](error(e));
          }
        },
      },
    ),
  );
})();

const EventListener_toErrorSafeEventListener: <T>() => Function1<
  EventListenerLike<T>,
  ErrorSafeEventListenerLike<T>
> =
  <T>() =>
  (eventListener: EventListenerLike<T>) =>
    eventListener[EventListenerLike_isErrorSafe]
      ? (eventListener as ErrorSafeEventListenerLike<T>)
      : ErrorSafeEventListener_create<T>(eventListener);

export default EventListener_toErrorSafeEventListener;
