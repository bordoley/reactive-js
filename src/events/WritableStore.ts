import {
  include,
  init,
  mixInstanceFactory,
  props,
  unsafeCast,
} from "../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isSynchronous,
} from "../computations.js";
import {
  EventListenerLike,
  EventListenerLike_notify,
  EventSourceLike,
  EventSourceLike_addEventListener,
  PublisherLike,
  StoreLike_value,
  WritableStoreLike,
} from "../events.js";
import { Equality, none, strictEquality } from "../functions.js";
import DelegatingDisposableMixin from "../utils/__mixins__/DelegatingDisposableMixin.js";
import * as Publisher from "./Publisher.js";

export const create: <T>(
  initialValue: T,
  options?: {
    readonly equality?: Equality<T>;
    readonly autoDispose?: boolean;
  },
) => WritableStoreLike<T> = /*@__PURE__*/ (<T>() => {
  const WritableStore_equality = Symbol("WritableStore_equality");
  const WritableStore_value = Symbol("WritableStore_value");
  const WritableStore_publisher = Symbol("WritableStore_publisher");

  type TProperties = {
    [WritableStore_equality]: Equality<T>;
    [WritableStore_value]: T;
    [WritableStore_publisher]: PublisherLike<T>;
  };
  return mixInstanceFactory(
    include(DelegatingDisposableMixin()),
    function WritableStore(
      instance: {
        [StoreLike_value]: T;
      } & TProperties &
        EventSourceLike<T>,
      initialValue: T,
      options?: {
        readonly equality?: Equality<T>;
        readonly autoDispose?: boolean;
      },
    ): WritableStoreLike<T> {
      const publisher = Publisher.create(options);
      init(DelegatingDisposableMixin(), instance, publisher);

      instance[WritableStore_value] = initialValue;
      instance[WritableStore_equality] = options?.equality ?? strictEquality;
      instance[WritableStore_publisher] = publisher;

      return instance;
    },
    props<TProperties>({
      [WritableStore_equality]: none,
      [WritableStore_value]: none,
      [WritableStore_publisher]: none,
    }),
    {
      [ComputationLike_isDeferred]: false as const,
      [ComputationLike_isSynchronous]: false as const,

      get [StoreLike_value]() {
        unsafeCast<TProperties>(this);
        return this[WritableStore_value];
      },
      set [StoreLike_value](value: T) {
        unsafeCast<TProperties>(this);

        if (!this[WritableStore_equality](this[WritableStore_value], value)) {
          this[WritableStore_value] = value;
          this[WritableStore_publisher][EventListenerLike_notify](value);
        }
      },
      [EventSourceLike_addEventListener](
        this: TProperties,
        listener: EventListenerLike<T>,
      ): void {
        this[WritableStore_publisher][EventSourceLike_addEventListener](
          listener,
        );
      },
    },
  );
})();
