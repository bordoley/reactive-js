import { DelegatingLike } from "../../__internal__/mixins.js";
import { Optional } from "../../functions.js";
import { DisposableLike, QueueLike } from "../../util.js";
export declare const MutableRefLike_current: unique symbol;
export interface MutableRefLike<T = unknown> {
    get [MutableRefLike_current](): T;
    set [MutableRefLike_current](v: T);
}
export interface DisposableRefLike<TDisposable extends DisposableLike = DisposableLike> extends DisposableLike, MutableRefLike<TDisposable> {
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
