import { DelegatingLike } from "../../__internal__/mixins.js";
import { Optional } from "../../functions.js";
import { DisposableLike } from "../../util.js";
declare const MutableRefLike_current: unique symbol;
interface MutableRefLike<T = unknown> {
    get [MutableRefLike_current](): T;
    set [MutableRefLike_current](v: T);
}
interface DisposableRefLike<TDisposable extends DisposableLike = DisposableLike> extends DisposableLike, MutableRefLike<TDisposable> {
}
interface DelegatingDisposableLike<TDisposable extends DisposableLike = DisposableLike> extends DelegatingLike<TDisposable>, DisposableLike {
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
export { DelegatingDisposableLike, DisposableRefLike, MutableRefLike, MutableRefLike_current, QueueLike, QueueLike_clear, QueueLike_count, QueueLike_peek, QueueLike_pop, QueueLike_push };
