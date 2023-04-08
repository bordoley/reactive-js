import { Optional } from "../functions.js";
import {
  CollectionLike,
  DisposableLike,
  IndexedCollectionLike,
  QueueableLike,
} from "../util.js";
import {
  __MutableKeyedCollectionLike_set as MutableKeyedCollectionLike_set,
  __QueueLike_dequeue as QueueLike_dequeue,
  __QueueLike_head as QueueLike_head,
  __SerialDisposableLike_current as SerialDisposableLike_current,
  __StackLike_head as StackLike_head,
  __StackLike_pop as StackLike_pop,
} from "./symbols.js";

export {
  MutableKeyedCollectionLike_set,
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

export interface MutableKeyedCollectionLike<TKey = unknown, T = unknown>
  extends IndexedCollectionLike<T> {
  [MutableKeyedCollectionLike_set](key: TKey, value: T): T;
}

export interface MutableIndexedCollectionLike<T = unknown>
  extends IndexedCollectionLike<T>,
    MutableKeyedCollectionLike<number, T> {}

export interface IndexedQueueLike<T = unknown>
  extends QueueLike<T>,
    MutableIndexedCollectionLike<T>,
    StackLike<T> {}
