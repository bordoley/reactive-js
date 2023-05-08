import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  DisposableLike_dispose,
  ErrorSafeEventListenerLike,
  EventListenerLike,
  EventListenerLike_isErrorSafe,
  EventListenerLike_notify,
} from "../../../core.js";
import { SideEffect1, call, error, none } from "../../../functions.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";

const EventListener_createInternal: <T>(
  notify: (this: EventListenerLike<T>, a: T) => void,
  isErrorSafe: boolean,
) => EventListenerLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [EventListenerLike_notify]: SideEffect1<T>;
    [EventListenerLike_isErrorSafe]: boolean;
  };

  return createInstanceFactory(
    mix(
      include(Disposable_mixin),
      function EventListener(
        instance: Pick<
          EventListenerLike,
          typeof EventListenerLike_isErrorSafe
        > &
          Mutable<TProperties>,
        notify: (this: EventListenerLike<T>, a: T) => void,
        isErrorSafe: boolean,
      ): EventListenerLike<T> {
        init(Disposable_mixin, instance);

        instance[EventListenerLike_notify] = isErrorSafe
          ? function (this: EventListenerLike<T>, ev: T) {
              try {
                call(notify, this, ev);
              } catch (e) {
                instance[DisposableLike_dispose](error(e));
              }
            }
          : notify;
        instance[EventListenerLike_isErrorSafe] = isErrorSafe;

        return instance;
      },
      props<TProperties>({
        [EventListenerLike_notify]: none,
        [EventListenerLike_isErrorSafe]: false,
      }),
      {},
    ),
  );
})();

interface EventListenerCreate {
  create<T>(
    notify: (this: EventListenerLike<T>, a: T) => void,
  ): EventListenerLike<T>;

  create<T>(
    notify: (this: EventListenerLike<T>, a: T) => void,
    options: { errorSafe: true },
  ): ErrorSafeEventListenerLike<T>;

  create<T>(
    notify: (this: EventListenerLike<T>, a: T) => void,
    options?: { errorSafe?: boolean },
  ): EventListenerLike<T>;
}

const EventListener_create: EventListenerCreate["create"] = (<T>(
  notify: (this: EventListenerLike<T>, a: T) => void,
  options?: { errorSafe?: boolean },
) =>
  EventListener_createInternal(
    notify,
    options?.errorSafe ?? false,
  )) as EventListenerCreate["create"];

export default EventListener_create;
