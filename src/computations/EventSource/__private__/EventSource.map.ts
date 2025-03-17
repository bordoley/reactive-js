import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import { Function1, none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import MapMixin from "../../../utils/__mixins__/EventListeners/MapMixin.js";
import LiftedEventListenerMixin from "../../../utils/__mixins__/LiftedEventListenerMixin.js";
import { EventListenerLike } from "../../../utils.js";

import type * as EventSource from "../../EventSource.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_map: EventSource.Signature["map"] = /*@__PURE__*/ (<
  TA,
  TB,
>() => {
  const createMapEventListener = mixInstanceFactory(
    include(DelegatingDisposableMixin, LiftedEventListenerMixin(), MapMixin()),
    function MapEventListener(
      this: unknown,
      delegate: EventListenerLike<TB>,
      selector: Function1<TA, TB>,
    ): EventListenerLike<TA> {
      init(DelegatingDisposableMixin, this, delegate);
      init(LiftedEventListenerMixin<TA, TB>(), this, delegate, none);
      init(MapMixin<TA, TB>(), this, selector);

      return this;
    },
  );

  return (selector: Function1<TA, TB>) =>
    pipe(createMapEventListener, partial(selector), EventSource_lift);
})();

export default EventSource_map;
