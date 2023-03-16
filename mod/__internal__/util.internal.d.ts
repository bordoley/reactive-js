import { Optional } from "../functions.js";
import { DisposableLike, QueueableLike } from "../util.js";
import { DelegatingLike } from "./mixins.js";
import { IndexedQueueLike_get, IndexedQueueLike_pop, IndexedQueueLike_set, QueueLike_count, QueueLike_head, QueueLike_pull, SerialDisposableLike_current } from "./util.symbols.js";
export { SerialDisposableLike_current, QueueLike_head, QueueLike_pull, QueueLike_count, IndexedQueueLike_get, IndexedQueueLike_set, IndexedQueueLike_pop, };
export interface SerialDisposableLike<TDisposable extends DisposableLike = DisposableLike> extends DisposableLike {
    get [SerialDisposableLike_current](): TDisposable;
    set [SerialDisposableLike_current](v: TDisposable);
}
export interface DelegatingDisposableLike<TDisposable extends DisposableLike = DisposableLike> extends DelegatingLike<TDisposable>, DisposableLike {
}
export interface QueueLike<T> extends QueueableLike<T> {
    readonly [QueueLike_count]: number;
    readonly [QueueLike_head]: Optional<T>;
    [QueueLike_pull](): Optional<T>;
}
export interface IndexedQueueLike<T> extends QueueLike<T> {
    [IndexedQueueLike_get](index: number): T;
    [IndexedQueueLike_set](index: number, value: T): T;
    [IndexedQueueLike_pop](): Optional<T>;
}
