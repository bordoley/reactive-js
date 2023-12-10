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
  EnumeratorLike_isCompleted,
  EnumeratorLike_move,
} from "../../../collections.js";
import { Function1, none, returns } from "../../../functions.js";
import MutableEnumeratorMixin, {
  MutableEnumeratorLike,
  MutableEnumeratorLike_reset,
} from "../../__mixins__/MutableEnumeratorMixin.js";

const Enumerator_fromIterator: <T>() => Function1<
  Iterator<T>,
  EnumeratorLike<T>
> = /*@__PURE__*/ (<T>() => {
  const IteratorEnumerator_iterator = Symbol("IteratorEnumerator_iterator");

  type TIteratorEnumeratorProperties = {
    [IteratorEnumerator_iterator]: Iterator<T>;
  };

  const createEnumerator = createInstanceFactory(
    mix(
      include(MutableEnumeratorMixin<T>()),
      function IteratorEnumerator(
        instance: Pick<EnumeratorLike<T>, typeof EnumeratorLike_move> &
          Mutable<TIteratorEnumeratorProperties>,
        iterator: Iterator<T>,
      ): EnumeratorLike<T> {
        init(MutableEnumeratorMixin<T>(), instance);
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
          if (this[MutableEnumeratorLike_reset]()) {
            return false;
          }

          const next = this[IteratorEnumerator_iterator].next();
          if (!next.done) {
            this[EnumeratorLike_current] = next.value;
          }

          this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];

          return this[EnumeratorLike_hasCurrent];
        },
      },
    ),
  );

  return returns(createEnumerator);
})();

export default Enumerator_fromIterator;
