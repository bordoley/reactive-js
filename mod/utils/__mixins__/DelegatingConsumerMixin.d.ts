import { Mixin1 } from "../../__internal__/mixins.js";
import { ConsumerLike, DisposableLike, EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted } from "../../utils.js";
import { DelegatingEventListenerLike_delegate } from "./DelegatingEventListenerMixin.js";
import { DelegatingSinkLike } from "./DelegatingSinkMixin.js";
export interface DelegatingConsumerLike<T, TOut = T, TDelegateConsumer extends ConsumerLike<TOut> = ConsumerLike<TOut>> extends DelegatingSinkLike<T, TOut, TDelegateConsumer>, ConsumerLike<T> {
}
type TReturn<T, TOut = T, TDelegateConsumer extends ConsumerLike<TOut> = ConsumerLike<TOut>> = Omit<DelegatingConsumerLike<T, TOut, TDelegateConsumer>, keyof DisposableLike>;
type TPrototype<T, TOut = T, TDelegateConsumer extends ConsumerLike<TOut> = ConsumerLike<TOut>> = Omit<DelegatingConsumerLike<T, TOut, TDelegateConsumer>, keyof DisposableLike | typeof DelegatingEventListenerLike_delegate | typeof EventListenerLike_notify | typeof SinkLike_isCompleted | typeof SinkLike_complete>;
declare const DelegatingConsumerMixin: <T, TOut = T, TDelegateConsumer extends ConsumerLike<TOut> = ConsumerLike<TOut>>() => Mixin1<TReturn<T, TOut, TDelegateConsumer>, TDelegateConsumer, TPrototype<T, TOut, TDelegateConsumer>>;
export default DelegatingConsumerMixin;
