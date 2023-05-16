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
  __PairwiseSinkMixin_hasPrev,
  __PairwiseSinkMixin_prev,
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
    [__PairwiseSinkMixin_prev]: T;
    [__PairwiseSinkMixin_hasPrev]: boolean;
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
        [__PairwiseSinkMixin_prev]: none,
        [__PairwiseSinkMixin_hasPrev]: false,
      }),
      {
        [SinkLike_notify](
          this: TProperties &
            DelegatingLike<SinkLike<readonly [T, T]>> &
            SinkLike<T>,
          next: T,
        ) {
          const prev = this[__PairwiseSinkMixin_prev];

          if (this[__PairwiseSinkMixin_hasPrev]) {
            this[DelegatingLike_delegate][SinkLike_notify]([prev, next]);
          }

          this[__PairwiseSinkMixin_hasPrev] = true;
          this[__PairwiseSinkMixin_prev] = next;
        },
      },
    ),
  );
})();

export default Sink_pairwiseMixin;
