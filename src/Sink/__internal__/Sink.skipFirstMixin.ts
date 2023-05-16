import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import {
  Mixin2,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  __SkipFirstSinkMixin_count,
  __SkipFirstSinkMixin_skipCount,
} from "../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../__internal__/types.js";
import { returns } from "../../functions.js";
import { SinkLike, SinkLike_notify } from "../../types.js";

const Sink_skipFirstMixin: <T>() => Mixin2<
  SinkLike<T>,
  SinkLike<T>,
  number,
  unknown,
  Pick<SinkLike<T>, typeof SinkLike_notify>
> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    readonly [__SkipFirstSinkMixin_skipCount]: number;
    [__SkipFirstSinkMixin_count]: number;
  };
  return returns(
    mix(
      include(Disposable_delegatingMixin, Delegating_mixin()),
      function SkipFirstSinkMixin(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<T>,
        skipCount: number,
      ): SinkLike<T> {
        init(Disposable_delegatingMixin, instance, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[__SkipFirstSinkMixin_skipCount] = skipCount;

        return instance;
      },
      props<TProperties>({
        [__SkipFirstSinkMixin_skipCount]: 0,
        [__SkipFirstSinkMixin_count]: 0,
      }),
      {
        [SinkLike_notify](
          this: TProperties & DelegatingLike<SinkLike<T>> & SinkLike<T>,
          next: T,
        ) {
          this[__SkipFirstSinkMixin_count]++;
          if (
            this[__SkipFirstSinkMixin_count] >
            this[__SkipFirstSinkMixin_skipCount]
          ) {
            this[DelegatingLike_delegate][SinkLike_notify](next);
          }
        },
      },
    ),
  );
})();

export default Sink_skipFirstMixin;
