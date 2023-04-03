import { Optional } from "../functions.js";
import {
  CollectionLike,
  DisposableLike,
  IndexedCollectionLike,
  QueueableLike,
} from "../util.js";
import { DelegatingLike } from "./mixins.js";
import {
  MutableIndexedCollectionLike_set,
  QueueLike_dequeue,
  QueueLike_head,
  SerialDisposableLike_current,
  StackLike_head,
  StackLike_pop,
} from "./symbols.js";

export {
  MutableIndexedCollectionLike_set,
  SerialDisposableLike_current,
  QueueLike_head,
  QueueLike_dequeue,
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

export interface QueueLike<T = unknown>
  extends QueueableLike<T>,
    CollectionLike {
  readonly [QueueLike_head]: Optional<T>;

  [QueueLike_dequeue](): Optional<T>;
}

export interface StackLike<T = unknown> {
  readonly [StackLike_head]: Optional<T>;
  [StackLike_pop](): Optional<T>;
}

export interface MutableIndexedCollectionLike<T = unknown>
  extends IndexedCollectionLike<T> {
  [MutableIndexedCollectionLike_set](index: number, value: T): T;
}

export interface IndexedQueueLike<T = unknown>
  extends QueueLike<T>,
    MutableIndexedCollectionLike<T>,
    StackLike<T> {}
