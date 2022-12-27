import { none, pipe, raise, returns, unsafeCast } from "../../functions";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  SourceLike_move,
} from "../../ix";
import { DisposableLike } from "../../util";
import DisposableLike__isDisposed from "../../util/__internal__/DisposableLike/DisposableLike.isDisposed";
import { Mixin, mixin, props } from "../mixins";

export interface MutableEnumeratorLike<T = unknown> extends EnumeratorLike<T> {
  [EnumeratorLike_current]: T;
}

type TEnumeratorMixinReturn<T> = Omit<
  MutableEnumeratorLike<T>,
  keyof DisposableLike | typeof SourceLike_move
>;

export const mutableEnumeratorMixin: <T>() => Mixin<TEnumeratorMixinReturn<T>> =
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
      mixin(
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
            if (!DisposableLike__isDisposed(this)) {
              this[Enumerator_private_current] = v;
              this[Enumerator_private_hasCurrent] = true;
            }
          },
          get [EnumeratorLike_hasCurrent](): boolean {
            unsafeCast<TProperties & EnumeratorLike<T>>(this);
            return (
              !DisposableLike__isDisposed(this) &&
              this[Enumerator_private_hasCurrent]
            );
          },
        },
      ),
      returns,
    );
  })();
