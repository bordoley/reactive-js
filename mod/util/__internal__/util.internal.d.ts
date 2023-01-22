import { Optional } from "../../functions.mjs";
import { DisposableLike } from "../../util.mjs";
declare const MutableRefLike_current: unique symbol;
interface MutableRefLike<T = unknown> {
    get [MutableRefLike_current](): T;
    set [MutableRefLike_current](v: T);
}
interface DisposableRefLike<TDisposable extends DisposableLike = DisposableLike> extends DisposableLike, MutableRefLike<TDisposable> {
}
declare const QueueLike_clear: unique symbol;
declare const QueueLike_count: unique symbol;
declare const QueueLike_peek: unique symbol;
declare const QueueLike_pop: unique symbol;
declare const QueueLike_push: unique symbol;
interface QueueLike<T> {
    readonly [QueueLike_count]: number;
    [QueueLike_clear](): void;
    [QueueLike_peek](): Optional<T>;
    [QueueLike_pop](): Optional<T>;
    [QueueLike_push](item: T): void;
}
export { DisposableRefLike, MutableRefLike, MutableRefLike_current, QueueLike, QueueLike_clear, QueueLike_count, QueueLike_peek, QueueLike_pop, QueueLike_push };
