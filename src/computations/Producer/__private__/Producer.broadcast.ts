import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
  unsafeCast,
} from "../../../__internal__/mixins.js";
import {
  EventSourceLike_subscribe,
  ProducerLike,
  StoreLike,
  StoreLike_value,
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
  ConsumerLike,
  DisposableLike,
  EventListenerLike,
  EventListenerLike_notify,
  FlowControllerLike_addOnReadyListener,
  FlowControllerLike_isReady,
  SchedulerLike,
  SinkLike_complete,
  SinkLike_isCompleted,
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
    [EventListernToPauseableConsumer_mode]: StoreLike<boolean>;
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
      mode: StoreLike<boolean> & DisposableLike,
    ): ConsumerLike<T> {
      init(DelegatingDisposableMixin, this, listener);
      init(DelegatingEventListenerMixin(), this, listener);
      init(DisposeOnCompleteSinkMixin(), this);

      this[EventListernToPauseableConsumer_mode] = mode;

      pipe(mode, Disposable.addTo(this));

      return this;
    },
    props<TProperties>({
      [EventListernToPauseableConsumer_mode]: none,
    }),
    proto({
      get [FlowControllerLike_isReady]() {
        unsafeCast<TProperties>(this);

        return !this[EventListernToPauseableConsumer_mode][StoreLike_value];
      },
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
            producer[EventSourceLike_subscribe](consumer);
          }),
        options,
      );
})();

export default Producer_broadcast;
