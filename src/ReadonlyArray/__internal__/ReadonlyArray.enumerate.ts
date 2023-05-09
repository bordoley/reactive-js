import MutableEnumerator_mixin, {
  MutableEnumeratorLike,
  MutableEnumeratorLike_reset,
} from "../../Enumerator/__internal__/MutableEnumerator.mixin.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  __ReadonlyArrayEnumerator_count,
  __ReadonlyArrayEnumerator_index,
  __ReadonlyArrayEnumerator_values,
} from "../../__internal__/symbols.js";
import { Function1, none } from "../../functions.js";
import {
  EnumeratorContainer,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
} from "../../types.js";
import ReadonlyArray_toContainer from "./ReadonlyArray.toContainer.js";

const ReadonlyArray_enumerate: <T>(options?: {
  readonly start?: number;
  readonly count?: number;
}) => Function1<ReadonlyArray<T>, EnumeratorLike<T>> = /*@__PURE__*/ (<T>() => {
  type TReadonlyArrayEnumeratorProperties = {
    [__ReadonlyArrayEnumerator_values]: ReadonlyArray<T>;
    [__ReadonlyArrayEnumerator_index]: number;
    [__ReadonlyArrayEnumerator_count]: number;
  };

  const createEnumerator: <T>(
    value: readonly T[],
    start: number,
    count: number,
    o?: unknown,
  ) => EnumeratorLike<T> = createInstanceFactory(
    mix(
      include(MutableEnumerator_mixin<T>()),
      function ReadonlyArrayEnumerator(
        instance: Pick<EnumeratorLike<T>, typeof EnumeratorLike_move> &
          Mutable<TReadonlyArrayEnumeratorProperties>,
        values: readonly T[],
        start: number,
        count: number,
        _: unknown,
      ): EnumeratorLike<T> {
        init(MutableEnumerator_mixin<T>(), instance);
        instance[__ReadonlyArrayEnumerator_values] = values;
        instance[__ReadonlyArrayEnumerator_index] = start;
        instance[__ReadonlyArrayEnumerator_count] = count;

        return instance;
      },
      props<TReadonlyArrayEnumeratorProperties>({
        [__ReadonlyArrayEnumerator_values]: none,
        [__ReadonlyArrayEnumerator_index]: -1,
        [__ReadonlyArrayEnumerator_count]: 0,
      }),
      {
        [EnumeratorLike_move](
          this: TReadonlyArrayEnumeratorProperties & MutableEnumeratorLike<T>,
        ) {
          this[MutableEnumeratorLike_reset]();

          const count = this[__ReadonlyArrayEnumerator_count];

          if (count != 0) {
            const values = this[__ReadonlyArrayEnumerator_values];
            const index = this[__ReadonlyArrayEnumerator_index];
            const value = values[index];

            this[EnumeratorLike_current] = value;
          }

          if (count > 0) {
            this[__ReadonlyArrayEnumerator_count]--;
            this[__ReadonlyArrayEnumerator_index]++;
          } else if (count < 0) {
            this[__ReadonlyArrayEnumerator_count]++;
            this[__ReadonlyArrayEnumerator_index]--;
          }

          return this[EnumeratorLike_hasCurrent];
        },
      },
    ),
  ) as <T>(
    value: readonly T[],
    start: number,
    count: number,
    o?: unknown,
  ) => EnumeratorLike<T>;

  return ReadonlyArray_toContainer<EnumeratorContainer>(createEnumerator);
})();

export default ReadonlyArray_enumerate;
