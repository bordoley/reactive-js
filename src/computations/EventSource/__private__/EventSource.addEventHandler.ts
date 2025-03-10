import {
  Mutable,
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  EventSourceLike,
  EventSourceLike_addEventListener,
} from "../../../computations.js";
import { SideEffect1, none } from "../../../functions.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import { EventListenerLike, EventListenerLike_notify } from "../../../utils.js";
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
      this: Mutable<TProperties>,
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

const EventSource_addEventHandler: EventSource.Signature["addEventHandler"] =
  <T>(handler: SideEffect1<T>) =>
  (source: EventSourceLike<T>) => {
    const eventListener = EventListener_createInternal<T>(handler);
    source[EventSourceLike_addEventListener](eventListener);
    return eventListener;
  };

export default EventSource_addEventHandler;
