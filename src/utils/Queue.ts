import { include, init, mixInstanceFactory } from "../__internal__/mixins.js";
import { Comparator, Optional } from "../functions.js";
import { QueueLike } from "../utils.js";
import DisposableMixin from "./__mixins__/DisposableMixin.js";
import QueueMixin from "./__mixins__/QueueMixin.js";

const createInternal: <T>(options?: {
  comparator?: Comparator<T>;
}) => QueueLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(DisposableMixin, QueueMixin()),
    function Queue(
      this: unknown,
      options: Optional<{
        comparator?: Comparator<T>;
      }>,
    ): QueueLike<T> {
      init(DisposableMixin, this);
      init(QueueMixin<T>(), this, options);

      return this;
    },
  ))();

export const create = <T>(): QueueLike<T> => createInternal();

export const createSorted = <T>(comparator: Comparator<T>): QueueLike<T> =>
  createInternal({
    comparator,
  });
