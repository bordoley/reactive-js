import { DelegatingLike } from "../../__internal__/mixins.js";
import { Optional } from "../../functions.js";
import {
  DisposableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  QueueLike,
} from "../../util.js";

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

export interface PullableQueueLike<T> extends QueueLike<T> {
  [PullableQueueLike_peek](): Optional<T>;
  [PullableQueueLike_pull](): Optional<T>;
}

export const IndexedQueueLike_get = Symbol("IndexedQueueLike_get");
export interface IndexedQueueLike<T> extends PullableQueueLike<T> {
  [IndexedQueueLike_get](index: number): T;
}

export interface MutableEnumeratorLike<T = unknown> extends EnumeratorLike<T> {
  [EnumeratorLike_current]: T;
}
