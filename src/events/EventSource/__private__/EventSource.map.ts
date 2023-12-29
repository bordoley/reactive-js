import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  EventListenerLike,
  EventListenerLike_isErrorSafe,
} from "../../../events.js";
import { Function1, partial, pipe } from "../../../functions.js";
import type * as EventSource from "../../EventSource.js";
import MapSinkMixin from "../../__mixins__/MapSinkMixin.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_map: EventSource.Signature["map"] = /*@__PURE__*/ (() => {
  const createMapEventListener: <TA, TB>(
    delegate: EventListenerLike<TB>,
    predicate: Function1<TA, TB>,
  ) => EventListenerLike<TA> = (<TA, TB>() =>
    createInstanceFactory(
      mix(
        include(MapSinkMixin()),
        function MapEventListener(
          instance: Pick<
            EventListenerLike<TA>,
            typeof EventListenerLike_isErrorSafe
          >,
          delegate: EventListenerLike<TB>,
          selector: Function1<TA, TB>,
        ): EventListenerLike<TA> {
          init(MapSinkMixin<TA, TB>(), instance, delegate, selector);

          return instance;
        },
        props(),
        {
          [EventListenerLike_isErrorSafe]: false,
        },
      ),
    ))();

  return <TA, TB>(selector: Function1<TA, TB>) =>
    pipe(createMapEventListener, partial(selector), EventSource_lift);
})();

export default EventSource_map;
