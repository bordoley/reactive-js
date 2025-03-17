import { MAX_SAFE_INTEGER } from "../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
  super_,
} from "../__internal__/mixins.js";
import { Comparator, Optional, none } from "../functions.js";
import {
  BackpressureStrategy,
  QueueLike,
  QueueLike_count,
  QueueLike_dequeue,
  QueueLike_enqueue,
} from "../utils.js";
import QueueMixin from "./__mixins__/QueueMixin.js";

const createInternal: <T>(options?: {
  comparator?: Comparator<T>;
}) => QueueLike<T> = /*@__PURE__*/ (<T>() => {
  const createQueue = mixInstanceFactory(
    include(QueueMixin()),
    function Queue(
      this: unknown,
      options: Optional<{
        comparator?: Comparator<T>;
      }>,
    ): QueueLike<T> {
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

export const create = <T>(): QueueLike<T> => createInternal();

export const createSorted = <T>(comparator: Comparator<T>): QueueLike<T> =>
  createInternal({
    comparator,
  });

export const createDropOldest: <T>(capacity: number) => QueueLike<T> =
  /*@__PURE__*/ (<T>() => {
    const DropOldestQueue_capacity = Symbol("DropOldestQueue_capacity");
    type TProperties = {
      [DropOldestQueue_capacity]: number;
    };
    return mixInstanceFactory(
      include(QueueMixin()),
      function DropOldestQueue(
        this: TProperties,
        capacity: number,
      ): QueueLike<T> {
        init(QueueMixin<T>(), this, none);

        this[DropOldestQueue_capacity] = capacity;

        return this;
      },
      props<TProperties>({
        [DropOldestQueue_capacity]: MAX_SAFE_INTEGER,
      }),
      proto({
        [QueueLike_enqueue](this: TProperties & QueueLike<T>, v: T) {
          const capacity = this[DropOldestQueue_capacity];
          const applyBackpressure = this[QueueLike_count] >= capacity;

          if (applyBackpressure) {
            this[QueueLike_dequeue]();
          }

          if (capacity > 0) {
            super_(QueueMixin(), this, QueueLike_enqueue, v);
          }
        },
      }),
    );
  })();
