import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
  unsafeCast,
} from "../__internal__/mixins.js";
import {
  SinkLike_notify,
  StoreLike_value,
  WritableStoreLike,
} from "../events.js";
import { Equality, none, strictEquality } from "../functions.js";
import { DisposableLike } from "../utils.js";
import DisposableMixin from "../utils/__mixins__/DisposableMixin.js";
import LazyInitEventSourceMixin, {
  LazyInitEventSourceLike,
  LazyInitEventSourceMixin_publisher,
} from "./__mixins__/LazyInitEventSourceMixin.js";

export const create: <T>(
  initialValue: T,
  options?: {
    readonly equality?: Equality<T>;
  },
) => WritableStoreLike<T> = /*@__PURE__*/ (<T>() => {
  const WritableStore_equality = Symbol("WritableStore_equality");

  type TProperties = {
    [WritableStore_equality]: Equality<T>;
    v: T;
  };
  return createInstanceFactory(
    mix(
      include(LazyInitEventSourceMixin(), DisposableMixin),
      function WritableStore(
        instance: {
          [StoreLike_value]: T;
        } & TProperties,
        initialValue: T,
        options?: {
          readonly equality?: Equality<T>;
        },
      ): WritableStoreLike<T> & DisposableLike {
        init(DisposableMixin, instance);
        init(LazyInitEventSourceMixin(), instance);

        instance.v = initialValue;
        instance[WritableStore_equality] = options?.equality ?? strictEquality;

        return instance;
      },
      props<TProperties>({
        [WritableStore_equality]: none,
        v: none,
      }),
      {
        get [StoreLike_value]() {
          unsafeCast<TProperties>(this);
          return this.v;
        },
        set [StoreLike_value](value: T) {
          unsafeCast<TProperties & LazyInitEventSourceLike<T>>(this);

          if (!this[WritableStore_equality](this.v, value)) {
            this.v = value;
            this[LazyInitEventSourceMixin_publisher]?.[SinkLike_notify](value);
          }
        },
      },
    ),
  );
})();
