import {
  Mixin1,
  include,
  init,
  mix,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import { Comparator, Optional, returns } from "../../functions.js";
import {
  BackpressureStrategy,
  ConsumerLike,
  DisposableLike,
  DisposableLike_dispose,
  ListenerLike_notify,
  QueueLike,
  QueueLike_enqueue,
  QueueableLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import QueueMixin from "./QueueMixin.js";

const QueueingConsumerMixin: <T>() => Mixin1<
  Omit<QueueLike<T> & ConsumerLike<T>, keyof DisposableLike>,
  Optional<{
    autoDispose?: boolean;
    capacity?: number;
    comparator?: Comparator<T>;
    backpressureStrategy?: BackpressureStrategy;
  }>,
  DisposableLike,
  Pick<
    QueueLike<T> & ConsumerLike<T>,
    typeof ListenerLike_notify | typeof SinkLike_complete
  >
> = /*@__PURE__*/ (<T>() => {
  const QueueingConsumerMixin_autoDispose = Symbol(
    "QueueingConsumerMixin_autoDispose",
  );

  const QueueingConsumerMixin_isCompleted = Symbol(
    "QueueingConsumerMixin_isCompleted",
  );

  type TProperties = {
    [QueueingConsumerMixin_autoDispose]: boolean;
    [QueueingConsumerMixin_isCompleted]: boolean;
  };

  return returns(
    mix<
      QueueLike<T> & ConsumerLike<T>,
      TProperties,
      Omit<ConsumerLike<T>, keyof QueueableLike>,
      DisposableLike,
      Optional<{
        autoDispose?: boolean;
        capacity?: number;
        comparator?: Comparator<T>;
        backpressureStrategy?: BackpressureStrategy;
      }>
    >(
      include(QueueMixin()),
      function QueueingConsumerMixin(
        this: Omit<ConsumerLike<T>, keyof QueueableLike> &
          DisposableLike &
          TProperties,
        config: Optional<{
          autoDispose?: boolean;
          capacity?: number;
          comparator?: Comparator<T>;
          backpressureStrategy?: BackpressureStrategy;
        }>,
      ): QueueLike<T> & ConsumerLike<T> {
        init(QueueMixin<T>(), this, config);
        this[QueueingConsumerMixin_autoDispose] = config?.autoDispose ?? false;

        return this;
      },
      props<TProperties>({
        [QueueingConsumerMixin_autoDispose]: false,
        [QueueingConsumerMixin_isCompleted]: false,
      }),
      proto({
        get [SinkLike_isCompleted]() {
          unsafeCast<TProperties>(this);
          return this[QueueingConsumerMixin_isCompleted];
        },

        [ListenerLike_notify](
          this: TProperties & QueueLike<T> & ConsumerLike<T>,
          item: T,
        ) {
          this[QueueLike_enqueue](item);
        },

        [SinkLike_complete](this: TProperties & DisposableLike) {
          this[QueueingConsumerMixin_isCompleted] = true;

          if (this[QueueingConsumerMixin_autoDispose]) {
            this[DisposableLike_dispose]();
          }
        },
      }),
    ),
  );
})();

export default QueueingConsumerMixin;
