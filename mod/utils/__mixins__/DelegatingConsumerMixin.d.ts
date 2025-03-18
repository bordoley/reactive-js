import { Mixin1 } from "../../__internal__/mixins.js";
import { ConsumerLike, DisposableLike } from "../../utils.js";
import { DelegatingSinkLike } from "./DelegatingSinkMixin.js";
export interface DelegatingConsumerLike<T, TDelegateConsumer extends ConsumerLike<T> = ConsumerLike<T>> extends DelegatingSinkLike<T, TDelegateConsumer>, ConsumerLike<T> {
}
declare const DelegatingConsumerMixin: <T, TDelegateConsumer extends ConsumerLike<T> = ConsumerLike<T>>() => Mixin1<DelegatingConsumerLike<T, TDelegateConsumer>, TDelegateConsumer, DisposableLike>;
export default DelegatingConsumerMixin;
