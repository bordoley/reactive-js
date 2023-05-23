import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_add from "../../Disposable/__internal__/Disposable.add.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
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
import { Function1, Predicate, error, none, pipe } from "../../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_isCompleted,
  EnumeratorLike_move,
} from "../../types.js";
import MutableEnumerator_mixin, {
  MutableEnumeratorLike,
  MutableEnumeratorLike_reset,
} from "./MutableEnumerator.mixin.js";

const Enumerator_takeWhile: <T>(
  predicate: Predicate<T>,
  options?: {
    readonly inclusive?: boolean | undefined;
  },
) => Function1<EnumeratorLike<T>, EnumeratorLike<T>> = /*@__PURE__*/ (<T>() => {
  const createTakeWhileEnumerator = createInstanceFactory(
    mix(
      include(MutableEnumerator_mixin(), Disposable_mixin),
      function TakeWhileEnumerator(
        instance: Pick<EnumeratorLike<T>, typeof EnumeratorLike_move> &
          TakeWhileLike<T>,
        delegate: EnumeratorLike<T>,
        predicate: Predicate<T>,
        inclusive: boolean,
      ): EnumeratorLike<T> {
        init(Delegating_mixin(), instance, delegate);
        init(MutableEnumerator_mixin<T>(), instance);
        init(Disposable_mixin, instance, delegate);

        pipe(instance, Disposable_add(delegate));

        instance[PredicatedLike_predicate] = predicate;
        instance[TakeWhileLike_inclusive] = inclusive;

        return instance;
      },
      props<TakeWhileLike<T>>({
        [PredicatedLike_predicate]: none,
        [TakeWhileLike_inclusive]: none,
      }),
      {
        [EnumeratorLike_move](
          this: TakeWhileLike<T> &
            MutableEnumeratorLike<T> &
            DelegatingLike<EnumeratorLike<T>>,
        ): boolean {
          if (this[MutableEnumeratorLike_reset]()) {
            return false;
          }

          const delegate = this[DelegatingLike_delegate];

          try {
            if (delegate[EnumeratorLike_move]()) {
              const next = delegate[EnumeratorLike_current];

              const satisfiesPredicate = this[PredicatedLike_predicate](next);

              if (satisfiesPredicate || this[TakeWhileLike_inclusive]) {
                this[EnumeratorLike_current] = next;
              }

              if (!satisfiesPredicate) {
                this[DisposableLike_dispose]();
              }
            }
          } catch (e) {
            // catch errors thrown by the predicate
            this[DisposableLike_dispose](error(e));
          }

          if (delegate[DisposableLike_isDisposed]) {
            this[DisposableLike_dispose]();
          }

          this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];

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
