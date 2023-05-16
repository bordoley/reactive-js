import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import type * as EventListener from "../../EventListener.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { SideEffect1, call, error, none } from "../../functions.js";
import {
  DisposableLike_dispose,
  EventListenerLike,
  EventListenerLike_isErrorSafe,
  SinkLike_notify,
} from "../../types.js";

const EventListener_createInternal: <T>(
  notify: (this: EventListenerLike<T>, a: T) => void,
  isErrorSafe: boolean,
) => EventListenerLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [SinkLike_notify]: SideEffect1<T>;
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

        instance[SinkLike_notify] = isErrorSafe
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
        [SinkLike_notify]: none,
        [EventListenerLike_isErrorSafe]: false,
      }),
      {},
    ),
  );
})();

const EventListener_create: EventListener.Signature["create"] = (<T>(
  notify: (this: EventListenerLike<T>, a: T) => void,
  options?: { errorSafe?: boolean },
) =>
  EventListener_createInternal(
    notify,
    options?.errorSafe ?? false,
  )) as EventListener.Signature["create"];

export default EventListener_create;
