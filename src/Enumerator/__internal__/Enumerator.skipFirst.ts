import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import { max } from "../../__internal__/math.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  CountingLike,
  CountingLike_count,
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../__internal__/types.js";
import { Function1, unsafeCast } from "../../functions.js";
import {
  DisposableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
} from "../../types.js";

const Enumerator_skipFirst: <T>(
  count: number,
) => Function1<EnumeratorLike<T>, EnumeratorLike<T>> = /*@__PURE__*/ (<T>() => {
  const createSkipFirstEnumerator = createInstanceFactory(
    mix(
      include(Delegating_mixin(), Disposable_delegatingMixin),
      function SkipFirstEnumerator(
        instance: Omit<EnumeratorLike<T>, keyof DisposableLike> & CountingLike,
        delegate: EnumeratorLike<T>,
        skipCount: number,
      ): EnumeratorLike<T> {
        init(Delegating_mixin(), instance, delegate);
        init(Disposable_delegatingMixin, instance, delegate);

        instance[CountingLike_count] = skipCount;

        return instance;
      },
      props<CountingLike>({
        [CountingLike_count]: 0,
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
          this: CountingLike &
            EnumeratorLike<T> &
            DelegatingLike<EnumeratorLike<T>>,
        ): boolean {
          const delegate = this[DelegatingLike_delegate];

          while (delegate[EnumeratorLike_move]()) {
            this[CountingLike_count] = max(this[CountingLike_count] - 1, -1);

            if (this[CountingLike_count] < 0) {
              break;
            }
          }

          return this[EnumeratorLike_hasCurrent];
        },
      },
    ),
  );

  return (count: number) => (delegate: EnumeratorLike<T>) =>
    createSkipFirstEnumerator(delegate, count);
})();

export default Enumerator_skipFirst;
