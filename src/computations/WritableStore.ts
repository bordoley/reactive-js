import {
  getPrototype,
  include,
  init,
  mixInstanceFactory,
  props,
  unsafeCast,
} from "../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isSynchronous,
  EventSourceLike_addEventListener,
  StoreLike_value,
  WritableStoreLike,
} from "../computations.js";
import { Equality, call, none, strictEquality } from "../functions.js";
import { DisposableLike, EventListenerLike_notify } from "../utils.js";
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
  const publisherPrototype = getPrototype(PublisherMixin<T>());

  return mixInstanceFactory(
    include(PublisherMixin<T>()),
    function WritableStore(
      instance: TProperties &
        Omit<
          WritableStoreLike<T>,
          keyof DisposableLike | typeof EventSourceLike_addEventListener
        >,
      initialValue: T,
      options?: {
        readonly equality?: Equality<T>;
        readonly autoDispose?: boolean;
      },
    ): WritableStoreLike<T> {
      init(PublisherMixin<T>(), instance, options);

      instance[WritableStore_value] = initialValue;
      instance[WritableStore_equality] = options?.equality ?? strictEquality;

      return instance;
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
          call(publisherPrototype[EventListenerLike_notify], this, v);
        }
      },
    },
  );
})();
