import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
  ReadonlyArrayLike,
} from "../../../containers.js";
import { Function1, none } from "../../../functions.js";
import MutableEnumerator_mixin, {
  MutableEnumeratorLike,
  MutableEnumeratorLike_reset,
} from "../../Enumerator/__internal__/MutableEnumerator.mixin.js";
import ReadonlyArray_toContainer from "./ReadonlyArray.toContainer.js";

const ReadonlyArray_enumerate: <T>() => Function1<
  ReadonlyArrayLike<T>,
  EnumeratorLike<T>
> = /*@__PURE__*/ (<T>() => {
  const ReadonlyArrayEnumerator_values = Symbol(
    "ReadonlyArrayEnumerator_values",
  );
  const ReadonlyArrayEnumerator_index = Symbol("ReadonlyArrayEnumerator_index");
  const ReadonlyArrayEnumerator_count = Symbol("ReadonlyArrayEnumerator_count");

  type TReadonlyArrayEnumeratorProperties = {
    [ReadonlyArrayEnumerator_values]: ReadonlyArrayLike<T>;
    [ReadonlyArrayEnumerator_index]: number;
    [ReadonlyArrayEnumerator_count]: number;
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
        instance[ReadonlyArrayEnumerator_values] = values;
        instance[ReadonlyArrayEnumerator_index] = start;
        instance[ReadonlyArrayEnumerator_count] = count;

        return instance;
      },
      props<TReadonlyArrayEnumeratorProperties>({
        [ReadonlyArrayEnumerator_values]: none,
        [ReadonlyArrayEnumerator_index]: -1,
        [ReadonlyArrayEnumerator_count]: 0,
      }),
      {
        [EnumeratorLike_move](
          this: TReadonlyArrayEnumeratorProperties & MutableEnumeratorLike<T>,
        ) {
          this[MutableEnumeratorLike_reset]();

          const count = this[ReadonlyArrayEnumerator_count];

          if (count != 0) {
            const values = this[ReadonlyArrayEnumerator_values];
            const index = this[ReadonlyArrayEnumerator_index];
            const value = values[index];

            this[EnumeratorLike_current] = value;
          }

          if (count > 0) {
            this[ReadonlyArrayEnumerator_count]--;
            this[ReadonlyArrayEnumerator_index]++;
          } else if (count < 0) {
            this[ReadonlyArrayEnumerator_count]++;
            this[ReadonlyArrayEnumerator_index]--;
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

  return ReadonlyArray_toContainer<EnumeratorLike>(createEnumerator);
})();

export default ReadonlyArray_enumerate;
