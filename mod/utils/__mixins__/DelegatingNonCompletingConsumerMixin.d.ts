import { Mixin1 } from "../../__internal__/mixins.js";
import { ConsumerLike } from "../../utils.js";
import { DelegatingConsumerLike } from "../__mixins__/DelegatingConsumerMixin.js";
type TReturn<T, TOut = T, TDelegateConsumer extends ConsumerLike<TOut> = ConsumerLike<TOut>> = DelegatingConsumerLike<T, TOut, TDelegateConsumer>;
declare const DelegatingNonCompletingConsumerMixin: <T, TOut = T, TDelegateConsumer extends ConsumerLike<TOut> = ConsumerLike<TOut>>() => Mixin1<TReturn<T, TOut, TDelegateConsumer>, TDelegateConsumer>;
export default DelegatingNonCompletingConsumerMixin;
