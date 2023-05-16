import type * as EventSource from "../../EventSource.js";
import Sink_scanMixin from "../../Sink/__internal__/Sink.scanMixin.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { Factory, Reducer, partial, pipe } from "../../functions.js";
import {
  EventListenerLike,
  EventListenerLike_isErrorSafe,
} from "../../types.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_scan: EventSource.Signature["scan"] = /*@__PURE__*/ (() => {
  const createScanEventListener: <T, TAcc>(
    delegate: EventListenerLike<TAcc>,
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ) => EventListenerLike<T> = (<T, TAcc>() =>
    createInstanceFactory(
      mix(
        include(Sink_scanMixin()),
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
            Sink_scanMixin<T, TAcc>(),
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
