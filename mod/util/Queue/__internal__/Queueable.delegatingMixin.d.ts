import { Mixin1 } from "../../../__internal__/mixins.js";
import { QueueableDelegatingMixin_delegate } from "../../../__internal__/symbols.js";
import { QueueableLike } from "../../../util.js";
export { QueueableDelegatingMixin_delegate };
export type TDelegatingQueueableMixinReturn<T, TDelegate extends QueueableLike<T> = QueueableLike<T>> = QueueableLike<T> & {
    readonly [QueueableDelegatingMixin_delegate]: TDelegate;
};
declare const Queueable_delegatingMixin: <T, TDelegate extends QueueableLike<T> = QueueableLike<T>>() => Mixin1<TDelegatingQueueableMixinReturn<T, TDelegate>, TDelegate>;
export default Queueable_delegatingMixin;
