import { Mixin1, include, init, mix } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import { ConsumerLike } from "../../utils.js";
import DelegatingConsumerMixin, {
  DelegatingConsumerLike,
} from "../__mixins__/DelegatingConsumerMixin.js";
import DelegatingCatchErrorSinkMixin from "./DelegatingCatchErrorSinkMixin.js";

type TReturn<
  T,
  TOut = T,
  TDelegateConsumer extends ConsumerLike<TOut> = ConsumerLike<TOut>,
> = DelegatingConsumerLike<T, TOut, TDelegateConsumer>;

const DelegatingCatchErrorConsumerMixin: <
  T,
  TOut = T,
  TDelegateConsumer extends ConsumerLike<TOut> = ConsumerLike<TOut>,
>() => Mixin1<TReturn<T, TOut, TDelegateConsumer>, TDelegateConsumer> =
  /*@__PURE__*/ (<T, TOut, TDelegateConsumer extends ConsumerLike<TOut>>() =>
    returns(
      mix(
        include(DelegatingConsumerMixin(), DelegatingCatchErrorSinkMixin()),
        function DelegatingCatchErrorConsumerMixin(
          this: unknown,
          delegate: TDelegateConsumer,
        ): TReturn<T, TOut, TDelegateConsumer> {
          init(DelegatingConsumerMixin(), this, delegate);
          init(
            DelegatingCatchErrorSinkMixin<T, TOut, TDelegateConsumer>(),
            this,
            delegate,
          );

          return this;
        },
      ),
    ))();

export default DelegatingCatchErrorConsumerMixin;
