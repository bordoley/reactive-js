import type * as EventSource from "../../EventSource.js";
import Sink_skipFirstMixin from "../../Sink/__internal__/Sink.skipFirstMixin.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { partial, pipe } from "../../functions.js";
import {
  EventListenerLike,
  EventListenerLike_isErrorSafe,
} from "../../types.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_skipFirst: EventSource.Signature["skipFirst"] =
  /*@__PURE__*/ (() => {
    const createSkipFirstEventListener: <T>(
      delegate: EventListenerLike<T>,
      count: number,
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
            count: number,
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

    return <T>(options: { readonly count?: number } = {}) => {
      const count = clampPositiveInteger(options.count ?? 1);
      return pipe(
        createSkipFirstEventListener<T>,
        partial(count),
        EventSource_lift,
      );
    };
  })();

export default EventSource_skipFirst;
