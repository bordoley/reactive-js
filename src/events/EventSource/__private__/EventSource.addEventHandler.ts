import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  EventListenerLike,
  EventListenerLike_isErrorSafe,
  EventSourceLike,
  EventSourceLike_addEventListener,
  SinkLike_notify,
} from "../../../events.js";
import { SideEffect1, none } from "../../../functions.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import type * as EventSource from "../../EventSource.js";

const EventListener_createInternal: <T>(
  notify: (this: EventListenerLike<T>, a: T) => void,
) => EventListenerLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [SinkLike_notify]: SideEffect1<T>;
  };

  return createInstanceFactory(
    mix(
      include(DisposableMixin),
      function EventListener(
        instance: Pick<
          EventListenerLike,
          typeof EventListenerLike_isErrorSafe
        > &
          Mutable<TProperties>,
        notify: (this: EventListenerLike<T>, a: T) => void,
      ): EventListenerLike<T> {
        init(DisposableMixin, instance);

        instance[SinkLike_notify] = notify;

        return instance;
      },
      props<TProperties>({
        [SinkLike_notify]: none,
      }),
      {
        [EventListenerLike_isErrorSafe]: false,
      },
    ),
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
