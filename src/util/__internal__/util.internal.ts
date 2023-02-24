import { DelegatingLike } from "../../__internal__/mixins.js";
import { Optional } from "../../functions.js";
import { DisposableLike, QueueableLike } from "../../util.js";

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

export const PullableQueueLike_peek = Symbol("PullableQueueLike_peek");
export const PullableQueueLike_pull = Symbol("PullableQueueLike_pull");

export interface PullableQueueLike<T> extends QueueableLike<T> {
  [PullableQueueLike_peek](): Optional<T>;
  [PullableQueueLike_pull](): Optional<T>;
}
