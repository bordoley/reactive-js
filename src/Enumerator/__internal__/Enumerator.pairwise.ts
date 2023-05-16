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
  PairwiseLike,
  PairwiseLike_hasPrev,
  PairwiseLike_prev,
} from "../../__internal__/types.js";
import { none, returns } from "../../functions.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../types.js";
import MutableEnumerator_mixin, {
  MutableEnumeratorLike,
  MutableEnumeratorLike_reset,
} from "./MutableEnumerator.mixin.js";

const Enumerator_pairwise: Enumerator.Signature["pairwise"] = /*@__PURE__*/ (<
  T,
>() =>
  returns(
    createInstanceFactory(
      mix(
        include(MutableEnumerator_mixin(), Delegating_mixin()),
        function PairwiseEnumerator(
          instance: Pick<
            EnumeratorLike<readonly [T, T]>,
            typeof EnumeratorLike_move
          > &
            PairwiseLike<T>,
          delegate: EnumeratorLike<T>,
        ): EnumeratorLike<readonly [T, T]> {
          init(MutableEnumerator_mixin<readonly [T, T]>(), instance);
          init(Delegating_mixin(), instance, delegate);

          return instance;
        },
        props<PairwiseLike<T>>({
          [PairwiseLike_prev]: none,
          [PairwiseLike_hasPrev]: false,
        }),
        {
          [EnumeratorLike_move](
            this: PairwiseLike<T> &
              MutableEnumeratorLike<readonly [T, T]> &
              DelegatingLike<EnumeratorLike<T>>,
          ): boolean {
            this[MutableEnumeratorLike_reset]();

            const delegate = this[DelegatingLike_delegate];
            const delegateHasCurrent = delegate[EnumeratorLike_move]();

            if (delegateHasCurrent && this[PairwiseLike_hasPrev]) {
              const next = delegate[EnumeratorLike_current];
              this[EnumeratorLike_current] = [this[PairwiseLike_prev], next];
              this[PairwiseLike_prev] = next;
              return true;
            } else if (delegateHasCurrent) {
              this[PairwiseLike_prev] = delegate[EnumeratorLike_current];
              this[PairwiseLike_hasPrev] = true;

              return this[EnumeratorLike_move]();
            } else {
              return false;
            }
          },
        },
      ),
    ),
  ))();

export default Enumerator_pairwise;
