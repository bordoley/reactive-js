import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { ReadonlyArrayLike } from "../../../containers";
import { none, pipe } from "../../../functions";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  SourceLike_move,
  ToEnumerable,
} from "../../../ix";
import Enumerable_create from "../../../ix/__internal__/Enumerable/Enumerable.create";
import MutableEnumerator_mixin from "../../../ix/__internal__/MutableEnumerator/MutableEnumerator.mixin";
import { MutableEnumeratorLike } from "../../../ix/__internal__/ix.internal";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable_isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable_mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import ReadonlyArray_toContainer from "./ReadonlyArray.toContainer";

const ReadonlyArray_toEnumerable: ToEnumerable<
  ReadonlyArrayLike,
  {
    readonly start: number;
    readonly count: number;
  }
>["toEnumerable"] = /*@__PURE__*/ (<T>() => {
  const typedMutableEnumeratorMixin = MutableEnumerator_mixin<T>();

  type TProperties = {
    readonly array: readonly T[];
    count: number;
    index: number;
  };

  const createReadonlyArrayEnumerator = createInstanceFactory(
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

        instance.array = array;
        instance.index = start - 1;
        instance.count = count;

        return instance;
      },
      props<TProperties>({
        array: none,
        count: 0,
        index: 0,
      }),
      {
        [SourceLike_move](this: TProperties & MutableEnumeratorLike<T>) {
          const { array } = this;
          if (!Disposable_isDisposed(this)) {
            this.index++;
            const { index, count } = this;

            if (count !== 0) {
              this[EnumeratorLike_current] = array[index];

              this.count = count > 0 ? this.count - 1 : this.count + 1;
            } else {
              pipe(this, Disposable_dispose());
            }
          }
        },
      },
    ),
  );

  return ReadonlyArray_toContainer<EnumerableLike<T>, T>(
    (array: readonly T[], start: number, count: number) =>
      Enumerable_create(() =>
        createReadonlyArrayEnumerator(array, start, count),
      ),
  );
})();

export default ReadonlyArray_toEnumerable;
