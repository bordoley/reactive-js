import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Optional, Predicate, partial, pipe } from "../../../functions.js";
import {
  EventListenerLike,
  EventListenerLike_isErrorSafe,
} from "../../../rx.js";
import type * as EventSource from "../../EventSource.js";
import TakeWhileSinkMixin from "../../__mixins__/TakeWhileSinkMixin.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_takeWhile: EventSource.Signature["takeWhile"] =
  /*@__PURE__*/ (() => {
    const createTakeWhileEventListener: <T>(
      delegate: EventListenerLike<T>,
      predicate: Predicate<T>,
      inclusive: Optional<boolean>,
    ) => EventListenerLike<T> = (<T>() =>
      createInstanceFactory(
        mix(
          include(TakeWhileSinkMixin()),
          function TakeWhileEventListener(
            instance: Pick<
              EventListenerLike<T>,
              typeof EventListenerLike_isErrorSafe
            >,
            delegate: EventListenerLike<T>,
            predicate: Predicate<T>,
            inclusive: Optional<boolean>,
          ): EventListenerLike<T> {
            init(
              TakeWhileSinkMixin<T>(),
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
    ) =>
      pipe(
        createTakeWhileEventListener<T>,
        partial(predicate, options.inclusive),
        EventSource_lift,
      );
  })();

export default EventSource_takeWhile;
