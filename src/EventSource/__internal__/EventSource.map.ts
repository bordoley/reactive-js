import type * as EventSource from "../../EventSource.js";
import Sink_mapMixin from "../../Sink/__internal__/Sink.mapMixin.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { Function1, partial, pipe } from "../../functions.js";
import {
  EventListenerLike,
  EventListenerLike_isErrorSafe,
} from "../../types.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_map: EventSource.Signature["map"] = /*@__PURE__*/ (() => {
  const createMapEventListener: <TA, TB>(
    delegate: EventListenerLike<TB>,
    predicate: Function1<TA, TB>,
  ) => EventListenerLike<TA> = (<TA, TB>() =>
    createInstanceFactory(
      mix(
        include(Sink_mapMixin()),
        function MapEventListener(
          instance: Pick<
            EventListenerLike<TA>,
            typeof EventListenerLike_isErrorSafe
          >,
          delegate: EventListenerLike<TB>,
          selector: Function1<TA, TB>,
        ): EventListenerLike<TA> {
          init(Sink_mapMixin<TA, TB>(), instance, delegate, selector);

          return instance;
        },
        props({}),
        {
          [EventListenerLike_isErrorSafe]: false,
        },
      ),
    ))();

  return <TA, TB>(selector: Function1<TA, TB>) =>
    pipe(createMapEventListener, partial(selector), EventSource_lift);
})();

export default EventSource_map;
