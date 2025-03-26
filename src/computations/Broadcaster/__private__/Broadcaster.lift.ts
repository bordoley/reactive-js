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
  LiftedSinkLike,
  LiftedSourceLike,
  LiftedSourceLike_sink,
  LiftedSourceLike_source,
} from "../../__internal__/LiftedSource.js";
import LiftedSinkToEventListenerMixin from "../../__mixins__/LiftedSinkToEventListenerMixin.js";

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
  readonly [LiftedSourceLike_sink]: ReadonlyArray<
    Function1<
      LiftedSinkLike<EventListenerLike, any>,
      LiftedSinkLike<EventListenerLike, any>
    >
  >;

  [SourceLike_subscribe](listener: EventListenerLike<TOut>): void;
}

const sinkToEventListener: <T>(
  delegate: LiftedSinkLike<EventListenerLike, any>,
) => EventListenerLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedSinkToEventListenerMixin()),
    function OperatorToEventListener(
      this: unknown,
      operator: LiftedSinkLike<EventListenerLike, any>,
    ): EventListenerLike<T> {
      init(
        LiftedSinkToEventListenerMixin<EventListenerLike, T>(),
        this,
        operator,
      );

      return this;
    },
  ))();

const createLiftedBroadcaster: <TIn, TOut>(
  src: BroadcasterLike<TIn>,
  op: Function1<
    LiftedSinkLike<EventListenerLike, TOut>,
    LiftedSinkLike<EventListenerLike, TIn>
  >,
) => BroadcasterLike<TOut> = /*@__PURE__*/ (<TIn, TOut>() => {
  type TProperties = {
    [LiftedSourceLike_source]: BroadcasterLike<TIn>;
    [LiftedSourceLike_sink]: ReadonlyArray<
      Function1<
        LiftedSinkLike<EventListenerLike, any>,
        LiftedSinkLike<EventListenerLike, any>
      >
    >;
  };

  type TPrototype = Omit<
    LiftedBroadcasterLike<TIn, TOut>,
    | keyof DisposableContainerLike
    | typeof LiftedSourceLike_source
    | typeof LiftedSourceLike_sink
  >;

  return mixInstanceFactory(
    include(DelegatingDisposableContainerMixin()),
    function LiftedBroadcaster(
      this: TProperties & TPrototype,
      source: BroadcasterLike<TIn>,
      op: Function1<
        LiftedSinkLike<EventListenerLike, TOut>,
        LiftedSinkLike<EventListenerLike, TIn>
      >,
    ): BroadcasterLike<TOut> {
      init(DelegatingDisposableContainerMixin(), this, source);
      const liftedSource: BroadcasterLike<TIn> =
        (source as any)[LiftedSourceLike_source] ?? source;
      const ops = [op, ...((source as any)[LiftedSourceLike_sink] ?? [])];

      this[LiftedSourceLike_source] = liftedSource;
      this[LiftedSourceLike_sink] = ops;

      return this;
    },
    props<TProperties>({
      [LiftedSourceLike_source]: none,
      [LiftedSourceLike_sink]: none,
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
          ...this[LiftedSourceLike_sink],
          sinkToEventListener,
        );
        source[SourceLike_subscribe](destinationOp);
      },
    }),
  );
})();

const Broadcaster_lift =
  <TIn, TOut>(
    operator: Function1<
      LiftedSinkLike<EventListenerLike, TOut>,
      LiftedSinkLike<EventListenerLike, TIn>
    >,
  ) =>
  (source: BroadcasterLike<TIn>): BroadcasterLike<TOut> => {
    return createLiftedBroadcaster(source, operator);
  };

export default Broadcaster_lift;
