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

export const QueueLike_head = Symbol("QueueLike_head");
export const QueueLike_pull = Symbol("QueueLike_pull");
export const QueueLike_count = Symbol("QueueableLike_count");

export interface QueueLike<T> extends QueueableLike<T> {
  readonly [QueueLike_count]: number;
  readonly [QueueLike_head]: Optional<T>;

  [QueueLike_pull](): Optional<T>;
}

export const IndexedQueueLike_get = Symbol("IndexedQueueLike_get");
export interface IndexedQueueLike<T> extends QueueLike<T> {
  [IndexedQueueLike_get](index: number): T;
}
