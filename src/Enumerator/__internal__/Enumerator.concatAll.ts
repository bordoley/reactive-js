import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import type * as Enumerator from "../../Enumerator.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { __ConcatEnumerator_inner } from "../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../__internal__/types.js";
import { none, unsafeCast } from "../../functions.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
} from "../../types.js";
import Enumerator_empty from "./Enumerator.empty.js";

const Enumerator_concatAll: Enumerator.Signature["concatAll"] = /*@__PURE__*/ (<
  T,
>() => {
  type TProperties = {
    [__ConcatEnumerator_inner]: EnumeratorLike<T>;
  };
  const createConcatAllEnumerator = createInstanceFactory(
    mix(
      include(Delegating_mixin()),
      function ConcatAllEnumerator(
        instance: EnumeratorLike<T> & TProperties,
        delegate: EnumeratorLike<EnumeratorLike<T>>,
      ): EnumeratorLike<T> {
        init(Delegating_mixin(), instance, delegate);

        instance[__ConcatEnumerator_inner] = Enumerator_empty();

        return instance;
      },
      props<TProperties>({
        [__ConcatEnumerator_inner]: none,
      }),
      {
        get [EnumeratorLike_current]() {
          unsafeCast<TProperties>(this);
          return this[__ConcatEnumerator_inner][EnumeratorLike_current];
        },

        get [EnumeratorLike_hasCurrent]() {
          unsafeCast<TProperties>(this);
          return this[__ConcatEnumerator_inner][EnumeratorLike_hasCurrent];
        },

        [EnumeratorLike_move](
          this: TProperties &
            EnumeratorLike<T> &
            DelegatingLike<EnumeratorLike<EnumeratorLike<T>>>,
        ): boolean {
          const delegate = this[DelegatingLike_delegate];
          let inner = this[__ConcatEnumerator_inner];

          while (!inner[EnumeratorLike_move]()) {
            if (delegate[EnumeratorLike_move]()) {
              inner = delegate[EnumeratorLike_current];
              this[__ConcatEnumerator_inner] = inner;
            } else {
              inner = Enumerator_empty();
              this[__ConcatEnumerator_inner] = inner;
              break;
            }
          }

          return this[EnumeratorLike_hasCurrent];
        },
      },
    ),
  );

  return () => (delegate: EnumeratorLike<EnumeratorLike<T>>) =>
    createConcatAllEnumerator(delegate);
})();

export default Enumerator_concatAll;
