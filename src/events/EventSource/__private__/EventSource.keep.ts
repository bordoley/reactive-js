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
import { Predicate, partial, pipe } from "../../../functions.js";
import type * as EventSource from "../../EventSource.js";
import KeepSinkMixin from "../../__mixins__/KeepSinkMixin.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_keep: EventSource.Signature["keep"] = /*@__PURE__*/ (() => {
  const createKeepEventListener: <T>(
    delegate: EventListenerLike<T>,
    predicate: Predicate<T>,
  ) => EventListenerLike<T> = (<T>() =>
    createInstanceFactory(
      mix(
        include(KeepSinkMixin()),
        function KeepEventListener(
          instance: Pick<
            EventListenerLike<T>,
            typeof EventListenerLike_isErrorSafe
          >,
          delegate: EventListenerLike<T>,
          predicate: Predicate<T>,
        ): EventListenerLike<T> {
          init(KeepSinkMixin<T>(), instance, delegate, predicate);

          return instance;
        },
        props(),
        {
          [EventListenerLike_isErrorSafe]: false,
        },
      ),
    ))();

  return <T>(predicate: Predicate<T>) =>
    pipe(createKeepEventListener, partial(predicate), EventSource_lift);
})();

export default EventSource_keep;
