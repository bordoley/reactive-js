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
  ReactiveSourceLike_subscribe,
} from "../../../computations.js";
import { Function1, none, pipeUnsafe } from "../../../functions.js";
import * as EventListener from "../../../utils/__internal__/EventListener.js";
import { Sink_toLiftedSink } from "../../../utils/__internal__/Sink/__private__/Sink.toLiftedSink.js";
import DelegatingDisposableContainerMixin from "../../../utils/__mixins__/DelegatingDisposableContainerMixin.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import {
  DisposableContainerLike,
  EventListenerLike,
  SinkLike,
} from "../../../utils.js";
import {
  LiftedReactiveSourceLike,
  LiftedReactiveSourceLike_sink,
  LiftedReactiveSourceLike_source,
  LiftedSinkLike,
} from "../../__internal__/LiftedSource.js";
import LiftedSinkToEventListenerMixin from "../../__mixins__/LiftedSinkToEventListenerMixin.js";

interface LiftedBroadcasterLike<TIn, TOut>
  extends LiftedReactiveSourceLike<
      TIn,
      TOut,
      SinkLike<TIn>,
      SinkLike<TOut>,
      BroadcasterLike<TIn>
    >,
    BroadcasterLike<TOut> {
  readonly [ComputationLike_isDeferred]: false;
  readonly [ComputationLike_isPure]: true;
  readonly [ComputationLike_isSynchronous]: false;

  readonly [LiftedReactiveSourceLike_source]: BroadcasterLike<TIn>;
  readonly [LiftedReactiveSourceLike_sink]: ReadonlyArray<
    Function1<LiftedSinkLike<SinkLike, any>, LiftedSinkLike<SinkLike, any>>
  >;

  [ReactiveSourceLike_subscribe](listener: EventListenerLike<TOut>): void;
}

const sinkToEventListener: <T>(
  delegate: LiftedSinkLike<SinkLike, any>,
) => EventListenerLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedSinkToEventListenerMixin(), DelegatingDisposableMixin),
    function OperatorToEventListener(
      this: unknown,
      liftedSink: LiftedSinkLike<SinkLike, any>,
    ): EventListenerLike<T> {
      init(LiftedSinkToEventListenerMixin<SinkLike, T>(), this, liftedSink);
      init(DelegatingDisposableMixin, this, liftedSink);

      return this;
    },
  ))();

const createLiftedBroadcaster: <TIn, TOut>(
  src: BroadcasterLike<TIn>,
  op: Function1<LiftedSinkLike<SinkLike, TOut>, LiftedSinkLike<SinkLike, TIn>>,
) => BroadcasterLike<TOut> = /*@__PURE__*/ (<TIn, TOut>() => {
  type TProperties = {
    [LiftedReactiveSourceLike_source]: BroadcasterLike<TIn>;
    [LiftedReactiveSourceLike_sink]: ReadonlyArray<
      Function1<LiftedSinkLike<SinkLike, any>, LiftedSinkLike<SinkLike, any>>
    >;
  };

  type TPrototype = Omit<
    LiftedBroadcasterLike<TIn, TOut>,
    | keyof DisposableContainerLike
    | typeof LiftedReactiveSourceLike_source
    | typeof LiftedReactiveSourceLike_sink
  >;

  return mixInstanceFactory(
    include(DelegatingDisposableContainerMixin()),
    function LiftedBroadcaster(
      this: TProperties & TPrototype,
      source: BroadcasterLike<TIn>,
      op: Function1<
        LiftedSinkLike<SinkLike, TOut>,
        LiftedSinkLike<SinkLike, TIn>
      >,
    ): BroadcasterLike<TOut> {
      init(DelegatingDisposableContainerMixin(), this, source);
      const liftedSource: BroadcasterLike<TIn> =
        (source as any)[LiftedReactiveSourceLike_source] ?? source;
      const ops = [
        op,
        ...((source as any)[LiftedReactiveSourceLike_sink] ?? []),
      ];

      this[LiftedReactiveSourceLike_source] = liftedSource;
      this[LiftedReactiveSourceLike_sink] = ops;

      return this;
    },
    props<TProperties>({
      [LiftedReactiveSourceLike_source]: none,
      [LiftedReactiveSourceLike_sink]: none,
    }),
    proto<TPrototype>({
      [ComputationLike_isPure]: true as const,
      [ComputationLike_isDeferred]: false as const,
      [ComputationLike_isSynchronous]: false as const,

      [ReactiveSourceLike_subscribe](
        this: TProperties,
        listener: EventListenerLike<TOut>,
      ) {
        const source = this[LiftedReactiveSourceLike_source];
        const destinationOp: EventListenerLike<TIn> = pipeUnsafe(
          listener,
          EventListener.toSink(),
          Sink_toLiftedSink(),
          ...this[LiftedReactiveSourceLike_sink],
          sinkToEventListener,
        );
        source[ReactiveSourceLike_subscribe](destinationOp);
      },
    }),
  );
})();

const Broadcaster_lift =
  <TIn, TOut>(
    operator: Function1<
      LiftedSinkLike<SinkLike, TOut>,
      LiftedSinkLike<SinkLike, TIn>
    >,
  ) =>
  (source: BroadcasterLike<TIn>): BroadcasterLike<TOut> => {
    return createLiftedBroadcaster(source, operator);
  };

export default Broadcaster_lift;
