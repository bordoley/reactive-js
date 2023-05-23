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
import { Function1 } from "../../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_isCompleted,
  EnumeratorLike_move,
} from "../../types.js";
import MutableEnumerator_mixin, {
  MutableEnumeratorLike,
  MutableEnumeratorLike_reset,
} from "./MutableEnumerator.mixin.js";

const Enumerator_takeFirst: <T>(
  count: number,
) => Function1<EnumeratorLike<T>, EnumeratorLike<T>> = /*@__PURE__*/ (<T>() => {
  const createTakeFirstEnumerator = createInstanceFactory(
    mix(
      include(MutableEnumerator_mixin(), Disposable_delegatingMixin),
      function TakeFirstEnumerator(
        instance: Pick<EnumeratorLike<T>, typeof EnumeratorLike_move> &
          CountingLike,
        delegate: EnumeratorLike<T>,
        takeCount: number,
      ): EnumeratorLike<T> {
        init(Delegating_mixin(), instance, delegate);
        init(MutableEnumerator_mixin<T>(), instance);
        init(Disposable_delegatingMixin, instance, delegate);

        instance[CountingLike_count] = takeCount;

        if (takeCount === 0) {
          instance[DisposableLike_dispose]();
        }

        return instance;
      },
      props<CountingLike>({
        [CountingLike_count]: 0,
      }),
      {
        [EnumeratorLike_move](
          this: CountingLike &
            MutableEnumeratorLike<T> &
            DelegatingLike<EnumeratorLike<T>>,
        ): boolean {
          if (this[MutableEnumeratorLike_reset]()) {
            return false;
          }

          this[EnumeratorLike_isCompleted] = this[DisposableLike_isDisposed];

          this[CountingLike_count] = max(this[CountingLike_count] - 1, -1);

          const delegate = this[DelegatingLike_delegate];

          if (
            this[CountingLike_count] >= 0 &&
            delegate[EnumeratorLike_move]()
          ) {
            this[EnumeratorLike_current] = delegate[EnumeratorLike_current];
          } else {
            this[DisposableLike_dispose]();
          }

          this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];

          return this[EnumeratorLike_hasCurrent];
        },
      },
    ),
  );

  return (count: number) => (delegate: EnumeratorLike<T>) =>
    createTakeFirstEnumerator(delegate, count);
})();

export default Enumerator_takeFirst;
