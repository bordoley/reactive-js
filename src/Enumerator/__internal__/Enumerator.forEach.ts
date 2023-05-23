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
import { Function1, SideEffect1, error, none, pipe } from "../../functions.js";
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

const Enumerator_forEach: <T>(
  effect: SideEffect1<T>,
) => Function1<EnumeratorLike<T>, EnumeratorLike<T>> = /*@__PURE__*/ (<T>() => {
  const createForEachEnumerator = createInstanceFactory(
    mix(
      include(MutableEnumerator_mixin(), Delegating_mixin(), Disposable_mixin),
      function ForEachEnumerator(
        instance: Pick<EnumeratorLike<T>, typeof EnumeratorLike_move> &
          ForEachLike<T>,
        delegate: EnumeratorLike<T>,
        effect: SideEffect1<T>,
      ): EnumeratorLike<T> {
        init(MutableEnumerator_mixin<T>(), instance);
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
        [EnumeratorLike_move](
          this: ForEachLike<T> &
            MutableEnumeratorLike<T> &
            DelegatingLike<EnumeratorLike<T>>,
        ): boolean {
          if (this[EnumeratorLike_isCompleted]) {
            return false;
          }

          this[MutableEnumeratorLike_reset]();

          const delegate = this[DelegatingLike_delegate];
          const delegateHasCurrent = delegate[EnumeratorLike_move]();

          try {
            if (delegateHasCurrent) {
              const current = delegate[EnumeratorLike_current];
              this[ForEachLike_effect](current);
              this[EnumeratorLike_current] = current;
            }
          } catch (e) {
            // catch exceptions thrown by the effect function
            this[DisposableLike_dispose](error(e));
            this[MutableEnumeratorLike_reset]();
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

  return (effect: SideEffect1<T>) => (delegate: EnumeratorLike<T>) =>
    createForEachEnumerator(delegate, effect);
})();

export default Enumerator_forEach;
