import {
  include,
  init,
  mixInstanceFactory,
  props,
  unsafeCast,
} from "../__internal__/mixins.js";
import {
  EventListenerLike_notify,
  StoreLike_value,
  WritableStoreLike,
} from "../events.js";
import { Equality, none, strictEquality } from "../functions.js";
import DisposableMixin from "../utils/__mixins__/DisposableMixin.js";
import LazyInitEventSourceMixin, {
  LazyInitEventSourceLike,
  LazyInitEventSourceLike_publisher,
} from "./__mixins__/LazyInitEventSourceMixin.js";

export const create: <T>(
  initialValue: T,
  options?: {
    readonly equality?: Equality<T>;
  },
) => WritableStoreLike<T> = /*@__PURE__*/ (<T>() => {
  const WritableStore_equality = Symbol("WritableStore_equality");
  const WritableStore_value = Symbol("WritableStore_value");

  type TProperties = {
    [WritableStore_equality]: Equality<T>;
    [WritableStore_value]: T;
  };
  return mixInstanceFactory(
    include(LazyInitEventSourceMixin(), DisposableMixin),
    function WritableStore(
      instance: {
        [StoreLike_value]: T;
      } & TProperties,
      initialValue: T,
      options?: {
        readonly equality?: Equality<T>;
      },
    ): WritableStoreLike<T> {
      init(DisposableMixin, instance);
      init(LazyInitEventSourceMixin(), instance);

      instance[WritableStore_value] = initialValue;
      instance[WritableStore_equality] = options?.equality ?? strictEquality;

      return instance;
    },
    props<TProperties>({
      [WritableStore_equality]: none,
      [WritableStore_value]: none,
    }),
    {
      get [StoreLike_value]() {
        unsafeCast<TProperties>(this);
        return this[WritableStore_value];
      },
      set [StoreLike_value](value: T) {
        unsafeCast<TProperties & LazyInitEventSourceLike<T>>(this);

        if (!this[WritableStore_equality](this[WritableStore_value], value)) {
          this[WritableStore_value] = value;
          this[LazyInitEventSourceLike_publisher]?.[EventListenerLike_notify](
            value,
          );
        }
      },
    },
  );
})();
