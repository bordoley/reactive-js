import { DelegatingLike } from "../../__internal__/mixins.js";
import { Optional } from "../../functions.js";
import { DisposableLike } from "../../util.js";
export declare const MutableRefLike_current: unique symbol;
export interface MutableRefLike<T = unknown> {
    get [MutableRefLike_current](): T;
    set [MutableRefLike_current](v: T);
}
export interface DisposableRefLike<TDisposable extends DisposableLike = DisposableLike> extends DisposableLike, MutableRefLike<TDisposable> {
}
export interface DelegatingDisposableLike<TDisposable extends DisposableLike = DisposableLike> extends DelegatingLike<TDisposable>, DisposableLike {
}
export declare const QueueLike_clear: unique symbol;
export declare const QueueLike_count: unique symbol;
export declare const QueueLike_peek: unique symbol;
export declare const QueueLike_pop: unique symbol;
export declare const QueueLike_push: unique symbol;
export interface QueueLike<T> {
    readonly [QueueLike_count]: number;
    [QueueLike_clear](): void;
    [QueueLike_peek](): Optional<T>;
    [QueueLike_pop](): Optional<T>;
    [QueueLike_push](item: T): void;
}
