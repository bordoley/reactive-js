import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Tuple2, none, pipe, returns } from "../../../functions.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_isCompleted,
  EnumeratorLike_move,
} from "../../../ix.js";
import {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
} from "../../../utils.js";
import Disposable_delegatingMixin from "../../../utils/Disposable/__internal__/Disposable.delegatingMixin.js";
import type * as Enumerable from "../../Enumerable.js";
import MutableEnumerator_mixin, {
  MutableEnumeratorLike,
  MutableEnumeratorLike_reset,
} from "../../Enumerator/__internal__/MutableEnumerator.mixin.js";
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

  const createPairwiseEnumerator = createInstanceFactory(
    mix(
      include(
        MutableEnumerator_mixin(),
        Disposable_delegatingMixin<EnumeratorLike<T>>(),
      ),
      function PairwiseEnumerator(
        instance: Pick<
          EnumeratorLike<Tuple2<T, T>>,
          typeof EnumeratorLike_move
        > &
          TProperties<T>,
        delegate: EnumeratorLike<T>,
      ): EnumeratorLike<Tuple2<T, T>> {
        init(MutableEnumerator_mixin<Tuple2<T, T>>(), instance);
        init(
          Disposable_delegatingMixin<EnumeratorLike<T>>(),
          instance,
          delegate,
        );

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
            DelegatingDisposableLike<EnumeratorLike<T>>,
        ): boolean {
          if (this[MutableEnumeratorLike_reset]()) {
            return false;
          }

          const delegate = this[DelegatingDisposableLike_delegate];
          const delegateHasCurrent = delegate[EnumeratorLike_move]();

          if (delegateHasCurrent && this[PairwiseEnumerator_hasPrev]) {
            const next = delegate[EnumeratorLike_current];
            this[EnumeratorLike_current] = [
              this[PairwiseEnumerator_prev],
              next,
            ];
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
    ),
  );

  return pipe(createPairwiseEnumerator, Enumerable_lift, returns);
})();

export default Enumerable_pairwise;
