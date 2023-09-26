import { clampPositiveInteger } from "../../../__internal__/math.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import {
  EventListenerLike,
  EventListenerLike_isErrorSafe,
} from "../../../rx.js";
import type * as EventSource from "../../EventSource.js";
import Sink_takeFirstMixin from "../../Sink/__internal__/Sink.takeFirstMixin.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_takeFirst: EventSource.Signature["takeFirst"] =
  /*@__PURE__*/ (() => {
    const createTakeFirstEventListener: <T>(
      delegate: EventListenerLike<T>,
      count: number,
    ) => EventListenerLike<T> = (<T>() =>
      createInstanceFactory(
        mix(
          include(Sink_takeFirstMixin()),
          function TakeFirstEventListener(
            instance: Pick<
              EventListenerLike<T>,
              typeof EventListenerLike_isErrorSafe
            >,
            delegate: EventListenerLike<T>,
            count: number,
          ): EventListenerLike<T> {
            init(Sink_takeFirstMixin<T>(), instance, delegate, count);

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
        createTakeFirstEventListener<T>,
        partial(count),
        EventSource_lift,
      );
    };
  })();

export default EventSource_takeFirst;
