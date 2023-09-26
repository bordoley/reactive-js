import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { SideEffect1, none } from "../../../functions.js";
import {
  EventListenerLike,
  EventListenerLike_isErrorSafe,
  EventSourceLike,
  EventSourceLike_addEventListener,
  SinkLike_notify,
} from "../../../rx.js";
import Disposable_mixin from "../../../utils/Disposable/__internal__/Disposable.mixin.js";
import type * as EventSource from "../../EventSource.js";

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

        instance[SinkLike_notify] = notify;
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

const EventSource_addEventHandler: EventSource.Signature["addEventHandler"] =
  <T>(handler: SideEffect1<T>) =>
  (source: EventSourceLike<T>) => {
    const eventListener = EventListener_createInternal<T>(handler, false);
    source[EventSourceLike_addEventListener](eventListener);
    return eventListener;
  };

export default EventSource_addEventHandler;
