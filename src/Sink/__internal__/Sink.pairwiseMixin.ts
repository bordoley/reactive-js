import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import {
  Mixin1,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  __PairwiseObserver_hasPrev,
  __PairwiseObserver_prev,
} from "../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../__internal__/types.js";
import { none, returns } from "../../functions.js";
import { SinkLike, SinkLike_notify } from "../../types.js";

const Sink_pairwiseMixin: <T>() => Mixin1<
  SinkLike<T>,
  SinkLike<readonly [T, T]>,
  unknown,
  Pick<SinkLike<T>, typeof SinkLike_notify>
> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [__PairwiseObserver_prev]: T;
    [__PairwiseObserver_hasPrev]: boolean;
  };

  return returns(
    mix(
      include(Disposable_delegatingMixin, Delegating_mixin()),
      function PairwiseSinkMixin(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<readonly [T, T]>,
      ): SinkLike<T> {
        init(Disposable_delegatingMixin, instance, delegate);
        init(Delegating_mixin(), instance, delegate);

        return instance;
      },
      props<TProperties>({
        [__PairwiseObserver_prev]: none,
        [__PairwiseObserver_hasPrev]: false,
      }),
      {
        [SinkLike_notify](
          this: TProperties &
            DelegatingLike<SinkLike<readonly [T, T]>> &
            SinkLike<T>,
          next: T,
        ) {
          const prev = this[__PairwiseObserver_prev];

          if (this[__PairwiseObserver_hasPrev]) {
            this[DelegatingLike_delegate][SinkLike_notify]([prev, next]);
          }

          this[__PairwiseObserver_hasPrev] = true;
          this[__PairwiseObserver_prev] = next;
        },
      },
    ),
  );
})();

export default Sink_pairwiseMixin;
