import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  EventListenerLike,
  EventListenerLike_notify,
} from "../../../events.js";
import { Function1, none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin, {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
} from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_map: EventSource.Signature["map"] = /*@__PURE__*/ (() => {
  const MapEventListener_selector = Symbol("MapEventListener_selector");

  interface TProperties<TA, TB> {
    [MapEventListener_selector]: Function1<TA, TB>;
  }

  const createMapEventListener: <TA, TB>(
    delegate: EventListenerLike<TB>,
    predicate: Function1<TA, TB>,
  ) => EventListenerLike<TA> = (<TA, TB>() =>
    mixInstanceFactory(
      include(DelegatingDisposableMixin<EventListenerLike<TB>>()),
      function MapEventListener(
        instance: Pick<EventListenerLike<TA>, typeof EventListenerLike_notify> &
          TProperties<TA, TB>,
        delegate: EventListenerLike<TB>,
        selector: Function1<TA, TB>,
      ): EventListenerLike<TA> {
        init(
          DelegatingDisposableMixin<EventListenerLike<TB>>(),
          instance,
          delegate,
        );
        instance[MapEventListener_selector] = selector;

        return instance;
      },
      props<TProperties<TA, TB>>({
        [MapEventListener_selector]: none,
      }),
      {
        [EventListenerLike_notify](
          this: TProperties<TA, TB> &
            DelegatingDisposableLike<EventListenerLike<TB>> &
            EventListenerLike<TA>,
          next: TA,
        ) {
          const mapped = this[MapEventListener_selector](next);
          this[DelegatingDisposableLike_delegate][EventListenerLike_notify](
            mapped,
          );
        },
      },
    ))();

  return <TA, TB>(selector: Function1<TA, TB>) =>
    pipe(createMapEventListener<TA, TB>, partial(selector), EventSource_lift);
})();

export default EventSource_map;
