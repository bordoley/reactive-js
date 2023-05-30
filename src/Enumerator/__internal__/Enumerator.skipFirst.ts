import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import { max } from "../../__internal__/math.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
  unsafeCast,
} from "../../__internal__/mixins.js";
import {
  CountingLike,
  CountingLike_count,
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../__internal__/types.js";
import { Function1 } from "../../functions.js";
import {
  DisposableLike,
  DisposableLike_isDisposed,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_isCompleted,
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
      props<
        CountingLike &
          Pick<EnumeratorLike<T>, typeof EnumeratorLike_isCompleted>
      >({
        [CountingLike_count]: 0,
        [EnumeratorLike_isCompleted]: false,
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
            Mutable<EnumeratorLike<T>> &
            DelegatingLike<EnumeratorLike<T>>,
        ): boolean {
          if (this[EnumeratorLike_isCompleted]) {
            return false;
          }

          const delegate = this[DelegatingLike_delegate];

          this[EnumeratorLike_isCompleted] = this[DisposableLike_isDisposed];

          while (delegate[EnumeratorLike_move]()) {
            this[CountingLike_count] = max(this[CountingLike_count] - 1, -1);

            if (this[CountingLike_count] < 0) {
              break;
            }
          }

          this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];

          return this[EnumeratorLike_hasCurrent];
        },
      },
    ),
  );

  return (count: number) => (delegate: EnumeratorLike<T>) =>
    createSkipFirstEnumerator(delegate, count);
})();

export default Enumerator_skipFirst;
