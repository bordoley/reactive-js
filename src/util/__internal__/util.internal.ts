import { DelegatingLike } from "../../__internal__/mixins.js";
import { Optional } from "../../functions.js";
import { DisposableLike } from "../../util.js";

export const MutableRefLike_current = Symbol("MutableRefLike_current");

export interface MutableRefLike<T = unknown> {
  get [MutableRefLike_current](): T;
  set [MutableRefLike_current](v: T);
}

export interface DisposableRefLike<
  TDisposable extends DisposableLike = DisposableLike,
> extends DisposableLike,
    MutableRefLike<TDisposable> {}

export interface DelegatingDisposableLike<
  TDisposable extends DisposableLike = DisposableLike,
> extends DelegatingLike<TDisposable>,
    DisposableLike {}

export const QueueLike_clear = Symbol("QueueLike_clear");
export const QueueLike_count = Symbol("QueueLike_count");
export const QueueLike_peek = Symbol("QueueLike_peek");
export const QueueLike_pop = Symbol("QueueLike_pop");
export const QueueLike_push = Symbol("QueueLike_push");

export interface QueueLike<T> {
  readonly [QueueLike_count]: number;

  [QueueLike_clear](): void;
  [QueueLike_peek](): Optional<T>;
  [QueueLike_pop](): Optional<T>;
  [QueueLike_push](item: T): void;
}
