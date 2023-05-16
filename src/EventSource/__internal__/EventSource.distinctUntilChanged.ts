import type * as EventSource from "../../EventSource.js";
import Sink_distinctUntilChangedMixin from "../../Sink/__internal__/Sink.distinctUntilChangedMixin.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { Equality, partial, pipe } from "../../functions.js";
import {
  EventListenerLike,
  EventListenerLike_isErrorSafe,
} from "../../types.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_distinctUntilChanged: EventSource.Signature["distinctUntilChanged"] =
  /*@__PURE__*/ (() => {
    const createdistinctUntilChangedEventListener: <T>(
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

    return <T>(equality: Equality<T>) =>
      pipe(
        createdistinctUntilChangedEventListener,
        partial(equality),
        EventSource_lift,
      );
  })() as EventSource.Signature["distinctUntilChanged"];

export default EventSource_distinctUntilChanged;
