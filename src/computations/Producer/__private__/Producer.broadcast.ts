import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
  unsafeCast,
} from "../../../__internal__/mixins.js";
import {
  BroadcasterLike,
  EventSourceLike_subscribe,
  ProducerLike,
  StoreLike_value,
  WritableStoreLike,
} from "../../../computations.js";
import {
  Optional,
  SideEffect1,
  none,
  pipe,
  raise,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingEventListenerMixin, {
  DelegatingEventListenerLike,
  DelegatingEventListenerLike_delegate,
} from "../../../utils/__mixins__/DelegatingEventListenerMixin.js";
import DisposeOnCompleteSinkMixin from "../../../utils/__mixins__/DisposeOnCompleteSinkMixin.js";
import {
  ConsumerLike,
  EventListenerLike_notify,
  FlowControllerLike_addOnReadyListener,
  FlowControllerLike_isReady,
  PauseableLike,
  PauseableLike_isPaused,
  PauseableLike_pause,
  PauseableLike_resume,
  SinkLike_isCompleted,
} from "../../../utils.js";
import Broadcaster_addEventHandler from "../../Broadcaster/__private__/Broadcaster.addEventHandler.js";
import type * as Producer from "../../Producer.js";
import * as Publisher from "../../Publisher.js";
import * as WritableStore from "../../WritableStore.js";
import DelegatingBroadcasterMixin from "../../__mixins__/DelegatingBroadcasterMixin.js";

const Producer_broadcast: Producer.Signature["broadcast"] = /*@__PURE__*/ (<
  T,
>() => {
  type TProperties = {
    [PauseableLike_isPaused]: WritableStoreLike<boolean>;
  };

  type TPrototype = Pick<
    ConsumerLike<T> & PauseableLike & BroadcasterLike<T>,
    | typeof FlowControllerLike_isReady
    | typeof PauseableLike_pause
    | typeof PauseableLike_resume
    | typeof FlowControllerLike_addOnReadyListener
    | typeof EventListenerLike_notify
  >;

  const createPauseableConsumerBroadcaster = mixInstanceFactory(
    include(
      DelegatingDisposableMixin,
      DelegatingEventListenerMixin(),
      DisposeOnCompleteSinkMixin(),
      DelegatingBroadcasterMixin(),
    ),
    function EventListenerToPauseableConsumer(
      this: TProperties & TPrototype,
      options: Optional<{ readonly autoDispose?: boolean }>,
    ): ConsumerLike<T> & PauseableLike & BroadcasterLike<T> {
      const delegate = Publisher.create<T>(options);

      init(DelegatingDisposableMixin, this, delegate);
      init(DelegatingEventListenerMixin(), this, delegate);
      init(DisposeOnCompleteSinkMixin(), this);
      init(DelegatingBroadcasterMixin<T>(), this, delegate);

      const mode = pipe(WritableStore.create(false), Disposable.bindTo(this));

      this[PauseableLike_isPaused] = mode;

      return this;
    },
    props<TProperties>({
      [PauseableLike_isPaused]: none,
    }),
    proto<TPrototype>({
      get [FlowControllerLike_isReady]() {
        unsafeCast<TProperties>(this);

        return !this[PauseableLike_isPaused][StoreLike_value];
      },

      [PauseableLike_pause](this: TProperties) {
        this[PauseableLike_isPaused][StoreLike_value] = true;
      },

      [PauseableLike_resume](this: TProperties) {
        this[PauseableLike_isPaused][StoreLike_value] = false;
      },

      [FlowControllerLike_addOnReadyListener](
        this: TProperties & ConsumerLike<T>,
        callback: SideEffect1<void>,
      ) {
        return pipe(
          this[PauseableLike_isPaused],
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
    (producer: ProducerLike<T>) => {
      const consumer = createPauseableConsumerBroadcaster(options);
      producer[EventSourceLike_subscribe](consumer);
      return consumer;
    };
})();

export default Producer_broadcast;
