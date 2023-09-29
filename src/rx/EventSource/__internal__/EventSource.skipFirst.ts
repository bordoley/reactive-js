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
import SkipFirstSinkMixin from "../../__mixins__/SkipFirstSinkMixin.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_skipFirst: EventSource.Signature["skipFirst"] =
  /*@__PURE__*/ (() => {
    const createSkipFirstEventListener: <T>(
      delegate: EventListenerLike<T>,
      count: Optional<number>,
    ) => EventListenerLike<T> = (<T>() =>
      createInstanceFactory(
        mix(
          include(SkipFirstSinkMixin()),
          function SkipFirstEventListener(
            instance: Pick<
              EventListenerLike<T>,
              typeof EventListenerLike_isErrorSafe
            >,
            delegate: EventListenerLike<T>,
            count: Optional<number>,
          ): EventListenerLike<T> {
            init(SkipFirstSinkMixin<T>(), instance, delegate, count);

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
