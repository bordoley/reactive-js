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
  ReducerAccumulatorLike,
  ReducerAccumulatorLike_acc,
  ReducerAccumulatorLike_reducer,
} from "../../__internal__/types.js";
import { Factory, Reducer, none } from "../../functions.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../types.js";
import MutableEnumerator_mixin, {
  MutableEnumeratorLike,
  MutableEnumeratorLike_reset,
} from "./MutableEnumerator.mixin.js";

const Enumerator_scan: Enumerator.Signature["scan"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const createScanEnumerator = createInstanceFactory(
    mix(
      include(MutableEnumerator_mixin(), Delegating_mixin()),
      function ScanEnumerator(
        instance: Pick<EnumeratorLike<TAcc>, typeof EnumeratorLike_move> &
          ReducerAccumulatorLike<T, TAcc>,
        delegate: EnumeratorLike<T>,
        reducer: Reducer<T, TAcc>,
        initialValue: Factory<TAcc>,
      ): EnumeratorLike<TAcc> {
        init(MutableEnumerator_mixin<TAcc>(), instance);
        init(Delegating_mixin(), instance, delegate);

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
          this[MutableEnumeratorLike_reset]();

          const delegate = this[DelegatingLike_delegate];
          const delegateHasCurrent = delegate[EnumeratorLike_move]();

          if (delegateHasCurrent) {
            this[ReducerAccumulatorLike_acc] = this[
              ReducerAccumulatorLike_reducer
            ](
              this[ReducerAccumulatorLike_acc],
              delegate[EnumeratorLike_current],
            );

            this[EnumeratorLike_current] = this[ReducerAccumulatorLike_acc];
          }

          return delegateHasCurrent;
        },
      },
    ),
  );

  return (reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
    (delegate: EnumeratorLike<T>) =>
      createScanEnumerator(delegate, reducer, initialValue);
})();

export default Enumerator_scan;
