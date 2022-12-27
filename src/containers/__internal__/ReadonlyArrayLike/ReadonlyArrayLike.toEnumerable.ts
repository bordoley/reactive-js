import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mixin,
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
import EnumerableLike__create from "../../../ix/__internal__/EnumerableLike/EnumerableLike.create";
import MutableEnumeratorLike__mixin from "../../../ix/__internal__/MutableEnumeratorLike/MutableEnumeratorLike.mixin";
import { MutableEnumeratorLike } from "../../../ix/__internal__/ix.internal";
import { dispose, isDisposed } from "../../../util/DisposableLike";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import ReadonlyArrayLike__toContainer from "./ReadonlyArrayLike.toContainer";

const toEnumerable: ToEnumerable<
  ReadonlyArrayLike,
  {
    readonly start: number;
    readonly count: number;
  }
>["toEnumerable"] = /*@__PURE__*/ (<T>() => {
  const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin<T>();

  type TProperties = {
    readonly array: readonly T[];
    count: number;
    index: number;
  };

  const createReadonlyArrayEnumerator = createInstanceFactory(
    mixin(
      include(DisposableLike__mixin, typedMutableEnumeratorMixin),
      function ReadonlyArrayEnumerator(
        instance: Pick<EnumeratorLike<T>, typeof SourceLike_move> &
          Mutable<TProperties>,
        array: readonly T[],
        start: number,
        count: number,
      ): EnumeratorLike<T> {
        init(DisposableLike__mixin, instance);
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
          if (!isDisposed(this)) {
            this.index++;
            const { index, count } = this;

            if (count !== 0) {
              this[EnumeratorLike_current] = array[index];

              this.count = count > 0 ? this.count - 1 : this.count + 1;
            } else {
              pipe(this, dispose());
            }
          }
        },
      },
    ),
  );

  return ReadonlyArrayLike__toContainer<EnumerableLike<T>, T>(
    (array: readonly T[], start: number, count: number) =>
      EnumerableLike__create(() =>
        createReadonlyArrayEnumerator(array, start, count),
      ),
  );
})();

export default toEnumerable;
