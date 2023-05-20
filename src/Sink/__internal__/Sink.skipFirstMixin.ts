import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import { max } from "../../__internal__/math.js";
import {
  Mixin2,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  CountingLike,
  CountingLike_count,
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
> = /*@__PURE__*/ (<T>() =>
  returns(
    mix(
      include(Disposable_delegatingMixin, Delegating_mixin()),
      function SkipFirstSinkMixin(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> & CountingLike,
        delegate: SinkLike<T>,
        skipCount: number,
      ): SinkLike<T> {
        init(Disposable_delegatingMixin, instance, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[CountingLike_count] = skipCount;

        return instance;
      },
      props<CountingLike>({
        [CountingLike_count]: 0,
      }),
      {
        [SinkLike_notify](
          this: CountingLike & DelegatingLike<SinkLike<T>> & SinkLike<T>,
          next: T,
        ) {
          this[CountingLike_count] = max(this[CountingLike_count] - 1, -1);
          if (this[CountingLike_count] < 0) {
            this[DelegatingLike_delegate][SinkLike_notify](next);
          }
        },
      },
    ),
  ))();

export default Sink_skipFirstMixin;
