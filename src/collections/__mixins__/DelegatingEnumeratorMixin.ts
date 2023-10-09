import { Mixin1, mix, props } from "../../__internal__/mixins.js";
import { EnumeratorLike } from "../../collections.js";
import { none, returns } from "../../functions.js";

export const DelegatingEnumeratorMixinLike_delegate = Symbol(
  "DelegatingEnumeratorMixin_delegate",
);

export interface DelegatingEnumeratorMixinLike<T = unknown> {
  readonly [DelegatingEnumeratorMixinLike_delegate]: EnumeratorLike<T>;
}

const DelegatingEnumeratorMixin: <T>() => Mixin1<
  DelegatingEnumeratorMixinLike<T>,
  EnumeratorLike<T>
> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [DelegatingEnumeratorMixinLike_delegate]: EnumeratorLike<T>;
  };

  return returns(
    mix(
      function DelegatingEnumeratorMixin(
        instance: TProperties,
        delegate: EnumeratorLike<T>,
      ): DelegatingEnumeratorMixinLike<T> {
        instance[DelegatingEnumeratorMixinLike_delegate] = delegate;

        return instance;
      },
      props<TProperties>({
        [DelegatingEnumeratorMixinLike_delegate]: none,
      }),
      {},
    ),
  );
})();

export default DelegatingEnumeratorMixin;
