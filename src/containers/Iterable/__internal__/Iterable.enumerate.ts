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
  IterableLike,
} from "../../../containers.js";
import { Function1, none, returns } from "../../../functions.js";
import MutableEnumerator_mixin, {
  MutableEnumeratorLike,
  MutableEnumeratorLike_reset,
} from "../../Enumerator/__internal__/MutableEnumerator.mixin.js";

const Iterable_enumerate: <T>() => Function1<
  IterableLike<T>,
  EnumeratorLike<T>
> = /*@__PURE__*/ (<T>() => {
  const IteratorEnumerator_iterator = Symbol("IteratorEnumerator_iterator");

  type TIteratorEnumeratorProperties = {
    [IteratorEnumerator_iterator]: Iterator<T>;
  };

  const createEnumerator = createInstanceFactory(
    mix(
      include(MutableEnumerator_mixin<T>()),
      function IteratorEnumerator(
        instance: Pick<EnumeratorLike<T>, typeof EnumeratorLike_move> &
          Mutable<TIteratorEnumeratorProperties>,
        iterator: Iterator<T>,
      ): EnumeratorLike<T> {
        init(MutableEnumerator_mixin<T>(), instance);
        instance[IteratorEnumerator_iterator] = iterator;

        return instance;
      },
      props<TIteratorEnumeratorProperties>({
        [IteratorEnumerator_iterator]: none,
      }),
      {
        [EnumeratorLike_move](
          this: TIteratorEnumeratorProperties & MutableEnumeratorLike<T>,
        ) {
          this[MutableEnumeratorLike_reset]();
          const next = this[IteratorEnumerator_iterator].next();
          if (!next.done) {
            this[EnumeratorLike_current] = next.value;
          }

          return this[EnumeratorLike_hasCurrent];
        },
      },
    ),
  );

  return returns((iterable: IterableLike<T>) => {
    const iterator = iterable[Symbol.iterator]();
    return createEnumerator(iterator);
  });
})();

export default Iterable_enumerate;
