import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
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
  __ReadonlyArrayEnumerator_index,
  __ReadonlyArrayEnumerator_values,
} from "../../__internal__/symbols.js";
import { CountingLike, CountingLike_count } from "../../__internal__/types.js";
import { none } from "../../functions.js";
import {
  Container,
  Container_T,
  Container_type,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
} from "../../types.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";
import ReadonlyArray_toContainer from "./ReadonlyArray.toContainer.js";

interface EnumeratorContainer extends Container {
  readonly [Container_type]?: EnumeratorLike<this[typeof Container_T]>;
}

const ReadonlyArray_enumerate: ReadonlyArray.Signature["enumerate"] =
  /*@__PURE__*/ (<T>() => {
    type TReadonlyArrayEnumeratorProperties = CountingLike & {
      [__ReadonlyArrayEnumerator_values]: ReadonlyArray<T>;
      [__ReadonlyArrayEnumerator_index]: number;
    };

    const createEnumerator: <T>(
      value: readonly T[],
      start: number,
      count: number,
      o?: unknown,
    ) => EnumeratorLike<T> = createInstanceFactory(
      mix(
        include(MutableEnumerator_mixin<T>(), Disposable_mixin),
        function ReadonlyArrayEnumerator(
          instance: Pick<EnumeratorLike<T>, typeof EnumeratorLike_move> &
            Mutable<TReadonlyArrayEnumeratorProperties>,
          values: readonly T[],
          start: number,
          count: number,
          _: unknown,
        ): EnumeratorLike<T> {
          init(MutableEnumerator_mixin<T>(), instance);
          init(Disposable_mixin, instance);

          instance[__ReadonlyArrayEnumerator_values] = values;
          instance[__ReadonlyArrayEnumerator_index] = start;
          instance[CountingLike_count] = count;

          return instance;
        },
        props<TReadonlyArrayEnumeratorProperties>({
          [__ReadonlyArrayEnumerator_values]: none,
          [__ReadonlyArrayEnumerator_index]: -1,
          [CountingLike_count]: 0,
        }),
        {
          [EnumeratorLike_move](
            this: TReadonlyArrayEnumeratorProperties & MutableEnumeratorLike<T>,
          ) {
            this[MutableEnumeratorLike_reset]();

            if (this[DisposableLike_isDisposed]) {
              return false;
            }

            const count = this[CountingLike_count];

            if (count !== 0) {
              const values = this[__ReadonlyArrayEnumerator_values];
              const index = this[__ReadonlyArrayEnumerator_index];
              const value = values[index];

              this[EnumeratorLike_current] = value;
            }

            if (count > 0) {
              this[CountingLike_count]--;
              this[__ReadonlyArrayEnumerator_index]++;
            } else if (count < 0) {
              this[CountingLike_count]++;
              this[__ReadonlyArrayEnumerator_index]--;
            }

            if (this[CountingLike_count] === 0) {
              this[DisposableLike_dispose]();
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
