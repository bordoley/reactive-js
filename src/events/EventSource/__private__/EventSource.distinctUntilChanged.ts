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
import { Equality, partial, pipe, strictEquality } from "../../../functions.js";
import type * as EventSource from "../../EventSource.js";
import DistinctUntilChangedSinkMixin from "../../__mixins__/DistinctUntilChangedSinkMixin.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_distinctUntilChanged: EventSource.Signature["distinctUntilChanged"] =
  /*@__PURE__*/ (() => {
    const createDistinctUntilChangedEventListener: <T>(
      delegate: EventListenerLike<T>,
      equality: Equality<T>,
    ) => EventListenerLike<T> = (<T>() =>
      createInstanceFactory(
        mix(
          include(DistinctUntilChangedSinkMixin()),
          function distinctUntilChangedEventListener(
            instance: Pick<
              EventListenerLike<T>,
              typeof EventListenerLike_isErrorSafe
            >,
            delegate: EventListenerLike<T>,
            equality: Equality<T>,
          ): EventListenerLike<T> {
            init(
              DistinctUntilChangedSinkMixin<T>(),
              instance,
              delegate,
              equality,
            );

            return instance;
          },
          props({}),
          {
            [EventListenerLike_isErrorSafe]: false,
          },
        ),
      ))();

    return <T>(options: { equality?: Equality<T> } = {}) => {
      const { equality = strictEquality } = options;

      return pipe(
        createDistinctUntilChangedEventListener<T>,
        partial(equality),
        EventSource_lift,
      );
    };
  })();

export default EventSource_distinctUntilChanged;
