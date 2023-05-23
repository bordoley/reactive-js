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
  ReducerAccumulatorLike,
  ReducerAccumulatorLike_acc,
  ReducerAccumulatorLike_reducer,
} from "../../__internal__/types.js";
import { Factory, Reducer, error, none, pipe } from "../../functions.js";
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

const Enumerator_scan: <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => (delegate: EnumeratorLike<T>) => EnumeratorLike<TAcc> = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const createScanEnumerator = createInstanceFactory(
    mix(
      include(MutableEnumerator_mixin(), Delegating_mixin(), Disposable_mixin),
      function ScanEnumerator(
        instance: Pick<EnumeratorLike<TAcc>, typeof EnumeratorLike_move> &
          ReducerAccumulatorLike<T, TAcc>,
        delegate: EnumeratorLike<T>,
        reducer: Reducer<T, TAcc>,
        initialValue: Factory<TAcc>,
      ): EnumeratorLike<TAcc> {
        init(MutableEnumerator_mixin<TAcc>(), instance);
        init(Delegating_mixin(), instance, delegate);
        init(Disposable_mixin, instance);

        pipe(instance, Disposable_add(delegate));

        instance[ReducerAccumulatorLike_reducer] = reducer;
        instance[ReducerAccumulatorLike_acc] = initialValue();

        return instance;
      },
      props<ReducerAccumulatorLike<T, TAcc>>({
        [ReducerAccumulatorLike_acc]: none,
        [ReducerAccumulatorLike_reducer]: none,
      }),
      {
        [EnumeratorLike_move](
          this: ReducerAccumulatorLike<T, TAcc> &
            MutableEnumeratorLike<TAcc> &
            DelegatingLike<EnumeratorLike<T>>,
        ): boolean {
          if (this[EnumeratorLike_isCompleted]) {
            return false;
          }

          this[MutableEnumeratorLike_reset]();
          this[EnumeratorLike_isCompleted] = this[DisposableLike_isDisposed];

          const delegate = this[DelegatingLike_delegate];
          const delegateHasCurrent = delegate[EnumeratorLike_move]();

          try {
            if (delegateHasCurrent) {
              this[ReducerAccumulatorLike_acc] = this[
                ReducerAccumulatorLike_reducer
              ](
                this[ReducerAccumulatorLike_acc],
                delegate[EnumeratorLike_current],
              );

              this[EnumeratorLike_current] = this[ReducerAccumulatorLike_acc];
            }
          } catch (e) {
            // catch errors thrown by the reducer
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

  return (reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
    (delegate: EnumeratorLike<T>) =>
      createScanEnumerator(delegate, reducer, initialValue);
})();

export default Enumerator_scan;
