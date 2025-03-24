import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../__internal__/mixins.js";
import { SideEffect1, none } from "../../functions.js";
import {
  DisposableLike,
  EventListenerLike,
  EventListenerLike_notify,
} from "../../utils.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";

export const create: <T>(
  notify: (this: EventListenerLike<T>, a: T) => void,
) => EventListenerLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [EventListenerLike_notify]: SideEffect1<T>;
  };

  return mixInstanceFactory(
    include(DisposableMixin),
    function EventListener(
      this: TProperties & Omit<EventListenerLike<T>, keyof DisposableLike>,
      notify: (this: EventListenerLike<T>, a: T) => void,
    ): EventListenerLike<T> {
      init(DisposableMixin, this);

      this[EventListenerLike_notify] = notify;

      return this;
    },
    props<TProperties>({
      [EventListenerLike_notify]: none,
    }),
  );
})();
