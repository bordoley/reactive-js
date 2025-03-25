import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import {
  BroadcasterLike,
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  SourceLike_subscribe,
} from "../../../computations.js";
import { Function1, none, pipeUnsafe } from "../../../functions.js";
import * as EventListener from "../../../utils/__internal__/EventListener.js";
import DelegatingDisposableContainerMixin from "../../../utils/__mixins__/DelegatingDisposableContainerMixin.js";
import { DisposableContainerLike, EventListenerLike } from "../../../utils.js";
import {
  LiftedOperatorLike,
  LiftedSourceLike,
  LiftedSourceLike_operators,
  LiftedSourceLike_source,
} from "../../__internal__/LiftedSource.js";
import LiftedOperatorToEventListenerMixin from "../../__mixins__/LiftedOperatorToEventListenerMixin.js";

interface LiftedBroadcasterLike<TIn, TOut>
  extends LiftedSourceLike<
      TIn,
      TOut,
      EventListenerLike<TIn>,
      EventListenerLike<TOut>,
      BroadcasterLike<TIn>
    >,
    BroadcasterLike<TOut> {
  readonly [ComputationLike_isDeferred]: false;
  readonly [ComputationLike_isPure]?: true;
  readonly [ComputationLike_isSynchronous]: false;

  readonly [LiftedSourceLike_source]: BroadcasterLike<TIn>;
  readonly [LiftedSourceLike_operators]: ReadonlyArray<
    Function1<LiftedOperatorLike<any>, LiftedOperatorLike<any>>
  >;

  [SourceLike_subscribe](listener: EventListenerLike<TOut>): void;
}

const operatorToEventListener: <T>(
  delegate: EventListenerLike,
) => Function1<LiftedOperatorLike<any>, EventListenerLike<T>> = /*@__PURE__*/ (<
  T,
>() => {
  const createOperatorToEventListener = mixInstanceFactory(
    include(LiftedOperatorToEventListenerMixin()),
    function OperatorToEventListener(
      this: unknown,
      delegate: EventListenerLike,
      operator: LiftedOperatorLike<any>,
    ): EventListenerLike<T> {
      init(LiftedOperatorToEventListenerMixin(), this, operator, delegate);

      return this;
    },
  );

  return delegate => operator =>
    createOperatorToEventListener(delegate, operator);
})();

const createLiftedBroadcaster: <TIn, TOut>(
  src: BroadcasterLike<TIn>,
  op: Function1<LiftedOperatorLike<TOut>, LiftedOperatorLike<TIn>>,
) => BroadcasterLike<TOut> = /*@__PURE__*/ (<TIn, TOut>() => {
  type TProperties = {
    [LiftedSourceLike_source]: BroadcasterLike<TIn>;
    [LiftedSourceLike_operators]: ReadonlyArray<
      Function1<LiftedOperatorLike<any>, LiftedOperatorLike<any>>
    >;
  };

  type TPrototype = Omit<
    LiftedBroadcasterLike<TIn, TOut>,
    | keyof DisposableContainerLike
    | typeof LiftedSourceLike_source
    | typeof LiftedSourceLike_operators
  >;

  return mixInstanceFactory(
    include(DelegatingDisposableContainerMixin()),
    function LiftedBroadcaster(
      this: TProperties & TPrototype,
      source: BroadcasterLike<TIn>,
      op: Function1<LiftedOperatorLike<TOut>, LiftedOperatorLike<TIn>>,
    ): BroadcasterLike<TOut> {
      init(DelegatingDisposableContainerMixin(), this, source);
      const liftedSource: BroadcasterLike<TIn> =
        (source as any)[LiftedSourceLike_source] ?? source;
      const ops = [op, ...((source as any)[LiftedSourceLike_operators] ?? [])];

      this[LiftedSourceLike_source] = liftedSource;
      this[LiftedSourceLike_operators] = ops;

      return this;
    },
    props<TProperties>({
      [LiftedSourceLike_source]: none,
      [LiftedSourceLike_operators]: none,
    }),
    proto<TPrototype>({
      [ComputationLike_isPure]: true as const,
      [ComputationLike_isDeferred]: false as const,
      [ComputationLike_isSynchronous]: false as const,

      [SourceLike_subscribe](
        this: TProperties,
        listener: EventListenerLike<TOut>,
      ) {
        const source = this[LiftedSourceLike_source];
        const destinationOp: EventListenerLike<TIn> = pipeUnsafe(
          listener,
          EventListener.toOperator(),
          ...this[LiftedSourceLike_operators],
          operatorToEventListener(listener),
        );
        source[SourceLike_subscribe](destinationOp);
      },
    }),
  );
})();

const Broadcaster_lift =
  <TIn, TOut>(
    operator: Function1<LiftedOperatorLike<TOut>, LiftedOperatorLike<TIn>>,
  ) =>
  (source: BroadcasterLike<TIn>): BroadcasterLike<TOut> => {
    return createLiftedBroadcaster(source, operator);
  };

export default Broadcaster_lift;
