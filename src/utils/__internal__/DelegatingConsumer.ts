import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../__internal__/mixins.js";
import {
  ConsumerLike,
  DisposableLike_dispose,
  SinkLike_complete,
} from "../../utils.js";
import DelegatingConsumerMixin from "../__mixins__/DelegatingConsumerMixin.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";

export const create: <T>(o: ConsumerLike<T>) => ConsumerLike<T> =
  /*@__PURE__*/ (<T>() => {
    return mixInstanceFactory(
      include(DelegatingDisposableMixin, DelegatingConsumerMixin()),
      function DelegatingConsumer(
        this: unknown,
        delegate: ConsumerLike<T>,
      ): ConsumerLike<T> {
        init(DelegatingDisposableMixin, this, delegate);
        init(DelegatingConsumerMixin(), this, delegate);

        return this;
      },
    );
  })();

export const createNotifyOnlyNonCompletingNonDisposing: <T>(
  o: ConsumerLike<T>,
) => ConsumerLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(DisposableMixin, DelegatingConsumerMixin()),
    function NonDisposingDelegatingConsumer(
      this: unknown,
      delegate: ConsumerLike<T>,
    ): ConsumerLike<T> {
      init(DisposableMixin, this);
      init(DelegatingConsumerMixin(), this, delegate);

      return this;
    },
    props(),
    proto({
      [SinkLike_complete](this: ConsumerLike<T>) {
        this[DisposableLike_dispose]();
      },
    }),
  ))();
