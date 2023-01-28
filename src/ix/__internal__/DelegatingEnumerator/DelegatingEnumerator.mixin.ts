import { Mixin1, Mutable, mix, props } from "../../../__internal__/mixins";
import { none, pipe, returns, unsafeCast } from "../../../functions";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  SourceLike_move,
} from "../../../ix";
import { DisposableLike } from "../../../util";
import {
  DelegatingEnumeratorLike,
  DelegatingEnumeratorLike_delegate,
} from "../ix.internal";

type TDelegatingEnumeratorMixinReturn<T> = Omit<
  EnumeratorLike<T>,
  keyof DisposableLike | typeof SourceLike_move
>;

const DelegatingEnumerator_mixin: <T>() => Mixin1<
  TDelegatingEnumeratorMixinReturn<T>,
  EnumeratorLike<T>
> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    readonly [DelegatingEnumeratorLike_delegate]: EnumeratorLike<T>;
  };

  return pipe(
    mix(
      function DelegatingEnumerator(
        instance: Pick<
          DelegatingEnumeratorLike<T>,
          | typeof EnumeratorLike_current
          | typeof EnumeratorLike_hasCurrent
          | typeof DelegatingEnumeratorLike_delegate
        > &
          Mutable<TProperties>,
        delegate: EnumeratorLike<T>,
      ): TDelegatingEnumeratorMixinReturn<T> {
        instance[DelegatingEnumeratorLike_delegate] = delegate;

        return instance;
      },
      props<TProperties>({
        [DelegatingEnumeratorLike_delegate]: none,
      }),
      {
        get [EnumeratorLike_current](): T {
          unsafeCast<TProperties>(this);
          return this[DelegatingEnumeratorLike_delegate][
            EnumeratorLike_current
          ];
        },
        get [EnumeratorLike_hasCurrent](): boolean {
          unsafeCast<TProperties>(this);
          return this[DelegatingEnumeratorLike_delegate][
            EnumeratorLike_hasCurrent
          ];
        },
      },
    ),
    returns,
  );
})();

export default DelegatingEnumerator_mixin;
