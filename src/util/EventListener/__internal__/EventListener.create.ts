import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Method1, SideEffect1, none } from "../../../functions.js";
import { EventListenerLike, EventListenerLike_notify } from "../../../util.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";

const EventListener_create: <T>(
  notify: Method1<EventListenerLike<T>, T, void>,
) => EventListenerLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    readonly [EventListenerLike_notify]: SideEffect1<T>;
  };

  return createInstanceFactory(
    mix(
      include(Disposable_mixin),
      function EventListener(
        instance: Mutable<TProperties>,
        notify: Method1<EventListenerLike<T>, T, void>,
      ): EventListenerLike<T> {
        init(Disposable_mixin, instance);

        instance[EventListenerLike_notify] = notify;

        return instance;
      },
      props<TProperties>({
        [EventListenerLike_notify]: none,
      }),
      {},
    ),
  );
})();

export default EventListener_create;
