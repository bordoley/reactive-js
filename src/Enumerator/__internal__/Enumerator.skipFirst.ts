import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";

import { clampPositiveInteger } from "../../__internal__/math.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  SkipFirstLike,
  SkipFirstLike_count,
  SkipFirstLike_skipCount,
} from "../../__internal__/types.js";
import { Function1, unsafeCast } from "../../functions.js";
import {
  DisposableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
} from "../../types.js";

const Enumerator_skipFirst: <T>(options?: {
  readonly count?: number;
}) => Function1<EnumeratorLike<T>, EnumeratorLike<T>> = /*@__PURE__*/ (<
  T,
>() => {
  const createSkipFirstEnumerator = createInstanceFactory(
    mix(
      include(Delegating_mixin(), Disposable_delegatingMixin),
      function SkipFirstEnumerator(
        instance: Omit<EnumeratorLike<T>, keyof DisposableLike> & SkipFirstLike,
        delegate: EnumeratorLike<T>,
        skipCount: number,
      ): EnumeratorLike<T> {
        init(Delegating_mixin(), instance, delegate);
        init(Disposable_delegatingMixin, instance, delegate);

        instance[SkipFirstLike_skipCount] = skipCount;
        instance[SkipFirstLike_count] = 0;

        return instance;
      },
      props<SkipFirstLike>({
        [SkipFirstLike_skipCount]: 0,
        [SkipFirstLike_count]: 0,
      }),
      {
        get [EnumeratorLike_current]() {
          unsafeCast<DelegatingLike<EnumeratorLike<T>>>(this);
          return this[DelegatingLike_delegate][EnumeratorLike_current];
        },

        get [EnumeratorLike_hasCurrent]() {
          unsafeCast<DelegatingLike<EnumeratorLike<T>>>(this);
          return this[DelegatingLike_delegate][EnumeratorLike_hasCurrent];
        },

        [EnumeratorLike_move](
          this: SkipFirstLike &
            EnumeratorLike<T> &
            DelegatingLike<EnumeratorLike<T>>,
        ): boolean {
          const delegate = this[DelegatingLike_delegate];

          while (delegate[EnumeratorLike_move]()) {
            this[SkipFirstLike_count]++;

            if (this[SkipFirstLike_count] > this[SkipFirstLike_skipCount]) {
              break;
            }
          }

          return delegate[EnumeratorLike_hasCurrent];
        },
      },
    ),
  );

  return (options: { readonly count?: number } = {}) => {
    const count = clampPositiveInteger(options.count ?? 1);
    return (delegate: EnumeratorLike<T>) =>
      createSkipFirstEnumerator(delegate, count);
  };
})();

export default Enumerator_skipFirst;
