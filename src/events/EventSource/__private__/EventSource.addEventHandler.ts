import {
  Mutable,
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  EventListenerLike,
  EventListenerLike_notify,
  EventSourceLike,
  EventSourceLike_addEventListener,
} from "../../../events.js";
import { SideEffect1, none } from "../../../functions.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import type * as EventSource from "../../EventSource.js";

const EventListener_createInternal: <T>(
  notify: (this: EventListenerLike<T>, a: T) => void,
) => EventListenerLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [EventListenerLike_notify]: SideEffect1<T>;
  };

  return mixInstanceFactory(
    include(DisposableMixin),
    function EventListener(
      instance: Mutable<TProperties>,
      notify: (this: EventListenerLike<T>, a: T) => void,
    ): EventListenerLike<T> {
      init(DisposableMixin, instance);

      instance[EventListenerLike_notify] = notify;

      return instance;
    },
    props<TProperties>({
      [EventListenerLike_notify]: none,
    }),
  );
})();

const EventSource_addEventHandler: EventSource.Signature["addEventHandler"] =
  <T>(handler: SideEffect1<T>) =>
  (source: EventSourceLike<T>) => {
    const eventListener = EventListener_createInternal<T>(handler);
    source[EventSourceLike_addEventListener](eventListener);
    return eventListener;
  };

export default EventSource_addEventHandler;
