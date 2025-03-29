import { Mixin1, include, init, mix } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import { ConsumerLike } from "../../utils.js";
import DelegatingConsumerMixin from "../__mixins__/DelegatingConsumerMixin.js";
import DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin from "./DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin.js";

const DelegatingNotifyOnlyNonCompletingNonDisposingConsumer: <T>() => Mixin1<
  ConsumerLike<T>,
  ConsumerLike<T>
> = /*@__PURE__*/ (<T>() =>
  returns(
    mix(
      include(
        DelegatingConsumerMixin(),
        DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin(),
      ),
      function NonDisposingDelegatingConsumer(
        this: unknown,
        delegate: ConsumerLike<T>,
      ): ConsumerLike<T> {
        init(DelegatingConsumerMixin(), this, delegate);
        init(
          DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin<T>(),
          this,
          delegate,
        );

        return this;
      },
    ),
  ))();

export default DelegatingNotifyOnlyNonCompletingNonDisposingConsumer;
