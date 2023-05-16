import type * as EventSource from "../../EventSource.js";
import Sink_forEachMixin from "../../Sink/__internal__/Sink.forEachMixin.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { SideEffect1, partial, pipe } from "../../functions.js";
import {
  EventListenerLike,
  EventListenerLike_isErrorSafe,
} from "../../types.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_forEach: EventSource.Signature["forEach"] =
  /*@__PURE__*/ (() => {
    const createForEachEventListener: <T>(
      delegate: EventListenerLike<T>,
      effect: SideEffect1<T>,
    ) => EventListenerLike<T> = (<T>() =>
      createInstanceFactory(
        mix(
          include(Sink_forEachMixin()),
          function ForEachEventListener(
            instance: Pick<
              EventListenerLike<T>,
              typeof EventListenerLike_isErrorSafe
            >,
            delegate: EventListenerLike<T>,
            effect: SideEffect1<T>,
          ): EventListenerLike<T> {
            init(Sink_forEachMixin(), instance, delegate, effect);

            return instance;
          },
          props({}),
          {
            [EventListenerLike_isErrorSafe]: false,
          },
        ),
      ))();

    return <T>(effect: SideEffect1<T>) =>
      pipe(createForEachEventListener, partial(effect), EventSource_lift);
  })() as EventSource.Signature["forEach"];

export default EventSource_forEach;
