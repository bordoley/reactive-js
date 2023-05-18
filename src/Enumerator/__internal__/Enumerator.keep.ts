import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
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
  PredicatedLike,
  PredicatedLike_predicate,
} from "../../__internal__/types.js";
import { Predicate, none, unsafeCast } from "../../functions.js";
import {
  DisposableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
} from "../../types.js";

const Enumerator_keep: Enumerator.Signature["keep"] = /*@__PURE__*/ (<T>() => {
  const createKeepEnumerator = createInstanceFactory(
    mix(
      include(Delegating_mixin(), Disposable_delegatingMixin),
      function KeepEnumerator(
        instance: Omit<EnumeratorLike<T>, keyof DisposableLike> &
          PredicatedLike<T>,
        delegate: EnumeratorLike<T>,
        predicate: Predicate<T>,
      ): EnumeratorLike<T> {
        init(Delegating_mixin(), instance, delegate);
        init(Disposable_delegatingMixin, instance, delegate);

        instance[PredicatedLike_predicate] = predicate;

        return instance;
      },
      props<PredicatedLike<T>>({
        [PredicatedLike_predicate]: none,
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
            EnumeratorLike<T> &
            DelegatingLike<EnumeratorLike<T>>,
        ): boolean {
          const delegate = this[DelegatingLike_delegate];
          const predicate = this[PredicatedLike_predicate];

          while (
            delegate[EnumeratorLike_move]() &&
            !predicate(this[EnumeratorLike_current])
          ) {}

          return delegate[EnumeratorLike_hasCurrent];
        },
      },
    ),
  );

  return (predicate: Predicate<T>) => (delegate: EnumeratorLike<T>) =>
    createKeepEnumerator(delegate, predicate);
})();

export default Enumerator_keep;
