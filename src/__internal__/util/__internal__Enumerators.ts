import { none, pipe, raise, returns, unsafeCast } from "../../functions";
import {
  DisposableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  SourceLike_move,
} from "../../util";
import { isDisposed } from "./__internal__DisposableLike";
import { Mixin, clazz, props } from "./__internal__Objects";

export interface MutableEnumeratorLike<T = unknown> extends EnumeratorLike<T> {
  [EnumeratorLike_current]: T;
}

type TEnumeratorMixinReturn<T> = Omit<
  MutableEnumeratorLike<T>,
  keyof DisposableLike | typeof SourceLike_move
>;

export const enumeratorMixin: <T>() => Mixin<TEnumeratorMixinReturn<T>> =
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
      clazz(
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
            if (!isDisposed(this)) {
              this[Enumerator_private_current] = v;
              this[Enumerator_private_hasCurrent] = true;
            }
          },
          get [EnumeratorLike_hasCurrent](): boolean {
            unsafeCast<TProperties & EnumeratorLike<T>>(this);
            return !isDisposed(this) && this[Enumerator_private_hasCurrent];
          },
        },
      ),
      returns,
    );
  })();
