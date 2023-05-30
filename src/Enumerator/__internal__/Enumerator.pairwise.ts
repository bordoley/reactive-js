import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";

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
import { Function1, Tuple2, none, returns } from "../../functions.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_isCompleted,
  EnumeratorLike_move,
} from "../../types.js";
import MutableEnumerator_mixin, {
  MutableEnumeratorLike,
  MutableEnumeratorLike_reset,
} from "./MutableEnumerator.mixin.js";

const Enumerator_pairwise: <T>() => Function1<
  EnumeratorLike<T>,
  EnumeratorLike<Tuple2<T, T>>
> = /*@__PURE__*/ (<T>() =>
  returns(
    createInstanceFactory(
      mix(
        include(
          MutableEnumerator_mixin(),
          Delegating_mixin(),
          Disposable_delegatingMixin,
        ),
        function PairwiseEnumerator(
          instance: Pick<
            EnumeratorLike<Tuple2<T, T>>,
            typeof EnumeratorLike_move
          > &
            PairwiseLike<T>,
          delegate: EnumeratorLike<T>,
        ): EnumeratorLike<Tuple2<T, T>> {
          init(MutableEnumerator_mixin<Tuple2<T, T>>(), instance);
          init(Delegating_mixin(), instance, delegate);
          init(Disposable_delegatingMixin, instance, delegate);

          return instance;
        },
        props<PairwiseLike<T>>({
          [PairwiseLike_prev]: none,
          [PairwiseLike_hasPrev]: false,
        }),
        {
          [EnumeratorLike_move](
            this: PairwiseLike<T> &
              MutableEnumeratorLike<Tuple2<T, T>> &
              DelegatingLike<EnumeratorLike<T>>,
          ): boolean {
            if (this[MutableEnumeratorLike_reset]()) {
              return false;
            }

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
              this[EnumeratorLike_isCompleted] = true;
              return false;
            }
          },
        },
      ),
    ),
  ))();

export default Enumerator_pairwise;
