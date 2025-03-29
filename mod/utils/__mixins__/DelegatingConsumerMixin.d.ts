import { Mixin1 } from "../../__internal__/mixins.js";
import { ConsumerLike, DisposableLike, EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted } from "../../utils.js";
import { DelegatingEventListenerLike_delegate } from "./DelegatingEventListenerMixin.js";
import { DelegatingSinkLike } from "./DelegatingSinkMixin.js";
export interface DelegatingConsumerLike<T, TDelegateConsumer extends ConsumerLike<T> = ConsumerLike<T>> extends DelegatingSinkLike<T, TDelegateConsumer>, ConsumerLike<T> {
}
type TReturn<T, TDelegateConsumer extends ConsumerLike<T> = ConsumerLike<T>> = Omit<DelegatingConsumerLike<T, TDelegateConsumer>, keyof DisposableLike>;
type TPrototype<T, TDelegateConsumer extends ConsumerLike<T> = ConsumerLike<T>> = Omit<DelegatingConsumerLike<T, TDelegateConsumer>, keyof DisposableLike | typeof DelegatingEventListenerLike_delegate | typeof EventListenerLike_notify | typeof SinkLike_isCompleted | typeof SinkLike_complete>;
declare const DelegatingConsumerMixin: <T, TDelegateConsumer extends ConsumerLike<T> = ConsumerLike<T>>() => Mixin1<TReturn<T, TDelegateConsumer>, TDelegateConsumer, TPrototype<T, TDelegateConsumer>>;
export default DelegatingConsumerMixin;
