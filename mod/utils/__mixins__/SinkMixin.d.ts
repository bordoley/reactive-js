import { Mixin1 } from "../../__internal__/mixins.js";
import { DisposableLike, SinkLike } from "../../utils.js";
export declare const SinkMixinLike_doNotify: unique symbol;
export declare const SinkMixinLike_doComplete: unique symbol;
export declare const SinkMixinLike_delegate: unique symbol;
export declare const SinkMixinLike_isCompleted: unique symbol;
export interface SinkMixinLike<TSink extends SinkLike, T> {
    readonly [SinkMixinLike_delegate]: TSink;
    [SinkMixinLike_isCompleted]: boolean;
    [SinkMixinLike_doNotify](next: T): void;
    [SinkMixinLike_doComplete](): void;
}
type TReturn<TSink extends SinkLike, T> = SinkMixinLike<TSink, T> & Omit<SinkLike<T>, keyof DisposableLike>;
type TPrototype<TSink extends SinkLike, T> = Omit<SinkLike<T> & SinkMixinLike<TSink, T>, keyof DisposableLike | typeof SinkMixinLike_delegate | typeof SinkMixinLike_isCompleted>;
declare const SinkMixin: <TSink extends SinkLike<T>, T>() => Mixin1<TReturn<TSink, T>, TSink, TPrototype<TSink, T>, DisposableLike>;
export default SinkMixin;
