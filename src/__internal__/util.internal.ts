import { Optional } from "../functions.js";
import { DisposableLike, QueueableLike } from "../util.js";
import { DelegatingLike } from "./mixins.js";

export const SerialDisposableLike_current = Symbol(
  "SerialDisposableLike_current",
);

export interface SerialDisposableLike<
  TDisposable extends DisposableLike = DisposableLike,
> extends DisposableLike {
  get [SerialDisposableLike_current](): TDisposable;
  set [SerialDisposableLike_current](v: TDisposable);
}

export interface DelegatingDisposableLike<
  TDisposable extends DisposableLike = DisposableLike,
> extends DelegatingLike<TDisposable>,
    DisposableLike {}

export const PullableQueueLike_head = Symbol("PullableQueueLike_head");
export const PullableQueueLike_pull = Symbol("PullableQueueLike_pull");

export interface PullableQueueLike<T> extends QueueableLike<T> {
  readonly [PullableQueueLike_head]: Optional<T>;

  [PullableQueueLike_pull](): Optional<T>;
}

export const IndexedQueueLike_get = Symbol("IndexedQueueLike_get");
export interface IndexedQueueLike<T> extends PullableQueueLike<T> {
  [IndexedQueueLike_get](index: number): T;
}
