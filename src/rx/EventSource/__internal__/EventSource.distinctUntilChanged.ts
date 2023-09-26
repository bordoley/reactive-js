import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Equality, partial, pipe, strictEquality } from "../../../functions.js";
import {
  EventListenerLike,
  EventListenerLike_isErrorSafe,
} from "../../../rx.js";
import type * as EventSource from "../../EventSource.js";
import Sink_distinctUntilChangedMixin from "../../Sink/__internal__/Sink.distinctUntilChangedMixin.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_distinctUntilChanged: EventSource.Signature["distinctUntilChanged"] =
  /*@__PURE__*/ (() => {
    const createDistinctUntilChangedEventListener: <T>(
      delegate: EventListenerLike<T>,
      equality: Equality<T>,
    ) => EventListenerLike<T> = (<T>() =>
      createInstanceFactory(
        mix(
          include(Sink_distinctUntilChangedMixin()),
          function distinctUntilChangedEventListener(
            instance: Pick<
              EventListenerLike<T>,
              typeof EventListenerLike_isErrorSafe
            >,
            delegate: EventListenerLike<T>,
            equality: Equality<T>,
          ): EventListenerLike<T> {
            init(
              Sink_distinctUntilChangedMixin<T>(),
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
      const { equality = strictEquality } = options ?? {};

      return pipe(
        createDistinctUntilChangedEventListener<T>,
        partial(equality),
        EventSource_lift,
      );
    };
  })();

export default EventSource_distinctUntilChanged;
