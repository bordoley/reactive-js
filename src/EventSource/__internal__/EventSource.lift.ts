import {
  createInstanceFactory,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  LiftedLike_operators,
  LiftedLike_source,
} from "../../__internal__/types.js";
import { Function1, bindMethod, none, pipeUnsafe } from "../../functions.js";
import {
  EventListenerLike,
  EventSourceLike,
  EventSourceLike_addEventListener,
} from "../../types.js";

const createLiftedEventSource: <TIn, TOut>(
  source: EventSourceLike<TIn>,
  ops: readonly Function1<EventListenerLike<any>, EventListenerLike<any>>[],
) => EventSourceLike<TOut> = /*@__PURE__*/ (<TIn, TOut>() => {
  type TProperties = {
    [LiftedLike_source]: EventSourceLike<TIn>;
    [LiftedLike_operators]: readonly Function1<
      EventListenerLike<any>,
      EventListenerLike<any>
    >[];
  };
  return createInstanceFactory(
    mix(
      function LiftedEventSource(
        instance: TProperties &
          Pick<EventSourceLike, typeof EventSourceLike_addEventListener>,
        source: EventSourceLike<TIn>,
        ops: readonly Function1<
          EventListenerLike<any>,
          EventListenerLike<any>
        >[],
      ) {
        instance[LiftedLike_source] = source;
        instance[LiftedLike_operators] = ops;

        return instance;
      },
      props<TProperties>({
        [LiftedLike_source]: none,
        [LiftedLike_operators]: none,
      }),
      {
        [EventSourceLike_addEventListener](
          this: TProperties,
          listener: EventListenerLike<TOut>,
        ) {
          pipeUnsafe(
            listener,
            ...this[LiftedLike_operators],
            bindMethod(
              this[LiftedLike_source],
              EventSourceLike_addEventListener,
            ),
          );
        },
      },
    ),
  );
})();

const EventSource_lift =
  <TA, TB>(
    operator: Function1<EventListenerLike<TB>, EventListenerLike<TA>>,
  ): Function1<EventSourceLike<TA>, EventSourceLike<TB>> =>
  (source: EventSourceLike<TA>) => {
    const sourceSource = (source as any)[LiftedLike_source] ?? source;
    const allFunctions = [
      operator,
      ...((source as any)[LiftedLike_operators] ?? []),
    ];

    return createLiftedEventSource<TA, TB>(sourceSource, allFunctions);
  };

export default EventSource_lift;
