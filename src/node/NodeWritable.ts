import { Writable } from "stream";
import { MAX_SAFE_INTEGER } from "../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
  unsafeCast,
} from "../__internal__/mixins.js";
import * as EventSource from "../computations/EventSource.js";
import * as Publisher from "../computations/Publisher.js";
import { PublisherLike } from "../computations.js";
import {
  Function1,
  Optional,
  SideEffect1,
  bindMethod,
  newInstance,
  none,
  pipe,
  raise,
} from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import DisposableMixin from "../utils/__mixins__/DisposableMixin.js";
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
  SinkLike_complete,
  SinkLike_isCompleted,
  ThrowBackpressureStrategy,
} from "../utils.js";
import * as NodeStream from "./NodeStream.js";

interface NodeWritable {
  toConsumer(options?: {
    autoDispose?: boolean;
  }): Function1<Writable, ConsumerLike<Uint8Array>>;
}

type Signature = NodeWritable;

export const toConsumer: Signature["toConsumer"] = /*@__PURE__*/ (() => {
  const WritableConsumer_autoDispose = Symbol("WritableConsumer_autoDispose");
  const WritableConsumer_writable = Symbol("WritableConsumer_writable");
  const WritableConsumer_onReadyPublisher = Symbol(
    "WritableConsumer_onReadyPublisher",
  );

  type TProperties = {
    [WritableConsumer_autoDispose]: boolean;
    [WritableConsumer_writable]: Writable;
    [SinkLike_isCompleted]: boolean;
    [WritableConsumer_onReadyPublisher]: PublisherLike<void>;
  };

  const createNodeWritableConsumer = mixInstanceFactory(
    include(DisposableMixin),
    function WritableConsumer(
      this: Omit<ConsumerLike<Uint8Array>, keyof DisposableLike> & TProperties,
      writable: Writable,
      options: Optional<{ autoDispose?: boolean }>,
    ): ConsumerLike<Uint8Array> {
      init(DisposableMixin, this);

      this[WritableConsumer_writable] = writable;
      this[WritableConsumer_autoDispose] = options?.autoDispose ?? false;

      writable.on("finish", () => {
        this[SinkLike_isCompleted] = true;

        if (this[WritableConsumer_autoDispose]) {
          this[DisposableLike_dispose]();
        }
      });

      pipe(
        this,
        NodeStream.addToNodeStream(writable),
        DisposableContainer.onDisposed(bindMethod(this, SinkLike_complete)),
      );

      return this;
    },
    props<TProperties>({
      [WritableConsumer_autoDispose]: false,
      [WritableConsumer_writable]: none,
      [SinkLike_isCompleted]: false,
      [WritableConsumer_onReadyPublisher]: none,
    }),
    proto({
      [ConsumerLike_backpressureStrategy]:
        ThrowBackpressureStrategy as BackpressureStrategy,
      [ConsumerLike_capacity]: MAX_SAFE_INTEGER,

      get [ConsumerLike_isReady]() {
        unsafeCast<TProperties>(this);
        const writable = this[WritableConsumer_writable];
        const needsDrain = writable.writableNeedDrain;
        const result = !this[SinkLike_isCompleted] && !needsDrain;

        return result;
      },

      [ConsumerLike_addOnReadyListener](
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
          EventSource.addEventHandler(callback),
          Disposable.addTo(this),
        );
      },

      [EventListenerLike_notify](
        this: TProperties & ConsumerLike,
        data: Uint8Array,
      ) {
        if (this[ConsumerLike_isReady]) {
          const writable = this[WritableConsumer_writable];
          writable.write(Buffer.from(data));
        } else {
          raise(newInstance(BackPressureError, this));
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

  return options => writable => createNodeWritableConsumer(writable, options);
})();
