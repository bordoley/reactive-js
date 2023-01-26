import { Mixin, mix, props } from "../../../__internal__/mixins";
import { none, pipe, raise, returns, unsafeCast } from "../../../functions";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  SourceLike_move,
} from "../../../ix";
import { DisposableLike } from "../../../util";
import Disposable$isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import { MutableEnumeratorLike } from "../ix.internal";

type TEnumeratorMixinReturn<T> = Omit<
  MutableEnumeratorLike<T>,
  keyof DisposableLike | typeof SourceLike_move
>;

const MutableEnumerator$mixin: <T>() => Mixin<TEnumeratorMixinReturn<T>> =
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
              : raise();
          },
          set [EnumeratorLike_current](v: T) {
            unsafeCast<TProperties & EnumeratorLike<T>>(this);
            if (!Disposable$isDisposed(this)) {
              this[Enumerator_private_current] = v;
              this[Enumerator_private_hasCurrent] = true;
            }
          },
          get [EnumeratorLike_hasCurrent](): boolean {
            unsafeCast<TProperties & EnumeratorLike<T>>(this);
            return (
              !Disposable$isDisposed(this) &&
              this[Enumerator_private_hasCurrent]
            );
          },
        },
      ),
      returns,
    );
  })();

export default MutableEnumerator$mixin;
