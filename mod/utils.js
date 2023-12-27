/// <reference types="./utils.d.ts" />

export const DisposableLike_add = Symbol("DisposableLike_add");
export const DisposableLike_dispose = Symbol("DisposableLike_dispose");
export const DisposableLike_error = Symbol("DisposableLike_error");
export const DisposableLike_isDisposed = Symbol("DisposableLike_isDisposed");
export const SerialDisposableLike_current = Symbol("SerialDisposableLike_current");
export const QueueableLike_backpressureStrategy = Symbol("QueueableLike_backpressureStrategy");
export const QueueableLike_capacity = Symbol("QueueableLike_capacity");
export const QueueableLike_enqueue = Symbol("QueueableLike_enqueue");
export const QueueableLike_count = Symbol("QueueableLike_count");
export const StackLike_head = Symbol("StackLike_head");
export const StackLike_pop = Symbol("StackLike_pop");
export const QueueLike_head = Symbol("QueueLike_head");
export const QueueLike_dequeue = Symbol("QueueLike_dequeue");
export const IndexedQueueLike_get = Symbol("IndexedQueueLike_get");
export const IndexedQueueLike_set = Symbol("IndexedQueueLike_set");
/**
 * @noInheritDoc
 */
export class BackPressureError extends Error {
    [QueueableLike_capacity];
    [QueueableLike_backpressureStrategy];
    constructor(capacity, backpressureStrategy) {
        super();
        this[QueueableLike_capacity] = capacity;
        this[QueueableLike_backpressureStrategy] = backpressureStrategy;
    }
}
