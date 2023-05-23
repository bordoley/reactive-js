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
import { __IteratorEnumerator_iterator } from "../../__internal__/symbols.js";
import { Function1, error, none, returns } from "../../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_isCompleted,
  EnumeratorLike_move,
} from "../../types.js";

const Iterator_enumerate: <T>() => Function1<Iterator<T>, EnumeratorLike<T>> =
  /*@__PURE__*/ (<T>() => {
    type TIteratorEnumeratorProperties = {
      [__IteratorEnumerator_iterator]: Iterator<T>;
    };

    const createEnumerator = createInstanceFactory(
      mix(
        include(Disposable_mixin, MutableEnumerator_mixin<T>()),
        function IteratorEnumerator(
          instance: Pick<EnumeratorLike<T>, typeof EnumeratorLike_move> &
            Mutable<TIteratorEnumeratorProperties>,
          iterator: Iterator<T>,
        ): EnumeratorLike<T> {
          init(MutableEnumerator_mixin<T>(), instance);
          init(Disposable_mixin, instance);
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
            if (this[MutableEnumeratorLike_reset]()) {
              return false;
            }

            if (this[DisposableLike_isDisposed]) {
              return false;
            }

            try {
              const next = this[__IteratorEnumerator_iterator].next();
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

export default Iterator_enumerate;
