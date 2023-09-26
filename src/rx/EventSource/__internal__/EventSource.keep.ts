import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Predicate, partial, pipe } from "../../../functions.js";
import {
  EventListenerLike,
  EventListenerLike_isErrorSafe,
} from "../../../rx.js";
import type * as EventSource from "../../EventSource.js";
import Sink_keepMixin from "../../Sink/__internal__/Sink.keepMixin.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_keep: EventSource.Signature["keep"] = /*@__PURE__*/ (() => {
  const createKeepEventListener: <T>(
    delegate: EventListenerLike<T>,
    predicate: Predicate<T>,
  ) => EventListenerLike<T> = (<T>() =>
    createInstanceFactory(
      mix(
        include(Sink_keepMixin()),
        function KeepEventListener(
          instance: Pick<
            EventListenerLike<T>,
            typeof EventListenerLike_isErrorSafe
          >,
          delegate: EventListenerLike<T>,
          predicate: Predicate<T>,
        ): EventListenerLike<T> {
          init(Sink_keepMixin<T>(), instance, delegate, predicate);

          return instance;
        },
        props({}),
        {
          [EventListenerLike_isErrorSafe]: false,
        },
      ),
    ))();

  return <T>(predicate: Predicate<T>) =>
    pipe(createKeepEventListener, partial(predicate), EventSource_lift);
})();

export default EventSource_keep;
