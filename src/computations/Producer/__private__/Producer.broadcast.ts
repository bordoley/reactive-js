import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import {
  BroadcasterLike,
  ProducerLike,
  ReactiveSourceLike_subscribe,
} from "../../../computations.js";
import { SideEffect1, none, pipe, raise } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingEventListenerMixin, {
  DelegatingEventListenerLike,
  DelegatingEventListenerLike_delegate,
} from "../../../utils/__mixins__/DelegatingEventListenerMixin.js";
import DisposeOnCompleteSinkMixin from "../../../utils/__mixins__/DisposeOnCompleteSinkMixin.js";
import {
  BackPressureConfig_capacity,
  BackPressureConfig_strategy,
  BackpressureStrategy,
  ConsumerLike,
  DisposableLike,
  EventListenerLike,
  EventListenerLike_notify,
  FlowControllerLike_addOnReadyListener,
  FlowControllerLike_isReady,
  SchedulerLike,
  SinkLike_complete,
  SinkLike_isCompleted,
  ThrowBackpressureStrategy,
} from "../../../utils.js";
import Broadcaster_addEventHandler from "../../Broadcaster/__private__/Broadcaster.addEventHandler.js";
import Broadcaster_create from "../../Broadcaster/__private__/Broadcaster.create.js";
import Broadcaster_createPauseable from "../../Broadcaster/__private__/Broadcaster.createPauseable.js";
import type * as Producer from "../../Producer.js";

const Producer_broadcast: Producer.Signature["broadcast"] = /*@__PURE__*/ (<
  T,
>() => {
  const EventListernToPauseableConsumer_mode = Symbol(
    "EventListernToPauseableConsumer_mode",
  );

  type TProperties = {
    [FlowControllerLike_isReady]: boolean;
    [EventListernToPauseableConsumer_mode]: BroadcasterLike<boolean>;
  };

  const createPauseableConsumer = mixInstanceFactory(
    include(
      DelegatingDisposableMixin,
      DelegatingEventListenerMixin(),
      DisposeOnCompleteSinkMixin(),
    ),
    function EventListenerToPauseableConsumer(
      this: TProperties &
        Omit<
          ConsumerLike<T>,
          | keyof DisposableLike
          | keyof SchedulerLike
          | typeof SinkLike_complete
          | typeof SinkLike_isCompleted
        >,
      listener: EventListenerLike<T>,
      mode: BroadcasterLike<boolean> & DisposableLike,
    ): ConsumerLike<T> {
      init(DelegatingDisposableMixin, this, listener);
      init(DelegatingEventListenerMixin(), this, listener);
      init(DisposeOnCompleteSinkMixin(), this);

      this[EventListernToPauseableConsumer_mode] = mode;

      pipe(
        mode,
        Disposable.addTo(this),
        Broadcaster_addEventHandler(isPaused => {
          this[FlowControllerLike_isReady] = !isPaused;
        }),
        Disposable.addTo(this),
      );

      return this;
    },
    props<TProperties>({
      [EventListernToPauseableConsumer_mode]: none,
      [FlowControllerLike_isReady]: false,
    }),
    proto({
      [BackPressureConfig_strategy]:
        ThrowBackpressureStrategy as BackpressureStrategy,

      [BackPressureConfig_capacity]: MAX_SAFE_INTEGER,

      [FlowControllerLike_addOnReadyListener](
        this: TProperties & ConsumerLike<T>,
        callback: SideEffect1<void>,
      ) {
        return pipe(
          this[EventListernToPauseableConsumer_mode],
          Broadcaster_addEventHandler(isPaused => {
            if (!isPaused) {
              callback();
            }
          }),
          Disposable.addTo(this),
        );
      },

      [EventListenerLike_notify](
        this: TProperties & ConsumerLike<T> & DelegatingEventListenerLike<T>,
        next: T,
      ) {
        const delegate = this[DelegatingEventListenerLike_delegate];

        if (this[SinkLike_isCompleted]) {
          raise("Broadcaster is completed");
        } else if (!this[FlowControllerLike_isReady]) {
          raise("Broadcaster is paused");
        }

        delegate[EventListenerLike_notify](next);
      },
    }),
  );

  return (options?: { readonly autoDispose?: boolean }) =>
    (producer: ProducerLike<T>) =>
      Broadcaster_createPauseable<T>(
        mode =>
          Broadcaster_create<T>(listener => {
            const consumer = createPauseableConsumer(listener, mode);
            producer[ReactiveSourceLike_subscribe](consumer);
          }),
        options,
      );
})();

export default Producer_broadcast;
