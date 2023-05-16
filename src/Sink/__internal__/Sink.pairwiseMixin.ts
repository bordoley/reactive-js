import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import {
  Mixin1,
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
import { SinkLike, SinkLike_notify } from "../../types.js";

const Sink_pairwiseMixin: <T>() => Mixin1<
  SinkLike<T>,
  SinkLike<readonly [T, T]>,
  unknown,
  Pick<SinkLike<T>, typeof SinkLike_notify>
> = /*@__PURE__*/ (<T>() =>
  returns(
    mix(
      include(Disposable_delegatingMixin, Delegating_mixin()),
      function PairwiseSinkMixin(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> & PairwiseLike<T>,
        delegate: SinkLike<readonly [T, T]>,
      ): SinkLike<T> {
        init(Disposable_delegatingMixin, instance, delegate);
        init(Delegating_mixin(), instance, delegate);

        return instance;
      },
      props<PairwiseLike<T>>({
        [PairwiseLike_prev]: none,
        [PairwiseLike_hasPrev]: false,
      }),
      {
        [SinkLike_notify](
          this: PairwiseLike<T> &
            DelegatingLike<SinkLike<readonly [T, T]>> &
            SinkLike<T>,
          next: T,
        ) {
          const prev = this[PairwiseLike_prev];

          if (this[PairwiseLike_hasPrev]) {
            this[DelegatingLike_delegate][SinkLike_notify]([prev, next]);
          }

          this[PairwiseLike_hasPrev] = true;
          this[PairwiseLike_prev] = next;
        },
      },
    ),
  ))();

export default Sink_pairwiseMixin;
