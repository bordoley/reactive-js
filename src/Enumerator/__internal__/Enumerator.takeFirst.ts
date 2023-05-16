import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import type * as Enumerator from "../../Enumerator.js";
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
  TakeFirstLike,
  TakeFirstLike_count,
  TakeFirstLike_takeCount,
} from "../../__internal__/types.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
} from "../../types.js";
import MutableEnumerator_mixin, {
  MutableEnumeratorLike,
  MutableEnumeratorLike_reset,
} from "./MutableEnumerator.mixin.js";

const Enumerator_takeFirst: Enumerator.Signature["takeFirst"] = /*@__PURE__*/ (<
  T,
>() => {
  const createTakeFirstEnumerator = createInstanceFactory(
    mix(
      include(MutableEnumerator_mixin()),
      function TakeFirstEnumerator(
        instance: Pick<EnumeratorLike<T>, typeof EnumeratorLike_move> &
          TakeFirstLike,
        delegate: EnumeratorLike<T>,
        takeCount: number,
      ): EnumeratorLike<T> {
        init(Delegating_mixin(), instance, delegate);
        init(MutableEnumerator_mixin<T>(), instance);

        instance[TakeFirstLike_takeCount] = takeCount;
        instance[TakeFirstLike_count] = 0;

        return instance;
      },
      props<TakeFirstLike>({
        [TakeFirstLike_takeCount]: 0,
        [TakeFirstLike_count]: 0,
      }),
      {
        [EnumeratorLike_move](
          this: TakeFirstLike &
            MutableEnumeratorLike<T> &
            DelegatingLike<EnumeratorLike<T>>,
        ): boolean {
          this[MutableEnumeratorLike_reset]();

          const delegate = this[DelegatingLike_delegate];
          this[TakeFirstLike_count]++;

          if (
            this[TakeFirstLike_count] <= this[TakeFirstLike_takeCount] &&
            delegate[EnumeratorLike_move]()
          ) {
            this[EnumeratorLike_current] = delegate[EnumeratorLike_current];
          }

          return this[EnumeratorLike_hasCurrent];
        },
      },
    ),
  );

  return (options: { readonly count?: number } = {}) => {
    const count = clampPositiveInteger(options.count ?? 1);
    return (delegate: EnumeratorLike<T>) =>
      createTakeFirstEnumerator(delegate, count);
  };
})();

export default Enumerator_takeFirst;
