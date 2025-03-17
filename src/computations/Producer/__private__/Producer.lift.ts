import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isSynchronous,
  ProducerLike,
  ProducerLike_addEventListener,
  StatelessComputationOperator,
} from "../../../computations.js";
import { Function1, bindMethod, none, pipeUnsafe } from "../../../functions.js";
import DelegatingDisposableContainerMixin from "../../../utils/__mixins__/DelegatingDisposableContainerMixin.js";
import { EventListenerLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";

const LiftedProducer_source = Symbol("LiftedProducer_source");
const LiftedProducer_operators = Symbol("LiftedProducer_operators");

const createLiftedProducer: <TIn, TOut>(
  source: ProducerLike<TIn>,
  ops: readonly Function1<EventListenerLike<any>, EventListenerLike<any>>[],
) => ProducerLike<TOut> = /*@__PURE__*/ (<TIn, TOut>() => {
  type TProperties = {
    [LiftedProducer_source]: ProducerLike<TIn>;
    [LiftedProducer_operators]: readonly Function1<
      EventListenerLike<any>,
      EventListenerLike<any>
    >[];
  };
  return mixInstanceFactory(
    include(DelegatingDisposableContainerMixin),
    function LiftedProducer(
      this: TProperties &
        Pick<
          ProducerLike,
          | typeof ProducerLike_addEventListener
          | typeof ComputationLike_isSynchronous
          | typeof ComputationLike_isDeferred
        >,
      source: ProducerLike<TIn>,
      ops: readonly Function1<EventListenerLike<any>, EventListenerLike<any>>[],
    ) {
      this[LiftedProducer_source] = source;
      this[LiftedProducer_operators] = ops;

      init(DelegatingDisposableContainerMixin, this, source);

      return this;
    },
    props<TProperties>({
      [LiftedProducer_source]: none,
      [LiftedProducer_operators]: none,
    }),
    {
      [ComputationLike_isDeferred]: false as const,
      [ComputationLike_isSynchronous]: false as const,

      [ProducerLike_addEventListener](
        this: TProperties,
        listener: EventListenerLike<TOut>,
      ) {
        pipeUnsafe(
          listener,
          ...this[LiftedProducer_operators],
          bindMethod(
            this[LiftedProducer_source],
            ProducerLike_addEventListener,
          ),
        );
      },
    },
  );
})();

interface ProducerLift {
  lift<TA, TB>(
    operator: Function1<EventListenerLike<TB>, EventListenerLike<TA>>,
  ): StatelessComputationOperator<Producer.Computation, TA, TB>;
}

const Producer_lift: ProducerLift["lift"] = (<TA, TB>(
    operator: Function1<EventListenerLike<TB>, EventListenerLike<TA>>,
  ): Function1<ProducerLike<TA>, ProducerLike<TB>> =>
  (source: ProducerLike<TA>) => {
    const sourceSource = (source as any)[LiftedProducer_source] ?? source;
    const allFunctions = [
      operator,
      ...((source as any)[LiftedProducer_operators] ?? []),
    ];

    return createLiftedProducer<TA, TB>(sourceSource, allFunctions);
  }) as ProducerLift["lift"];

export default Producer_lift;
