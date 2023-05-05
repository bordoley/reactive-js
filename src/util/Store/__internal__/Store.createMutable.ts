import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { MutableStoreLike } from "../../../__internal__/util.js";
import { none, unsafeCast } from "../../../functions.js";
import {
  EventListenerLike,
  EventListenerLike_notify,
  StoreLike_value,
} from "../../../util.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import EventPublisher_lazyInitMixin from "../../EventPublisher/__internal__/EventPublisher.lazyInitMixin.js";

const Store_createMutable: <T>(initialValue: T) => MutableStoreLike<T> = (<
  T,
>() => {
  type TProperties = {
    v: T;
  };
  return createInstanceFactory(
    mix(
      include(EventPublisher_lazyInitMixin(), Disposable_mixin),
      function MutableStore(instance: {
        [StoreLike_value]: T;
      }): MutableStoreLike<T> {
        init(Disposable_mixin, instance);
        init(EventPublisher_lazyInitMixin(), instance);

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

export default Store_createMutable;
