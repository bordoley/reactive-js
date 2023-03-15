import { Optional } from "../functions.js";
import { DisposableLike, QueueableLike } from "../util.js";
import { DelegatingLike } from "./mixins.js";
export declare const SerialDisposableLike_current: unique symbol;
export interface SerialDisposableLike<TDisposable extends DisposableLike = DisposableLike> extends DisposableLike {
    get [SerialDisposableLike_current](): TDisposable;
    set [SerialDisposableLike_current](v: TDisposable);
}
export interface DelegatingDisposableLike<TDisposable extends DisposableLike = DisposableLike> extends DelegatingLike<TDisposable>, DisposableLike {
}
export declare const QueueLike_head: unique symbol;
export declare const QueueLike_pull: unique symbol;
export declare const QueueLike_count: unique symbol;
export interface QueueLike<T> extends QueueableLike<T> {
    readonly [QueueLike_count]: number;
    readonly [QueueLike_head]: Optional<T>;
    [QueueLike_pull](): Optional<T>;
}
export declare const IndexedQueueLike_get: unique symbol;
export declare const IndexedQueueLike_set: unique symbol;
export declare const IndexedQueueLike_pop: unique symbol;
export interface IndexedQueueLike<T> extends QueueLike<T> {
    [IndexedQueueLike_get](index: number): T;
    [IndexedQueueLike_set](index: number, value: T): T;
    [IndexedQueueLike_pop](): Optional<T>;
}
