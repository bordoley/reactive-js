import { MAX_SAFE_INTEGER } from "../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
  unsafeCast,
} from "../__internal__/mixins.js";
import { Comparator, Optional, none } from "../functions.js";
import {
  BackpressureStrategy,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  DropOldestBackpressureStrategy,
  EventListenerLike_notify,
  OverflowBackpressureStrategy,
  QueueLike,
  QueueableLike,
  QueueableLike_addOnReadyListener,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_isReady,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../utils.js";
import * as Disposable from "./Disposable.js";
import DisposableMixin from "./__mixins__/DisposableMixin.js";
import QueueMixin from "./__mixins__/QueueMixin.js";

const createInternal: <T>(options?: {
  autoDispose?: boolean;
  capacity?: number;
  comparator?: Comparator<T>;
  backpressureStrategy?: BackpressureStrategy;
}) => QueueLike<T> = /*@__PURE__*/ (<T>() => {
  const createQueue = mixInstanceFactory(
    include(DisposableMixin, QueueMixin()),
    function Queue(
      this: unknown,
      options: Optional<{
        autoDispose?: boolean;
        capacity?: number;
        comparator?: Comparator<T>;
        backpressureStrategy?: BackpressureStrategy;
      }>,
    ): QueueLike<T> {
      init(DisposableMixin, this);
      init(QueueMixin<T>(), this, options);

      return this;
    },
  );

  return (options?: {
    autoDispose?: boolean;
    capacity?: number;
    comparator?: Comparator<T>;
    backpressureStrategy?: BackpressureStrategy;
  }) => {
    return createQueue(
      options as Optional<{
        capacity?: number;
        comparator?: Comparator<unknown>;
        backpressureStrategy?: BackpressureStrategy;
      }>,
    );
  };
})();

export const create = <T>(options?: {
  autoDispose?: boolean;
  capacity?: number;
  backpressureStrategy?: BackpressureStrategy;
}): QueueLike<T> =>
  createInternal({
    capacity: options?.capacity,
    backpressureStrategy: options?.backpressureStrategy,
  });

export const createSorted = <T>(
  comparator: Comparator<T>,
  options?: {
    autoDispose?: boolean;
  },
): QueueLike<T> =>
  createInternal({
    autoDispose: options?.autoDispose,
    capacity: MAX_SAFE_INTEGER,
    backpressureStrategy: OverflowBackpressureStrategy,
    comparator,
  });

export const createDropOldestWithoutBackpressure: <T>(
  capacity: number,
  options?: {
    autoDispose?: boolean;
  },
) => QueueLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(DisposableMixin, QueueMixin()),
    function Queue(
      this: unknown,
      capacity: number,
      options: Optional<{
        autoDispose?: boolean;
      }>,
    ): QueueLike<T> {
      init(DisposableMixin, this);
      init(QueueMixin<T>(), this, {
        autoDispose: options?.autoDispose,
        backpressureStrategy: DropOldestBackpressureStrategy,
        capacity,
      });

      return this;
    },
    props(),
    proto({
      get [QueueableLike_isReady](): boolean {
        unsafeCast<QueueableLike<T>>(this);
        const isCompleted = this[SinkLike_isCompleted];

        return !isCompleted;
      },
    }),
  ))();

export const createCollector: <T>(options?: {
  autoDispose?: boolean;
}) => QueueableLike<T> & {
  readonly values: readonly T[];
} = /*@__PURE__*/ (<T>() => {
  const CollectorQueue_autoDispose = Symbol("CollectorQueue_autoDispose");
  type TProperties = {
    [CollectorQueue_autoDispose]: boolean;
    [SinkLike_isCompleted]: boolean;
    values: T[];
  };
  return mixInstanceFactory(
    include(DisposableMixin, QueueMixin()),
    function CollectorQueue(
      this: TProperties & Omit<QueueableLike<T>, keyof DisposableLike>,
      options: Optional<{
        autoDispose?: boolean;
      }>,
    ): QueueableLike<T> & { readonly values: readonly T[] } {
      init(DisposableMixin, this);

      this[CollectorQueue_autoDispose] = options?.autoDispose ?? false;

      this.values = [];

      return this;
    },
    props<TProperties>({
      [CollectorQueue_autoDispose]: false,
      [SinkLike_isCompleted]: false,
      values: none,
    }),
    proto({
      [QueueableLike_backpressureStrategy]:
        OverflowBackpressureStrategy as BackpressureStrategy,
      [QueueableLike_capacity]: MAX_SAFE_INTEGER,

      get [QueueableLike_isReady](): boolean {
        unsafeCast<QueueableLike<T>>(this);
        const isCompleted = this[SinkLike_isCompleted];
        const isDisposed = this[DisposableLike_isDisposed];

        return !isCompleted && !isDisposed;
      },

      [QueueableLike_addOnReadyListener]() {
        return Disposable.disposed;
      },

      [EventListenerLike_notify](this: TProperties, next: T) {
        this.values.push(next);
      },

      [SinkLike_complete](this: TProperties & DisposableLike) {
        this[SinkLike_isCompleted] = true;
        if (this[CollectorQueue_autoDispose]) {
          this[DisposableLike_dispose]();
        }
      },
    }),
  );
})();
