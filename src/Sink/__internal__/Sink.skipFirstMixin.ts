import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import {
  Mixin2,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  SkipFirstLike,
  SkipFirstLike_count,
  SkipFirstLike_skipCount,
} from "../../__internal__/types.js";
import { returns } from "../../functions.js";
import { SinkLike, SinkLike_notify } from "../../types.js";

const Sink_skipFirstMixin: <T>() => Mixin2<
  SinkLike<T>,
  SinkLike<T>,
  number,
  unknown,
  Pick<SinkLike<T>, typeof SinkLike_notify>
> = /*@__PURE__*/ (<T>() =>
  returns(
    mix(
      include(Disposable_delegatingMixin, Delegating_mixin()),
      function SkipFirstSinkMixin(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> & SkipFirstLike,
        delegate: SinkLike<T>,
        skipCount: number,
      ): SinkLike<T> {
        init(Disposable_delegatingMixin, instance, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[SkipFirstLike_skipCount] = skipCount;

        return instance;
      },
      props<SkipFirstLike>({
        [SkipFirstLike_skipCount]: 0,
        [SkipFirstLike_count]: 0,
      }),
      {
        [SinkLike_notify](
          this: SkipFirstLike & DelegatingLike<SinkLike<T>> & SinkLike<T>,
          next: T,
        ) {
          this[SkipFirstLike_count]++;
          if (this[SkipFirstLike_count] > this[SkipFirstLike_skipCount]) {
            this[DelegatingLike_delegate][SinkLike_notify](next);
          }
        },
      },
    ),
  ))();

export default Sink_skipFirstMixin;
