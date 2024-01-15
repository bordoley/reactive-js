import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_isCompleted,
  EnumeratorLike_move,
} from "../../../collections.js";
import { Factory, Reducer, none, partial, pipe } from "../../../functions.js";
import type * as Enumerable from "../../Enumerable.js";
import MutableEnumeratorMixin, {
  MutableEnumeratorLike,
  MutableEnumeratorLike_reset,
} from "../../__mixins__/MutableEnumeratorMixin.js";
import Enumerable_lift from "./Enumerable.lift.js";

const Enumerable_scan: Enumerable.Signature["scan"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const ScanEnumerator_acc = Symbol("ScanEnumerator_acc");
  const ScanEnumerator_delegate = Symbol("ScanEnumerator_delegate");
  const ScanEnumerator_reducer = Symbol("ScanEnumerator_reducer");

  interface TProperties<T, TAcc> {
    [ScanEnumerator_acc]: TAcc;
    [ScanEnumerator_delegate]: EnumeratorLike<T>;
    [ScanEnumerator_reducer]: Reducer<T, TAcc>;
  }

  const createScanEnumerator = mixInstanceFactory(
    include(MutableEnumeratorMixin()),
    function ScanEnumerator(
      instance: Pick<EnumeratorLike<TAcc>, typeof EnumeratorLike_move> &
        TProperties<T, TAcc>,
      delegate: EnumeratorLike<T>,
      reducer: Reducer<T, TAcc>,
      initialValue: Factory<TAcc>,
    ): EnumeratorLike<TAcc> {
      init(MutableEnumeratorMixin<TAcc>(), instance);

      instance[ScanEnumerator_reducer] = reducer;
      instance[ScanEnumerator_acc] = initialValue();
      instance[ScanEnumerator_delegate] = delegate;

      return instance;
    },
    props<TProperties<T, TAcc>>({
      [ScanEnumerator_acc]: none,
      [ScanEnumerator_delegate]: none,
      [ScanEnumerator_reducer]: none,
    }),
    {
      [EnumeratorLike_move](
        this: TProperties<T, TAcc> & MutableEnumeratorLike<TAcc>,
      ): boolean {
        if (this[MutableEnumeratorLike_reset]()) {
          return false;
        }

        const delegate = this[ScanEnumerator_delegate];
        const delegateHasCurrent = delegate[EnumeratorLike_move]();

        if (delegateHasCurrent) {
          this[ScanEnumerator_acc] = this[ScanEnumerator_reducer](
            this[ScanEnumerator_acc],
            delegate[EnumeratorLike_current],
          );

          this[EnumeratorLike_current] = this[ScanEnumerator_acc];
        }

        this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];

        return this[EnumeratorLike_hasCurrent];
      },
    },
  );

  return (reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
    pipe(createScanEnumerator, partial(reducer, initialValue), Enumerable_lift);
})();

export default Enumerable_scan;
