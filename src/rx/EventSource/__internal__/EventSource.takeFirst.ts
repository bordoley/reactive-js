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
import TakeFirstSinkMixin from "../../__mixins__/TakeFirstSinkMixin.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_takeFirst: EventSource.Signature["takeFirst"] =
  /*@__PURE__*/ (() => {
    const createTakeFirstEventListener: <T>(
      delegate: EventListenerLike<T>,
      count: Optional<number>,
    ) => EventListenerLike<T> = (<T>() =>
      createInstanceFactory(
        mix(
          include(TakeFirstSinkMixin()),
          function TakeFirstEventListener(
            instance: Pick<
              EventListenerLike<T>,
              typeof EventListenerLike_isErrorSafe
            >,
            delegate: EventListenerLike<T>,
            count: Optional<number>,
          ): EventListenerLike<T> {
            init(TakeFirstSinkMixin<T>(), instance, delegate, count);

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
        createTakeFirstEventListener<T>,
        partial(options.count),
        EventSource_lift,
      );
  })();

export default EventSource_takeFirst;
