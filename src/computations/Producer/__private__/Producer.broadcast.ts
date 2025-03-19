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
  SourceLike_subscribe,
} from "../../../computations.js";
import {
  SideEffect1,
  newInstance,
  none,
  pipe,
  raise,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import {
  BackPressureError,
  BackpressureStrategy,
  ConsumerLike,
  DisposableLike,
  DisposableLike_dispose,
  ListenerLike,
  ListenerLike_notify,
  QueueableLike_addOnReadyListener,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_isReady,
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
  const ListernToPauseableConsumer_delegate = Symbol(
    "ListernToPauseableConsumer_delegate",
  );

  const ListernToPauseableConsumer_mode = Symbol(
    "ListernToPauseableConsumer_mode",
  );

  type TProperties = {
    [ListernToPauseableConsumer_delegate]: ListenerLike<T>;
    [SinkLike_isCompleted]: boolean;
    [QueueableLike_isReady]: boolean;
    [ListernToPauseableConsumer_mode]: BroadcasterLike<boolean>;
  };

  const createPauseableConsumer = mixInstanceFactory(
    include(DelegatingDisposableMixin),
    function SinkToPauseableConsumer(
      this: TProperties &
        Omit<ConsumerLike<T>, keyof DisposableLike | keyof SchedulerLike>,
      listener: ListenerLike<T>,
      mode: BroadcasterLike<boolean>,
    ): ConsumerLike<T> {
      init(DelegatingDisposableMixin, this, listener);

      this[ListernToPauseableConsumer_delegate] = listener;
      this[ListernToPauseableConsumer_mode] = mode;

      pipe(
        mode,
        Broadcaster_addEventHandler(isPaused => {
          this[QueueableLike_isReady] = !isPaused;
        }),
        Disposable.addTo(this),
      );

      return this;
    },
    props<TProperties>({
      [ListernToPauseableConsumer_delegate]: none,
      [ListernToPauseableConsumer_mode]: none,
      [SinkLike_isCompleted]: false,
      [QueueableLike_isReady]: false,
    }),
    proto({
      [QueueableLike_backpressureStrategy]:
        ThrowBackpressureStrategy as BackpressureStrategy,

      [QueueableLike_capacity]: MAX_SAFE_INTEGER,

      [QueueableLike_addOnReadyListener](
        this: TProperties & ConsumerLike<T>,
        callback: SideEffect1<void>,
      ) {
        return pipe(
          this[ListernToPauseableConsumer_mode],
          Broadcaster_addEventHandler(isPaused => {
            if (!isPaused) {
              callback();
            }
          }),
          Disposable.addTo(this),
        );
      },

      [ListenerLike_notify](this: TProperties & ConsumerLike<T>, next: T) {
        if (this[SinkLike_isCompleted]) {
          return;
        } else if (!this[QueueableLike_isReady]) {
          raise(newInstance(BackPressureError, this));
        }

        this[ListernToPauseableConsumer_delegate][ListenerLike_notify](next);
      },
      [SinkLike_complete](this: TProperties & ConsumerLike<T>) {
        this[SinkLike_isCompleted] = true;
        const delegate = this[ListernToPauseableConsumer_delegate];
        delegate[DisposableLike_dispose]();
      },
    }),
  );

  return (options?: {
      readonly autoDispose?: boolean;
      readonly replay?: number;
    }) =>
    (producer: ProducerLike<T>) =>
      Broadcaster_createPauseable<T>(mode =>
        pipe(
          Broadcaster_create<T>(listener => {
            const consumer = createPauseableConsumer(listener, mode);
            producer[SourceLike_subscribe](consumer);
          }, options),
          Disposable.bindTo(mode),
        ),
      );
})();

export default Producer_broadcast;
