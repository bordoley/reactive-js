import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import type * as Enumerator from "../../Enumerator.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  PredicatedLike_predicate,
  TakeWhileLike,
  TakeWhileLike_inclusive,
} from "../../__internal__/types.js";
import { Predicate, none } from "../../functions.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
} from "../../types.js";
import MutableEnumerator_mixin, {
  MutableEnumeratorLike,
  MutableEnumeratorLike_reset,
} from "./MutableEnumerator.mixin.js";

const Enumerator_takeWhile: Enumerator.Signature["takeWhile"] = /*@__PURE__*/ (<
  T,
>() => {
  const createTakeWhileEnumerator = createInstanceFactory(
    mix(
      include(MutableEnumerator_mixin()),
      function TakeWhileEnumerator(
        instance: Pick<EnumeratorLike<T>, typeof EnumeratorLike_move> &
          TakeWhileLike<T> & { completed: boolean },
        delegate: EnumeratorLike<T>,
        predicate: Predicate<T>,
        inclusive: boolean,
      ): EnumeratorLike<T> {
        init(Delegating_mixin(), instance, delegate);
        init(MutableEnumerator_mixin<T>(), instance);

        instance[PredicatedLike_predicate] = predicate;
        instance[TakeWhileLike_inclusive] = inclusive;

        return instance;
      },
      props<TakeWhileLike<T> & { completed: boolean }>({
        [PredicatedLike_predicate]: none,
        [TakeWhileLike_inclusive]: none,
        // FIXME: Should use a symbol
        completed: false,
      }),
      {
        [EnumeratorLike_move](
          this: TakeWhileLike<T> &
            MutableEnumeratorLike<T> &
            DelegatingLike<EnumeratorLike<T>> & { completed: boolean },
        ): boolean {
          this[MutableEnumeratorLike_reset]();

          const delegate = this[DelegatingLike_delegate];

          if (!this.completed && delegate[EnumeratorLike_move]()) {
            const next = delegate[EnumeratorLike_current];

            const satisfiesPredicate = this[PredicatedLike_predicate](next);

            if (satisfiesPredicate || this[TakeWhileLike_inclusive]) {
              this[EnumeratorLike_current] = next;
            }

            if (!satisfiesPredicate) {
              this.completed = true;
            }
          }

          return this[EnumeratorLike_hasCurrent];
        },
      },
    ),
  );

  return (
    predicate: Predicate<T>,
    options: { readonly inclusive?: boolean } = {},
  ) => {
    const { inclusive = false } = options;
    return (delegate: EnumeratorLike<T>) =>
      createTakeWhileEnumerator(delegate, predicate, inclusive);
  };
})();

export default Enumerator_takeWhile;
