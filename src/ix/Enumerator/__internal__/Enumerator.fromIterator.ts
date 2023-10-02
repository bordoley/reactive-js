import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Function1, error, none, returns } from "../../../functions.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_isCompleted,
  EnumeratorLike_move,
} from "../../../ix.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../../utils.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
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
      include(DisposableMixin, MutableEnumeratorMixin<T>()),
      function IteratorEnumerator(
        instance: Pick<EnumeratorLike<T>, typeof EnumeratorLike_move> &
          Mutable<TIteratorEnumeratorProperties>,
        iterator: Iterator<T>,
      ): EnumeratorLike<T> {
        init(MutableEnumeratorMixin<T>(), instance);
        init(DisposableMixin, instance);
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

          if (this[DisposableLike_isDisposed]) {
            return false;
          }

          try {
            const next = this[IteratorEnumerator_iterator].next();
            if (!next.done) {
              this[EnumeratorLike_current] = next.value;
            } else {
              this[DisposableLike_dispose]();
            }
          } catch (e) {
            // Catch any errors thrown by the iterator
            this[DisposableLike_dispose](error(e));
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
