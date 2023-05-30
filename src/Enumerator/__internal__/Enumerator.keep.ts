import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_add from "../../Disposable/__internal__/Disposable.add.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
  unsafeCast,
} from "../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  PredicatedLike,
  PredicatedLike_predicate,
} from "../../__internal__/types.js";
import { Function1, Predicate, error, none, pipe } from "../../functions.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_isCompleted,
  EnumeratorLike_move,
} from "../../types.js";

const Enumerator_keep: <T>(
  predicate: Predicate<T>,
) => Function1<EnumeratorLike<T>, EnumeratorLike<T>> = /*@__PURE__*/ (<T>() => {
  const createKeepEnumerator = createInstanceFactory(
    mix(
      include(Delegating_mixin(), Disposable_mixin),
      function KeepEnumerator(
        instance: Omit<EnumeratorLike<T>, keyof DisposableLike> &
          PredicatedLike<T>,
        delegate: EnumeratorLike<T>,
        predicate: Predicate<T>,
      ): EnumeratorLike<T> {
        init(Delegating_mixin(), instance, delegate);
        init(Disposable_mixin, instance);

        pipe(instance, Disposable_add(delegate));

        instance[PredicatedLike_predicate] = predicate;

        return instance;
      },
      props<
        PredicatedLike<T> &
          Pick<EnumeratorLike<T>, typeof EnumeratorLike_isCompleted>
      >({
        [PredicatedLike_predicate]: none,
        [EnumeratorLike_isCompleted]: false,
      }),
      {
        get [EnumeratorLike_current]() {
          unsafeCast<DelegatingLike<EnumeratorLike<T>>>(this);
          return this[DelegatingLike_delegate][EnumeratorLike_current];
        },

        get [EnumeratorLike_hasCurrent]() {
          unsafeCast<DelegatingLike<EnumeratorLike<T>>>(this);
          return this[DelegatingLike_delegate][EnumeratorLike_hasCurrent];
        },

        [EnumeratorLike_move](
          this: PredicatedLike<T> &
            Mutable<EnumeratorLike<T>> &
            DelegatingLike<EnumeratorLike<T>>,
        ): boolean {
          if (this[EnumeratorLike_isCompleted]) {
            return false;
          }

          const delegate = this[DelegatingLike_delegate];
          const predicate = this[PredicatedLike_predicate];

          try {
            while (
              delegate[EnumeratorLike_move]() &&
              !predicate(this[EnumeratorLike_current])
            ) {}
          } catch (e) {
            // Catch errors thrown by the predicate
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

  return (predicate: Predicate<T>) => (delegate: EnumeratorLike<T>) =>
    createKeepEnumerator(delegate, predicate);
})();

export default Enumerator_keep;
