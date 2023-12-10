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
import { Factory, Reducer, partial, pipe } from "../../../functions.js";
import type * as EventSource from "../../EventSource.js";
import ScanSinkMixin from "../../__mixins__/ScanSinkMixin.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_scan: EventSource.Signature["scan"] = /*@__PURE__*/ (() => {
  const createScanEventListener: <T, TAcc>(
    delegate: EventListenerLike<TAcc>,
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ) => EventListenerLike<T> = (<T, TAcc>() =>
    createInstanceFactory(
      mix(
        include(ScanSinkMixin()),
        function ScanEventListener(
          instance: Pick<
            EventListenerLike<T>,
            typeof EventListenerLike_isErrorSafe
          >,
          delegate: EventListenerLike<TAcc>,
          reducer: Reducer<T, TAcc>,
          initialValue: Factory<TAcc>,
        ): EventListenerLike<T> {
          init(
            ScanSinkMixin<T, TAcc>(),
            instance,
            delegate,
            reducer,
            initialValue,
          );

          return instance;
        },
        props({}),
        {
          [EventListenerLike_isErrorSafe]: false,
        },
      ),
    ))();

  return <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
    pipe(
      createScanEventListener<T, TAcc>,
      partial(reducer, initialValue),
      EventSource_lift,
    );
})();

export default EventSource_scan;
