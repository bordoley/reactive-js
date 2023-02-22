import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ReadonlyArrayLike } from "../../../containers.js";
import { none, pipe } from "../../../functions.js";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  SourceLike_move,
  ToEnumerable,
} from "../../../ix.js";
import Enumerable_create from "../../../ix/Enumerable/__internal__/Enumerable.create.js";
import MutableEnumerator_mixin from "../../../ix/Enumerator/__internal__/MutableEnumerator.mixin.js";
import { MutableEnumeratorLike } from "../../../ix/__internal__/ix.internal.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import ReadonlyArray_toContainer from "./ReadonlyArray.toContainer.js";

const createReadonlyArrayEnumerator: <T>(
  array: readonly T[],
  start: number,
  count: number,
) => EnumeratorLike<T> = /*@__PURE__*/ (<T>() => {
  const ReadonlyArrayEnumerator_array = Symbol("ReadonlyArrayEnumerator_array");
  const ReadonlyArrayEnumerator_count = Symbol("ReadonlyArrayEnumerator_count");
  const ReadonlyArrayEnumerator_index = Symbol("ReadonlyArrayEnumerator_index");

  type TProperties = {
    readonly [ReadonlyArrayEnumerator_array]: readonly T[];
    [ReadonlyArrayEnumerator_count]: number;
    [ReadonlyArrayEnumerator_index]: number;
  };

  const typedMutableEnumeratorMixin = MutableEnumerator_mixin<T>();

  return createInstanceFactory(
    mix(
      include(Disposable_mixin, typedMutableEnumeratorMixin),
      function ReadonlyArrayEnumerator(
        instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
          Mutable<TProperties>,
        array: readonly T[],
        start: number,
        count: number,
      ): EnumeratorLike<T> {
        init(Disposable_mixin, instance);
        init(typedMutableEnumeratorMixin, instance);

        instance[ReadonlyArrayEnumerator_array] = array;
        instance[ReadonlyArrayEnumerator_index] =
          count >= 0 ? start - 1 : start + 1;
        instance[ReadonlyArrayEnumerator_count] = count;

        return instance;
      },
      props<TProperties>({
        [ReadonlyArrayEnumerator_array]: none,
        [ReadonlyArrayEnumerator_count]: 0,
        [ReadonlyArrayEnumerator_index]: 0,
      }),
      {
        [SourceLike_move](this: TProperties & MutableEnumeratorLike<T>) {
          const { [ReadonlyArrayEnumerator_array]: array } = this;
          if (!Disposable_isDisposed(this)) {
            const {
              [ReadonlyArrayEnumerator_count]: count,
              [ReadonlyArrayEnumerator_index]: prevIndex,
            } = this;

            if (count !== 0) {
              this[ReadonlyArrayEnumerator_index] =
                count > 0 ? prevIndex + 1 : prevIndex - 1;

              this[ReadonlyArrayEnumerator_count] =
                count > 0 ? count - 1 : count + 1;

              const { [ReadonlyArrayEnumerator_index]: index } = this;

              this[EnumeratorLike_current] = array[index];
            } else {
              pipe(this, Disposable_dispose());
            }
          }
        },
      },
    ),
  );
})();

const ReadonlyArray_toEnumerable: ToEnumerable<
  ReadonlyArrayLike,
  {
    readonly start: number;
    readonly count: number;
  }
>["toEnumerable"] = /*@__PURE__*/ ReadonlyArray_toContainer<EnumerableLike>(
  <T>(array: readonly T[], start: number, count: number) =>
    Enumerable_create(() => createReadonlyArrayEnumerator(array, start, count)),
);

export default ReadonlyArray_toEnumerable;
