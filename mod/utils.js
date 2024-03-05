/// <reference types="./utils.d.ts" />

import { Error } from "./__internal__/constants.js";
import { isNone } from "./functions.js";
export const DisposableContainerLike_add = Symbol("DisposableContainerLike_add");
export const DisposableLike_dispose = 
/*@__PURE__*/ (() => {
    if (isNone(Symbol.dispose)) {
        Symbol.dispose = Symbol("dispose");
    }
    return Symbol.dispose;
})();
export const DisposableLike_error = Symbol("DisposableLike_error");
export const DisposableLike_isDisposed = Symbol("DisposableLike_isDisposed");
export const SerialDisposableLike_current = Symbol("SerialDisposableLike_current");
export const QueueableLike_backpressureStrategy = Symbol("QueueableLike_backpressureStrategy");
export const QueueableLike_capacity = Symbol("QueueableLike_capacity");
export const QueueableLike_enqueue = Symbol("QueueableLike_enqueue");
export const DropLatestBackpressureStrategy = "drop-latest";
export const DropOldestBackpressureStrategy = "drop-oldest";
export const OverflowBackpressureStrategy = "overflow";
export const ThrowBackpressureStrategy = "throw";
export const StackLike_head = Symbol("StackLike_head");
export const StackLike_pop = Symbol("StackLike_pop");
export const QueueLike_head = Symbol("QueueLike_head");
export const QueueLike_dequeue = Symbol("QueueLike_dequeue");
export const QueueLike_count = Symbol("QueueLike_count");
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
