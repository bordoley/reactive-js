import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
  unsafeCast,
} from "../../../__internal__/mixins.js";
import { none } from "../../../functions.js";
import {
  SinkLike_notify,
  StoreLike_value,
  WritableStoreLike,
} from "../../../rx.js";
import { DisposableLike } from "../../../utils.js";
import Disposable_mixin from "../../../utils/Disposable/__internal__/Disposable.mixin.js";
import EventSource_lazyInitMixin, {
  LazyInitEventSourceLike,
  LazyInitEventSourceMixin_publisher,
} from "../../EventSource/__internal__/EventSource.lazyInitMixin.js";
import type * as WritableStore from "../../WritableStore.js";

const WritableStore_create: WritableStore.Signature["create"] = /*@__PURE__*/ (<
  T,
>() => {
  type TProperties = {
    v: T;
  };
  return createInstanceFactory(
    mix(
      include(EventSource_lazyInitMixin(), Disposable_mixin),
      function WritableStore(
        instance: {
          [StoreLike_value]: T;
        } & TProperties,
        initialValue: T,
      ): WritableStoreLike<T> & DisposableLike {
        init(Disposable_mixin, instance);
        init(EventSource_lazyInitMixin(), instance);

        instance.v = initialValue;

        return instance;
      },
      props<TProperties>({
        v: none,
      }),
      {
        get [StoreLike_value]() {
          unsafeCast<TProperties>(this);
          return this.v;
        },
        set [StoreLike_value](value: T) {
          unsafeCast<TProperties & LazyInitEventSourceLike<T>>(this);

          if (this.v !== value) {
            this.v = value;
            this[LazyInitEventSourceMixin_publisher]?.[SinkLike_notify](value);
          }
        },
      },
    ),
  );
})();

export default WritableStore_create;
