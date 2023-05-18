import { Mixin, mix, props } from "../../../__internal__/mixins.js";
import {
  __MutableEnumeratorLike_reset as MutableEnumeratorLike_reset,
  __Enumerator_private_current,
} from "../../../__internal__/symbols.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
} from "../../../core.js";
import {
  none,
  pipe,
  raiseWithDebugMessage,
  returns,
  unsafeCast,
} from "../../../functions.js";
export { MutableEnumeratorLike_reset };

export interface MutableEnumeratorLike<T = unknown> extends EnumeratorLike<T> {
  [EnumeratorLike_current]: T;
  [MutableEnumeratorLike_reset](): void;
}

type TEnumeratorMixinReturn<T> = Omit<
  MutableEnumeratorLike<T>,
  typeof EnumeratorLike_move
>;

const MutableEnumerator_mixin: <T>() => Mixin<TEnumeratorMixinReturn<T>> =
  /*@__PURE__*/ (<T>() => {
    type TProperties = {
      [__Enumerator_private_current]: T;
      [EnumeratorLike_hasCurrent]: boolean;
    };

    return pipe(
      mix(
        function EnumeratorMixin(
          instance: Pick<
            MutableEnumeratorLike<T>,
            | typeof EnumeratorLike_current
            | typeof EnumeratorLike_hasCurrent
            | typeof MutableEnumeratorLike_reset
          > &
            TProperties,
        ): TEnumeratorMixinReturn<T> {
          return instance;
        },
        props<TProperties>({
          [__Enumerator_private_current]: none,
          [EnumeratorLike_hasCurrent]: false,
        }),
        {
          get [EnumeratorLike_current](): T {
            unsafeCast<TProperties & EnumeratorLike<T>>(this);
            return this[EnumeratorLike_hasCurrent]
              ? this[__Enumerator_private_current]
              : raiseWithDebugMessage("Enumerator does not have current value");
          },
          set [EnumeratorLike_current](v: T) {
            unsafeCast<TProperties & EnumeratorLike<T>>(this);
            this[__Enumerator_private_current] = v;
            this[EnumeratorLike_hasCurrent] = true;
          },
          [MutableEnumeratorLike_reset](this: TProperties) {
            this[__Enumerator_private_current] = none as T;
            this[EnumeratorLike_hasCurrent] = false;
          },
        },
      ),
      returns,
    );
  })();

export default MutableEnumerator_mixin;
