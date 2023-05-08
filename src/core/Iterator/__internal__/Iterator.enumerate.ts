import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { __IteratorEnumerator_iterator } from "../../../__internal__/symbols.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
} from "../../../core.js";
import { Function1, none, returns } from "../../../functions.js";
import MutableEnumerator_mixin, {
  MutableEnumeratorLike,
  MutableEnumeratorLike_reset,
} from "../../Enumerator/__internal__/MutableEnumerator.mixin.js";

const Iterator_enumerate: <T>() => Function1<Iterator<T>, EnumeratorLike<T>> =
  /*@__PURE__*/ (<T>() => {
    type TIteratorEnumeratorProperties = {
      [__IteratorEnumerator_iterator]: Iterator<T>;
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
          instance[__IteratorEnumerator_iterator] = iterator;

          return instance;
        },
        props<TIteratorEnumeratorProperties>({
          [__IteratorEnumerator_iterator]: none,
        }),
        {
          [EnumeratorLike_move](
            this: TIteratorEnumeratorProperties & MutableEnumeratorLike<T>,
          ) {
            this[MutableEnumeratorLike_reset]();
            const next = this[__IteratorEnumerator_iterator].next();
            if (!next.done) {
              this[EnumeratorLike_current] = next.value;
            }

            return this[EnumeratorLike_hasCurrent];
          },
        },
      ),
    );

    return returns(createEnumerator);
  })();

export default Iterator_enumerate;
