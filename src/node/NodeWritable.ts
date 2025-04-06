import { Writable } from "stream";
import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
  unsafeCast,
} from "../__internal__/mixins.js";
import * as Broadcaster from "../computations/Broadcaster.js";
import * as Publisher from "../computations/Publisher.js";
import { PublisherLike } from "../computations.js";
import {
  Function1,
  SideEffect1,
  bindMethod,
  none,
  pipe,
  returns,
} from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import DisposableMixin from "../utils/__mixins__/DisposableMixin.js";
import {
  ConsumerLike,
  DisposableLike,
  DisposableLike_dispose,
  EventListenerLike_notify,
  FlowControllerLike,
  FlowControllerLike_addOnReadyListener,
  FlowControllerLike_isReady,
  SinkLike_complete,
  SinkLike_isCompleted,
  raiseCapacityExceededError,
} from "../utils.js";
import * as NodeStream from "./NodeStream.js";

interface NodeWritable {
  toConsumer(): Function1<Writable, ConsumerLike<Uint8Array>>;
}

type Signature = NodeWritable;

export const toConsumer: Signature["toConsumer"] = /*@__PURE__*/ (() => {
  const WritableConsumer_writable = Symbol("WritableConsumer_writable");
  const WritableConsumer_onReadyPublisher = Symbol(
    "WritableConsumer_onReadyPublisher",
  );

  type TProperties = {
    [WritableConsumer_writable]: Writable;
    [SinkLike_isCompleted]: boolean;
    [WritableConsumer_onReadyPublisher]: PublisherLike<void>;
  };

  const createNodeWritableConsumer = mixInstanceFactory(
    include(DisposableMixin),
    function WritableConsumer(
      this: Omit<ConsumerLike<Uint8Array>, keyof DisposableLike> & TProperties,
      writable: Writable,
    ): ConsumerLike<Uint8Array> {
      init(DisposableMixin, this);

      this[WritableConsumer_writable] = writable;

      writable.on("finish", bindMethod(this, DisposableLike_dispose));

      pipe(
        this,
        NodeStream.addToNodeStream(writable),
        DisposableContainer.onDisposed(bindMethod(this, SinkLike_complete)),
      );

      return this;
    },
    props<TProperties>({
      [WritableConsumer_writable]: none,
      [SinkLike_isCompleted]: false,
      [WritableConsumer_onReadyPublisher]: none,
    }),
    proto({
      get [FlowControllerLike_isReady]() {
        unsafeCast<TProperties>(this);
        const writable = this[WritableConsumer_writable];
        const needsDrain = writable.writableNeedDrain;
        const result = !this[SinkLike_isCompleted] && !needsDrain;

        return result;
      },

      [FlowControllerLike_addOnReadyListener](
        this: TProperties & ConsumerLike,
        callback: SideEffect1<void>,
      ) {
        const publisher =
          this[WritableConsumer_onReadyPublisher] ??
          (() => {
            const writable = this[WritableConsumer_writable];
            const publisher = pipe(
              Publisher.create<void>(),
              Disposable.addTo(this),
            );

            const onDrain = bindMethod(publisher, EventListenerLike_notify);
            writable.on("drain", onDrain);

            this[WritableConsumer_onReadyPublisher] = publisher;
            return publisher;
          })();

        return pipe(
          publisher,
          Broadcaster.addEventHandler(callback),
          Disposable.addTo(this),
        );
      },

      [EventListenerLike_notify](
        this: TProperties & FlowControllerLike,
        data: Uint8Array,
      ) {
        const writable = this[WritableConsumer_writable];
        if (this[FlowControllerLike_isReady]) {
          writable.write(Buffer.from(data));
        } else {
          // FIXME: Not strictly correct, because bytes doesn't necessarily
          // map to event counts
          raiseCapacityExceededError(writable.writableHighWaterMark);
        }
      },

      [SinkLike_complete](this: TProperties & DisposableLike) {
        const isCompleted = this[SinkLike_isCompleted];
        const writable = this[WritableConsumer_writable];
        const ended = writable.writableEnded;

        this[SinkLike_isCompleted] = true;

        if (isCompleted || ended) {
          return;
        }

        writable.end();
      },
    }),
  );

  return returns(createNodeWritableConsumer);
})();
