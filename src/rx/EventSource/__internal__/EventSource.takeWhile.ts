import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Predicate, partial, pipe } from "../../../functions.js";
import {
  EventListenerLike,
  EventListenerLike_isErrorSafe,
} from "../../../rx.js";
import type * as EventSource from "../../EventSource.js";
import Sink_takeWhileMixin from "../../Sink/__internal__/Sink.takeWhileMixin.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_takeWhile: EventSource.Signature["takeWhile"] =
  /*@__PURE__*/ (() => {
    const createTakeWhileEventListener: <T>(
      delegate: EventListenerLike<T>,
      predicate: Predicate<T>,
      inclusive: boolean,
    ) => EventListenerLike<T> = (<T>() =>
      createInstanceFactory(
        mix(
          include(Sink_takeWhileMixin()),
          function TakeWhileEventListener(
            instance: Pick<
              EventListenerLike<T>,
              typeof EventListenerLike_isErrorSafe
            >,
            delegate: EventListenerLike<T>,
            predicate: Predicate<T>,
            inclusive: boolean,
          ): EventListenerLike<T> {
            init(
              Sink_takeWhileMixin<T>(),
              instance,
              delegate,
              predicate,
              inclusive,
            );

            return instance;
          },
          props({}),
          {
            [EventListenerLike_isErrorSafe]: false,
          },
        ),
      ))();

    return <T>(
      predicate: Predicate<T>,
      options: { readonly inclusive?: boolean } = {},
    ) => {
      const { inclusive = false } = options;
      return pipe(
        createTakeWhileEventListener<T>,
        partial(predicate, inclusive),
        EventSource_lift,
      );
    };
  })();

export default EventSource_takeWhile;
