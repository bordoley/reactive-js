import { Mixin1, Mutable, mix, props } from "../../../__internal__/mixins";
import { none, pipe, raise, returns, unsafeCast } from "../../../functions";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  SourceLike_move,
} from "../../../ix";
import { DisposableLike } from "../../../util";
import move from "../EnumeratorLike/EnumeratorLike.move";
import {
  DelegatingEnumeratorLike,
  DelegatingEnumerator_move_delegate,
} from "../ix.internal";

type TDelegatingEnumeratorMixinReturn<T> = Omit<
  EnumeratorLike<T>,
  keyof DisposableLike | typeof SourceLike_move
>;

const DelegatingEnumeratorLike__mixin: <T>() => Mixin1<
  TDelegatingEnumeratorMixinReturn<T>,
  EnumeratorLike<T>
> = /*@__PURE__*/ (<T>() => {
  const DelegatingEnumerator_private_delegate = Symbol(
    "DelegatingEnumerator_private_delegate",
  );

  type TProperties = {
    readonly [DelegatingEnumerator_private_delegate]: EnumeratorLike<T>;
  };

  return pipe(
    mix(
      function DelegatingEnumerator(
        instance: Pick<
          DelegatingEnumeratorLike<T>,
          | typeof EnumeratorLike_current
          | typeof EnumeratorLike_hasCurrent
          | typeof DelegatingEnumerator_move_delegate
        > &
          Mutable<TProperties>,
        delegate: EnumeratorLike<T>,
      ): TDelegatingEnumeratorMixinReturn<T> {
        instance[DelegatingEnumerator_private_delegate] = delegate;

        return instance;
      },
      props<TProperties>({
        [DelegatingEnumerator_private_delegate]: none,
      }),
      {
        get [EnumeratorLike_current](): T {
          unsafeCast<TProperties>(this);
          return (
            this[DelegatingEnumerator_private_delegate]?.[
              EnumeratorLike_current
            ] ?? raise()
          );
        },
        get [EnumeratorLike_hasCurrent](): boolean {
          unsafeCast<TProperties>(this);
          return this[DelegatingEnumerator_private_delegate][
            EnumeratorLike_hasCurrent
          ];
        },
        [DelegatingEnumerator_move_delegate](this: TProperties): boolean {
          const delegate = this[DelegatingEnumerator_private_delegate];
          return move(delegate);
        },
      },
    ),
    returns,
  );
})();

export default DelegatingEnumeratorLike__mixin;
