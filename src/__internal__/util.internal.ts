import { Optional } from "../functions.js";
import { DisposableLike, QueueableLike } from "../util.js";
import { DelegatingLike } from "./mixins.js";
import {
  IndexedLike_get,
  IndexedLike_set,
  QueueLike_count,
  QueueLike_dequeue,
  QueueLike_head,
  SerialDisposableLike_current,
  StackLike_head,
  StackLike_pop,
} from "./symbols.js";

export {
  SerialDisposableLike_current,
  QueueLike_head,
  QueueLike_dequeue,
  QueueLike_count,
  IndexedLike_get,
  IndexedLike_set,
  StackLike_pop,
  StackLike_head,
};

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

export interface QueueLike<T> extends QueueableLike<T> {
  readonly [QueueLike_count]: number;
  readonly [QueueLike_head]: Optional<T>;

  [QueueLike_dequeue](): Optional<T>;
}

export interface IndexedLike<T> {
  [IndexedLike_get](index: number): T;
  [IndexedLike_set](index: number, value: T): T;
}

export interface StackLike<T> {
  readonly [StackLike_head]: Optional<T>;
  [StackLike_pop](): Optional<T>;
}

export interface IndexedQueueLike<T>
  extends QueueLike<T>,
    IndexedLike<T>,
    StackLike<T> {}
