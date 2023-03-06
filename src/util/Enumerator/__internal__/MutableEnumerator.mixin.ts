import { Mixin, mix, props } from "../../../__internal__/mixins.js";
import {
  none,
  pipe,
  raiseWithDebugMessage,
  returns,
  unsafeCast,
} from "../../../functions.js";
import {
  DisposableLike,
  DisposableLike_isDisposed,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
} from "../../../util.js";
import { MutableEnumeratorLike } from "../../__internal__/util.internal.js";

type TEnumeratorMixinReturn<T> = Omit<
  MutableEnumeratorLike<T>,
  keyof DisposableLike | typeof EnumeratorLike_move
>;

const MutableEnumerator_mixin: <T>() => Mixin<TEnumeratorMixinReturn<T>> =
  /*@__PURE__*/ (<T>() => {
    const Enumerator_private_current = Symbol("Enumerator_private_current");
    const Enumerator_private_hasCurrent = Symbol(
      "Enumerator_private_hasCurrent",
    );

    type TProperties = {
      [Enumerator_private_current]: T;
      [Enumerator_private_hasCurrent]: boolean;
    };

    return pipe(
      mix(
        function EnumeratorMixin(
          instance: Pick<
            EnumeratorLike<T>,
            typeof EnumeratorLike_current | typeof EnumeratorLike_hasCurrent
          > &
            TProperties,
        ): TEnumeratorMixinReturn<T> {
          instance[Enumerator_private_hasCurrent] = false;

          return instance;
        },
        props<TProperties>({
          [Enumerator_private_current]: none,
          [Enumerator_private_hasCurrent]: false,
        }),
        {
          get [EnumeratorLike_current](): T {
            unsafeCast<TProperties & EnumeratorLike<T>>(this);
            return this[EnumeratorLike_hasCurrent]
              ? this[Enumerator_private_current]
              : raiseWithDebugMessage("Enumerator does not have current value");
          },
          set [EnumeratorLike_current](v: T) {
            unsafeCast<TProperties & EnumeratorLike<T>>(this);
            if (!this[DisposableLike_isDisposed]) {
              this[Enumerator_private_current] = v;
              this[Enumerator_private_hasCurrent] = true;
            }
          },
          get [EnumeratorLike_hasCurrent](): boolean {
            unsafeCast<TProperties & EnumeratorLike<T>>(this);
            return (
              !this[DisposableLike_isDisposed] &&
              this[Enumerator_private_hasCurrent]
            );
          },
        },
      ),
      returns,
    );
  })();

export default MutableEnumerator_mixin;
