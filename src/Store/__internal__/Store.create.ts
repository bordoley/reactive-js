import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import EventSource_lazyInitPublisherMixin from "../../EventSource/__internal__/EventSource.lazyInitPublisherMixin.js";
import type * as Store from "../../Store.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { none, unsafeCast } from "../../functions.js";
import {
  EventListenerLike,
  EventListenerLike_notify,
  StoreLike_value,
  WritableStoreLike,
} from "../../types.js";

const Store_create: Store.Signature["create"] = (<T>() => {
  type TProperties = {
    v: T;
  };
  return createInstanceFactory(
    mix(
      include(EventSource_lazyInitPublisherMixin(), Disposable_mixin),
      function WritableStore(
        instance: {
          [StoreLike_value]: T;
        } & TProperties,
        initialValue: T,
      ): WritableStoreLike<T> {
        init(Disposable_mixin, instance);
        init(EventSource_lazyInitPublisherMixin(), instance);

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
          unsafeCast<TProperties & EventListenerLike<T>>(this);
          this.v = value;
          this[EventListenerLike_notify](value);
        },
      },
    ),
  );
})();

export default Store_create;
