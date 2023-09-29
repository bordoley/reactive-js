import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Optional, partial, pipe } from "../../../functions.js";
import {
  EventListenerLike,
  EventListenerLike_isErrorSafe,
} from "../../../rx.js";
import type * as EventSource from "../../EventSource.js";
import Sink_skipFirstMixin from "../../Sink/__internal__/Sink.skipFirstMixin.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_skipFirst: EventSource.Signature["skipFirst"] =
  /*@__PURE__*/ (() => {
    const createSkipFirstEventListener: <T>(
      delegate: EventListenerLike<T>,
      count: Optional<number>,
    ) => EventListenerLike<T> = (<T>() =>
      createInstanceFactory(
        mix(
          include(Sink_skipFirstMixin()),
          function SkipFirstEventListener(
            instance: Pick<
              EventListenerLike<T>,
              typeof EventListenerLike_isErrorSafe
            >,
            delegate: EventListenerLike<T>,
            count: Optional<number>,
          ): EventListenerLike<T> {
            init(Sink_skipFirstMixin<T>(), instance, delegate, count);

            return instance;
          },
          props({}),
          {
            [EventListenerLike_isErrorSafe]: false,
          },
        ),
      ))();

    return <T>(options: { readonly count?: number } = {}) =>
      pipe(
        createSkipFirstEventListener<T>,
        partial(options.count),
        EventSource_lift,
      );
  })();

export default EventSource_skipFirst;
