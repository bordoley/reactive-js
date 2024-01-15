import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_isCompleted,
  EnumeratorLike_move,
} from "../../../collections.js";
import { Tuple2, none, pipe, returns, tuple } from "../../../functions.js";
import type * as Enumerable from "../../Enumerable.js";
import DelegatingEnumeratorMixin, {
  DelegatingEnumeratorMixinLike,
  DelegatingEnumeratorMixinLike_delegate,
} from "../../__mixins__/DelegatingEnumeratorMixin.js";
import MutableEnumeratorMixin, {
  MutableEnumeratorLike,
  MutableEnumeratorLike_reset,
} from "../../__mixins__/MutableEnumeratorMixin.js";
import Enumerable_lift from "./Enumerable.lift.js";

const Enumerable_pairwise: Enumerable.Signature["pairwise"] = /*@__PURE__*/ (<
  T,
>() => {
  const PairwiseEnumerator_hasPrev = Symbol("PairwiseEnumerator_hasPrev");
  const PairwiseEnumerator_prev = Symbol("PairwiseEnumerator_prev");

  interface TProperties<T> {
    [PairwiseEnumerator_hasPrev]: boolean;
    [PairwiseEnumerator_prev]: T;
  }

  const createPairwiseEnumerator = mixInstanceFactory(
    include(MutableEnumeratorMixin(), DelegatingEnumeratorMixin<T>()),
    function PairwiseEnumerator(
      instance: Pick<EnumeratorLike<Tuple2<T, T>>, typeof EnumeratorLike_move> &
        TProperties<T>,
      delegate: EnumeratorLike<T>,
    ): EnumeratorLike<Tuple2<T, T>> {
      init(MutableEnumeratorMixin<Tuple2<T, T>>(), instance);
      init(DelegatingEnumeratorMixin<T>(), instance, delegate);

      return instance;
    },
    props<TProperties<T>>({
      [PairwiseEnumerator_hasPrev]: false,
      [PairwiseEnumerator_prev]: none,
    }),
    {
      [EnumeratorLike_move](
        this: TProperties<T> &
          MutableEnumeratorLike<Tuple2<T, T>> &
          DelegatingEnumeratorMixinLike<T>,
      ): boolean {
        if (this[MutableEnumeratorLike_reset]()) {
          return false;
        }

        const delegate = this[DelegatingEnumeratorMixinLike_delegate];
        const delegateHasCurrent = delegate[EnumeratorLike_move]();

        if (delegateHasCurrent && this[PairwiseEnumerator_hasPrev]) {
          const next = delegate[EnumeratorLike_current];
          this[EnumeratorLike_current] = tuple(
            this[PairwiseEnumerator_prev],
            next,
          );
          this[PairwiseEnumerator_prev] = next;
          return true;
        } else if (delegateHasCurrent) {
          this[PairwiseEnumerator_prev] = delegate[EnumeratorLike_current];
          this[PairwiseEnumerator_hasPrev] = true;

          return this[EnumeratorLike_move]();
        } else {
          this[EnumeratorLike_isCompleted] = true;
          return false;
        }
      },
    },
  );

  return pipe(createPairwiseEnumerator, Enumerable_lift, returns);
})();

export default Enumerable_pairwise;
