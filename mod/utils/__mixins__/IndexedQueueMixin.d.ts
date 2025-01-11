import { Mixin1 } from "../../__internal__/mixins.js";
import { Optional } from "../../functions.js";
import { BackpressureStrategy, QueueLike, QueueLike_count, QueueableLike, QueueableLike_backpressureStrategy, QueueableLike_capacity } from "../../utils.js";
export declare const StackLike_head: unique symbol;
export declare const StackLike_pop: unique symbol;
export interface StackLike<T = unknown> extends QueueableLike<T> {
    readonly [StackLike_head]: Optional<T>;
    [StackLike_pop](): Optional<T>;
}
export declare const IndexedQueueLike_get: unique symbol;
export declare const IndexedQueueLike_set: unique symbol;
export interface IndexedQueueLike<T = unknown> extends QueueLike<T>, StackLike<T> {
    [IndexedQueueLike_get](index: number): T;
    [IndexedQueueLike_set](key: number, value: T): T;
}
declare const IndexedQueueMixin: <T>() => Mixin1<IndexedQueueLike<T>, Optional<{
    readonly [QueueableLike_backpressureStrategy]?: BackpressureStrategy;
    readonly [QueueableLike_capacity]?: number;
}>, unknown, Omit<IndexedQueueLike<T>, typeof QueueableLike_backpressureStrategy | typeof QueueLike_count | typeof QueueableLike_capacity>>;
export default IndexedQueueMixin;
