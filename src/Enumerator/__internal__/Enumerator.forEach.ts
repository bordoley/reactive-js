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
  ForEachLike,
  ForEachLike_effect,
} from "../../__internal__/types.js";
import {
  Function1,
  SideEffect1,
  error,
  none,
  pipe,
  unsafeCast,
} from "../../functions.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
} from "../../types.js";

const Enumerator_forEach: <T>(
  effect: SideEffect1<T>,
) => Function1<EnumeratorLike<T>, EnumeratorLike<T>> = /*@__PURE__*/ (<T>() => {
  const createForEachEnumerator = createInstanceFactory(
    mix(
      include(Delegating_mixin(), Disposable_mixin),
      function ForEachEnumerator(
        instance: Omit<EnumeratorLike<T>, keyof DisposableLike> &
          ForEachLike<T>,
        delegate: EnumeratorLike<T>,
        effect: SideEffect1<T>,
      ): EnumeratorLike<T> {
        init(Delegating_mixin(), instance, delegate);
        init(Disposable_mixin, instance);

        pipe(instance, Disposable_add(delegate));

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

          try {
            if (delegateHasCurrent) {
              this[ForEachLike_effect](delegate[EnumeratorLike_current]);
            }
          } catch (e) {
            // catch exceptions thrown by the effect function
            this[DisposableLike_dispose](error(e));
          }

          if (delegate[DisposableLike_isDisposed]) {
            this[DisposableLike_dispose]();
          }

          return this[EnumeratorLike_hasCurrent];
        },
      },
    ),
  );

  return (effect: SideEffect1<T>) => (delegate: EnumeratorLike<T>) =>
    createForEachEnumerator(delegate, effect);
})();

export default Enumerator_forEach;
