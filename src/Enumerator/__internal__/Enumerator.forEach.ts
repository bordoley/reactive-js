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
  ForEachLike,
  ForEachLike_effect,
} from "../../__internal__/types.js";
import { SideEffect1, none, unsafeCast } from "../../functions.js";
import {
  DisposableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
} from "../../types.js";

const Enumerator_forEach: Enumerator.Signature["forEach"] = /*@__PURE__*/ (<
  T,
>() => {
  const createForEachEnumerator = createInstanceFactory(
    mix(
      include(Delegating_mixin(), Disposable_delegatingMixin),
      function ForEachEnumerator(
        instance: Omit<EnumeratorLike<T>, keyof DisposableLike> &
          ForEachLike<T>,
        delegate: EnumeratorLike<T>,
        effect: SideEffect1<T>,
      ): EnumeratorLike<T> {
        init(Delegating_mixin(), instance, delegate);
        init(Disposable_delegatingMixin, instance, delegate);

        instance[ForEachLike_effect] = effect;

        return instance;
      },
      props<ForEachLike<T>>({
        [ForEachLike_effect]: none,
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
          this: ForEachLike<T> &
            EnumeratorLike<T> &
            DelegatingLike<EnumeratorLike<T>>,
        ): boolean {
          const delegate = this[DelegatingLike_delegate];
          const delegateHasCurrent = delegate[EnumeratorLike_move]();

          if (delegateHasCurrent) {
            this[ForEachLike_effect](delegate[EnumeratorLike_current]);
          }

          return delegateHasCurrent;
        },
      },
    ),
  );

  return (effect: SideEffect1<T>) => (delegate: EnumeratorLike<T>) =>
    createForEachEnumerator(delegate, effect);
})();

export default Enumerator_forEach;
