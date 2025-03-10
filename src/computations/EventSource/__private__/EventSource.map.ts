import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import { Function1, none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { EventListenerLike, EventListenerLike_notify } from "../../../utils.js";

import type * as EventSource from "../../EventSource.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_map: EventSource.Signature["map"] = /*@__PURE__*/ (() => {
  const MapEventListener_selector = Symbol("MapEventListener_selector");
  const MapEventListener_delegate = Symbol("MapEventListener_delegate");

  interface TProperties<TA, TB> {
    [MapEventListener_selector]: Function1<TA, TB>;
    [MapEventListener_delegate]: EventListenerLike<TB>;
  }

  const createMapEventListener: <TA, TB>(
    delegate: EventListenerLike<TB>,
    predicate: Function1<TA, TB>,
  ) => EventListenerLike<TA> = (<TA, TB>() =>
    mixInstanceFactory(
      include(DelegatingDisposableMixin),
      function MapEventListener(
        this: Pick<EventListenerLike<TA>, typeof EventListenerLike_notify> &
          TProperties<TA, TB>,
        delegate: EventListenerLike<TB>,
        selector: Function1<TA, TB>,
      ): EventListenerLike<TA> {
        init(DelegatingDisposableMixin, this, delegate);
        this[MapEventListener_selector] = selector;
        this[MapEventListener_delegate] = delegate;

        return this;
      },
      props<TProperties<TA, TB>>({
        [MapEventListener_selector]: none,
        [MapEventListener_delegate]: none,
      }),
      {
        [EventListenerLike_notify](
          this: TProperties<TA, TB> & EventListenerLike<TA>,
          next: TA,
        ) {
          const mapped = this[MapEventListener_selector](next);
          this[MapEventListener_delegate][EventListenerLike_notify](mapped);
        },
      },
    ))();

  return <TA, TB>(selector: Function1<TA, TB>) =>
    pipe(createMapEventListener<TA, TB>, partial(selector), EventSource_lift);
})();

export default EventSource_map;
