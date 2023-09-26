import {
  createInstanceFactory,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Function1, bindMethod, none, pipeUnsafe } from "../../../functions.js";
import {
  EventListenerLike,
  EventSourceLike,
  EventSourceLike_addEventListener,
} from "../../../rx.js";

const LiftedEventSource_source = Symbol("LiftedEventSource_source");
const LiftedEventSource_operators = Symbol("LiftedEventSource_operators");

const createLiftedEventSource: <TIn, TOut>(
  source: EventSourceLike<TIn>,
  ops: readonly Function1<EventListenerLike<any>, EventListenerLike<any>>[],
) => EventSourceLike<TOut> = /*@__PURE__*/ (<TIn, TOut>() => {
  type TProperties = {
    [LiftedEventSource_source]: EventSourceLike<TIn>;
    [LiftedEventSource_operators]: readonly Function1<
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
        instance[LiftedEventSource_source] = source;
        instance[LiftedEventSource_operators] = ops;

        return instance;
      },
      props<TProperties>({
        [LiftedEventSource_source]: none,
        [LiftedEventSource_operators]: none,
      }),
      {
        [EventSourceLike_addEventListener](
          this: TProperties,
          listener: EventListenerLike<TOut>,
        ) {
          pipeUnsafe(
            listener,
            ...this[LiftedEventSource_operators],
            bindMethod(
              this[LiftedEventSource_source],
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
    const sourceSource = (source as any)[LiftedEventSource_source] ?? source;
    const allFunctions = [
      operator,
      ...((source as any)[LiftedEventSource_operators] ?? []),
    ];

    return createLiftedEventSource<TA, TB>(sourceSource, allFunctions);
  };

export default EventSource_lift;
