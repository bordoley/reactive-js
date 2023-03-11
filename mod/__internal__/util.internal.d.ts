import { Optional } from "../functions.js";
import { DisposableLike, QueueLike } from "../util.js";
import { DelegatingLike } from "./mixins.js";
export declare const SerialDisposableLike_current: unique symbol;
export interface SerialDisposableLike<TDisposable extends DisposableLike = DisposableLike> extends DisposableLike {
    get [SerialDisposableLike_current](): TDisposable;
    set [SerialDisposableLike_current](v: TDisposable);
}
export interface DelegatingDisposableLike<TDisposable extends DisposableLike = DisposableLike> extends DelegatingLike<TDisposable>, DisposableLike {
}
export declare const PullableQueueLike_head: unique symbol;
export declare const PullableQueueLike_pull: unique symbol;
export interface PullableQueueLike<T> extends QueueLike<T> {
    readonly [PullableQueueLike_head]: Optional<T>;
    [PullableQueueLike_pull](): Optional<T>;
}
export declare const IndexedQueueLike_get: unique symbol;
export interface IndexedQueueLike<T> extends PullableQueueLike<T> {
    [IndexedQueueLike_get](index: number): T;
}
