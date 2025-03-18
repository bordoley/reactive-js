import { MAX_SAFE_INTEGER } from "../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../__internal__/mixins.js";
import {
  BroadcasterLike,
  ComputationModule,
  ComputationType,
  Computation_T,
  Computation_baseOfT,
  Computation_deferredWithSideEffectsOfT,
  Computation_pureDeferredOfT,
  DeferredProducerWithSideEffectsLike,
  EventSourceLike,
  ProducerLike,
  ProducerLike_consume,
  PureDeferredProducerLike,
  SequentialComputationModule,
  SequentialReactiveComputationModule,
  StatefulSynchronousComputationOperator,
} from "../computations.js";
import {
  Equality,
  Factory,
  Function1,
  Reducer,
  SideEffect1,
  bindMethod,
  newInstance,
  none,
  pipe,
  raise,
  returns,
} from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import DelegatingDisposableMixin from "../utils/__mixins__/DelegatingDisposableMixin.js";
import {
  BackPressureError,
  BackpressureStrategy,
  ConsumerLike,
  ConsumerLike_addOnReadyListener,
  ConsumerLike_backpressureStrategy,
  ConsumerLike_capacity,
  ConsumerLike_isReady,
  DisposableLike,
  EventListenerLike_notify,
  PauseableLike,
  SchedulerLike,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
  ThrowBackpressureStrategy,
} from "../utils.js";
import * as Broadcaster from "./Broadcaster.js";
import * as EventSource from "./EventSource.js";
import * as Observable from "./Observable.js";
import Producer_create from "./Producer/__private__/Producer.create.js";
import Producer_actionReducer from "./Producer/__private__/Producer.actionReducer.js";

/**
 * @noInheritDoc
 */
export interface ProducerComputation extends ComputationType {
  readonly [Computation_baseOfT]?: ProducerLike<this[typeof Computation_T]>;

  readonly [Computation_pureDeferredOfT]?: PureDeferredProducerLike<
    this[typeof Computation_T]
  >;
  readonly [Computation_deferredWithSideEffectsOfT]?: DeferredProducerWithSideEffectsLike<
    this[typeof Computation_T]
  >;
  /*
  readonly [Computation_pureSynchronousOfT]?: PureSynchronousProducerLike<
    this[typeof Computation_T]
  >;
  readonly [Computation_synchronousWithSideEffectsOfT]?: SynchronousProducerWithSideEffectsLike<
    this[typeof Computation_T]
  >;*/
}

export type Computation = ProducerComputation;

export interface ProducerModule
  extends ComputationModule<ProducerComputation>,
    SequentialComputationModule<ProducerComputation>,
    SequentialReactiveComputationModule<ProducerComputation> {
  actionReducer<TAction, T>(
    reducer: Reducer<TAction, T>,
    initialState: Factory<T>,
    options?: { readonly equality?: Equality<T> },
  ): StatefulSynchronousComputationOperator<ProducerComputation, TAction, T>;

  broadcast<T>(options?: {
    readonly autoDispose?: boolean;
    readonly replay?: number;
  }): Function1<
    ProducerLike<T>,
    PauseableLike & BroadcasterLike<T> & DisposableLike
  >;

  create<T>(
    f: SideEffect1<ConsumerLike<T>>,
  ): DeferredProducerWithSideEffectsLike<T>;
}

export type Signature = ProducerModule;

export const actionReducer: Signature["actionReducer"] =Producer_actionReducer;
export const create: Signature["create"] = Producer_create;

const createPauseableConsumer = /*@__PURE__*/ (<T>() => {
  const EventListenerToPauseableConsumer_delegate = Symbol(
    "EventListenerToPauseableConsumer_delegate",
  );

  const EventListenerToPauseableConsumer_mode = Symbol(
    "EventListenerToPauseableConsumer_mode",
  );

  type TProperties = {
    [EventListenerToPauseableConsumer_delegate]: SinkLike<T>;
    [SinkLike_isCompleted]: boolean;
    [ConsumerLike_isReady]: boolean;
    [EventListenerToPauseableConsumer_mode]: EventSourceLike<boolean>;
  };

  return mixInstanceFactory(
    include(DelegatingDisposableMixin),
    function EventListenerToPauseableConsumer(
      this: TProperties &
        Omit<ConsumerLike<T>, keyof DisposableLike | keyof SchedulerLike>,
      sink: SinkLike<T>,
      mode: EventSourceLike<boolean>,
    ): ConsumerLike<T> {
      init(DelegatingDisposableMixin, this, sink);

      this[EventListenerToPauseableConsumer_delegate] = sink;
      this[EventListenerToPauseableConsumer_mode] = mode;

      pipe(
        mode,
        EventSource.addEventHandler(isPaused => {
          this[ConsumerLike_isReady] = !isPaused;
        }),
        Disposable.addTo(this),
      );

      return this;
    },
    props<TProperties>({
      [EventListenerToPauseableConsumer_delegate]: none,
      [EventListenerToPauseableConsumer_mode]: none,
      [SinkLike_isCompleted]: false,
      [ConsumerLike_isReady]: false,
    }),
    proto({
      [ConsumerLike_backpressureStrategy]:
        ThrowBackpressureStrategy as BackpressureStrategy,

      [ConsumerLike_capacity]: MAX_SAFE_INTEGER,

      [ConsumerLike_addOnReadyListener](
        this: TProperties & ConsumerLike<T>,
        callback: SideEffect1<void>,
      ) {
        return pipe(
          this[EventListenerToPauseableConsumer_mode],
          EventSource.addEventHandler(isPaused => {
            if (!isPaused) {
              callback();
            }
          }),
          Disposable.addTo(this),
        );
      },

      [EventListenerLike_notify](this: TProperties & ConsumerLike<T>, next: T) {
        if (this[SinkLike_isCompleted]) {
          return;
        } else if (!this[ConsumerLike_isReady]) {
          raise(newInstance(BackPressureError, this));
        }

        this[EventListenerToPauseableConsumer_delegate][
          EventListenerLike_notify
        ](next);
      },
      [SinkLike_complete](this: TProperties & ConsumerLike<T>) {
        this[SinkLike_isCompleted] = true;
        const delegate = this[EventListenerToPauseableConsumer_delegate];
        delegate[SinkLike_complete]();
      },
    }),
  );
})();

export const broadcast: Signature["broadcast"] =
  <T>(options?: { readonly autoDispose?: boolean; readonly replay?: number }) =>
  (producer: ProducerLike<T>) =>
    Broadcaster.createPauseable<T>(mode =>
      pipe(
        Broadcaster.create<T>(sink => {
          const consumer = createPauseableConsumer(sink, mode);
          producer[ProducerLike_consume](consumer);
        }, options),
        Disposable.bindTo(mode),
      ),
    );

export const toObservable: Signature["toObservable"] = /*@__PURE__*/ returns(
  (producer: ProducerLike) =>
    Observable.create(bindMethod(producer, ProducerLike_consume)),
) as Signature["toObservable"];
