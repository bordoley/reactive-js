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
import { none } from "../functions.js";
import { DisposableLike } from "../utils.js";
import DisposableMixin from "../utils/__mixins__/DisposableMixin.js";
import LazyInitEventSourceMixin, {
  LazyInitEventSourceLike,
  LazyInitEventSourceMixin_publisher,
} from "./__mixins__/LazyInitEventSourceMixin.js";

export const create: <T>(initialValue: T) => WritableStoreLike<T> =
  /*@__PURE__*/ (<T>() => {
    type TProperties = {
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
        ): WritableStoreLike<T> & DisposableLike {
          init(DisposableMixin, instance);
          init(LazyInitEventSourceMixin(), instance);

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
              this[LazyInitEventSourceMixin_publisher]?.[SinkLike_notify](
                value,
              );
            }
          },
        },
      ),
    );
  })();
