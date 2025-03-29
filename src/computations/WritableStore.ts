import {
  include,
  init,
  mixInstanceFactory,
  props,
  super_,
  unsafeCast,
} from "../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isSynchronous,
  PublisherLike,
  StoreLike_value,
  WritableStoreLike,
} from "../computations.js";
import { Equality, none, strictEquality } from "../functions.js";
import { EventListenerLike_notify } from "../utils.js";
import PublisherMixin from "./__mixins__/PublisherMixin.js";

export const create: <T>(
  initialValue: T,
  options?: {
    readonly equality?: Equality<T>;
    readonly autoDispose?: boolean;
  },
) => WritableStoreLike<T> = /*@__PURE__*/ (<T>() => {
  const WritableStore_equality = Symbol("WritableStore_equality");
  const WritableStore_value = Symbol("WritableStore_value");

  type TProperties = {
    [WritableStore_equality]: Equality<T>;
    [WritableStore_value]: T;
  };

  return mixInstanceFactory(
    include(PublisherMixin<T>()),
    function WritableStore(
      this: TProperties & Omit<WritableStoreLike<T>, keyof PublisherLike<T>>,
      initialValue: T,
      options?: {
        readonly equality?: Equality<T>;
        readonly autoDispose?: boolean;
      },
    ): WritableStoreLike<T> {
      init(PublisherMixin<T>(), this, options);

      this[WritableStore_value] = initialValue;
      this[WritableStore_equality] = options?.equality ?? strictEquality;

      return this;
    },
    props<TProperties>({
      [WritableStore_equality]: none,
      [WritableStore_value]: none,
    }),
    {
      [ComputationLike_isDeferred]: false as const,
      [ComputationLike_isSynchronous]: false as const,

      get [StoreLike_value]() {
        unsafeCast<TProperties>(this);
        return this[WritableStore_value];
      },
      set [StoreLike_value](value: T) {
        unsafeCast<TProperties & WritableStoreLike<T>>(this);
        this[EventListenerLike_notify](value);
      },
      [EventListenerLike_notify](
        this: TProperties & WritableStoreLike<T>,
        v: T,
      ) {
        if (!this[WritableStore_equality](this[WritableStore_value], v)) {
          this[WritableStore_value] = v;

          super_(PublisherMixin<T>(), this, EventListenerLike_notify, v);
        }
      },
    },
  );
})();
