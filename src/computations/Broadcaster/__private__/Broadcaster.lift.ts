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
  EventSourceLike_subscribe,
} from "../../../computations.js";
import { Function1, none, pipeUnsafe } from "../../../functions.js";
import * as EventListener from "../../../utils/__internal__/EventListener.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import DelegatingDisposableContainerMixin from "../../../utils/__mixins__/DelegatingDisposableContainerMixin.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import {
  DisposableContainerLike,
  EventListenerLike,
  SinkLike,
} from "../../../utils.js";
import {
  LiftedEventSourceLike,
  LiftedEventSourceLike_sink,
  LiftedEventSourceLike_source,
  LiftedSinkLike,
} from "../../__internal__/LiftedSource.js";
import LiftedSinkToEventListenerMixin from "../../__mixins__/LiftedSinkToEventListenerMixin.js";

interface LiftedBroadcasterLike<TIn, TOut>
  extends LiftedEventSourceLike<
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

  readonly [LiftedEventSourceLike_source]: BroadcasterLike<TIn>;
  readonly [LiftedEventSourceLike_sink]: ReadonlyArray<
    Function1<LiftedSinkLike<SinkLike, any>, LiftedSinkLike<SinkLike, any>>
  >;

  [EventSourceLike_subscribe](listener: EventListenerLike<TOut>): void;
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
    [LiftedEventSourceLike_source]: BroadcasterLike<TIn>;
    [LiftedEventSourceLike_sink]: ReadonlyArray<
      Function1<LiftedSinkLike<SinkLike, any>, LiftedSinkLike<SinkLike, any>>
    >;
  };

  type TPrototype = Omit<
    LiftedBroadcasterLike<TIn, TOut>,
    | keyof DisposableContainerLike
    | typeof LiftedEventSourceLike_source
    | typeof LiftedEventSourceLike_sink
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
        (source as any)[LiftedEventSourceLike_source] ?? source;
      const ops = [op, ...((source as any)[LiftedEventSourceLike_sink] ?? [])];

      this[LiftedEventSourceLike_source] = liftedSource;
      this[LiftedEventSourceLike_sink] = ops;

      return this;
    },
    props<TProperties>({
      [LiftedEventSourceLike_source]: none,
      [LiftedEventSourceLike_sink]: none,
    }),
    proto<TPrototype>({
      [ComputationLike_isPure]: true as const,
      [ComputationLike_isDeferred]: false as const,
      [ComputationLike_isSynchronous]: false as const,

      [EventSourceLike_subscribe](
        this: TProperties,
        listener: EventListenerLike<TOut>,
      ) {
        const source = this[LiftedEventSourceLike_source];
        const destinationOp: EventListenerLike<TIn> = pipeUnsafe(
          listener,
          EventListener.toSink(),
          Sink.toLiftedSink(),
          ...this[LiftedEventSourceLike_sink],
          sinkToEventListener,
        );
        source[EventSourceLike_subscribe](destinationOp);
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
