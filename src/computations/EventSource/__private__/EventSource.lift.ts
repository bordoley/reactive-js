import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isSynchronous,
  EventListenerLike,
  EventSourceLike,
  EventSourceLike_addEventListener,
  StatelessComputationOperator,
} from "../../../computations.js";
import { Function1, bindMethod, none, pipeUnsafe } from "../../../functions.js";
import DelegatingDisposableContainerMixin from "../../../utils/__mixins__/DelegatingDisposableContainerMixin.js";
import type * as EventSource from "../../EventSource.js";

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
  return mixInstanceFactory(
    include(DelegatingDisposableContainerMixin),
    function LiftedEventSource(
      instance: TProperties &
        Pick<
          EventSourceLike,
          | typeof EventSourceLike_addEventListener
          | typeof ComputationLike_isSynchronous
          | typeof ComputationLike_isDeferred
        >,
      source: EventSourceLike<TIn>,
      ops: readonly Function1<EventListenerLike<any>, EventListenerLike<any>>[],
    ) {
      instance[LiftedEventSource_source] = source;
      instance[LiftedEventSource_operators] = ops;

      init(DelegatingDisposableContainerMixin, instance, source);

      return instance;
    },
    props<TProperties>({
      [LiftedEventSource_source]: none,
      [LiftedEventSource_operators]: none,
    }),
    {
      [ComputationLike_isDeferred]: false as const,
      [ComputationLike_isSynchronous]: false as const,

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
  );
})();

interface EventSourceLift {
  lift<TA, TB>(
    operator: Function1<EventListenerLike<TB>, EventListenerLike<TA>>,
  ): StatelessComputationOperator<EventSource.Computation, TA, TB>;
}

const EventSource_lift: EventSourceLift["lift"] = (<TA, TB>(
    operator: Function1<EventListenerLike<TB>, EventListenerLike<TA>>,
  ): Function1<EventSourceLike<TA>, EventSourceLike<TB>> =>
  (source: EventSourceLike<TA>) => {
    const sourceSource = (source as any)[LiftedEventSource_source] ?? source;
    const allFunctions = [
      operator,
      ...((source as any)[LiftedEventSource_operators] ?? []),
    ];

    return createLiftedEventSource<TA, TB>(sourceSource, allFunctions);
  }) as EventSourceLift["lift"];

export default EventSource_lift;
