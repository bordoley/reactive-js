import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mixin1,
  delegatingMixin,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { returns, unsafeCast } from "../../../functions.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  SourceLike_move,
} from "../../../ix.js";
import { DisposableLike } from "../../../util.js";

type TDelegatingEnumeratorMixinReturn<T> = Omit<
  EnumeratorLike<T>,
  keyof DisposableLike | typeof SourceLike_move
>;

const DelegatingEnumerator_mixin: <T>() => Mixin1<
  TDelegatingEnumeratorMixinReturn<T>,
  EnumeratorLike<T>
> = /*@__PURE__*/ (<T>() =>
  returns(
    mix(
      include(delegatingMixin()),
      function DelegatingEnumerator(
        instance: Pick<
          EnumeratorLike<T>,
          typeof EnumeratorLike_current | typeof EnumeratorLike_hasCurrent
        >,
        delegate: EnumeratorLike<T>,
      ): TDelegatingEnumeratorMixinReturn<T> {
        init(delegatingMixin(), instance, delegate);

        return instance;
      },
      props({}),
      {
        get [EnumeratorLike_current](): T {
          unsafeCast<DelegatingLike<EnumeratorLike<T>>>(this);
          return this[DelegatingLike_delegate][EnumeratorLike_current];
        },
        get [EnumeratorLike_hasCurrent](): boolean {
          unsafeCast<DelegatingLike<EnumeratorLike<T>>>(this);
          return this[DelegatingLike_delegate][EnumeratorLike_hasCurrent];
        },
      },
    ),
  ))();

export default DelegatingEnumerator_mixin;
