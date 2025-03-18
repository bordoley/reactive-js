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
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  EventSourceLike,
  ObservableLike,
  ProducerLike,
  ProducerLike_consume,
  ProducerWithSideEffectsLike,
} from "../computations.js";
import {
  Function1,
  SideEffect1,
  bindMethod,
  error,
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
  DisposableLike_dispose,
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

export interface ProducerModule {
  create<T>(
    f: (consumer: ConsumerLike<T>) => void,
  ): ProducerWithSideEffectsLike<T>;

  broadcast<T>(options?: {
    readonly autoDispose?: boolean;
    readonly replay?: number;
  }): Function1<
    ProducerLike<T>,
    PauseableLike & BroadcasterLike<T> & DisposableLike
  >;

  toObservable<T>(): Function1<ProducerLike<T>, ObservableLike<T>>;
}

export type Signature = ProducerModule;

class CreateProducer<T> implements ProducerWithSideEffectsLike<T> {
  [ComputationLike_isPure]: false = false as const;
  [ComputationLike_isSynchronous] = false;

  constructor(private readonly f: (consumer: ConsumerLike<T>) => void) {}

  [ProducerLike_consume](consumer: ConsumerLike<T>): void {
    try {
      this.f(consumer);
    } catch (e) {
      consumer[DisposableLike_dispose](error(e));
    }
  }
}

export const create: Signature["create"] = f => newInstance(CreateProducer, f);

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
);
