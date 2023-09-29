import { clampPositiveInteger, max } from "../../../__internal__/math.js";
import {
  Mixin2,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Optional, returns } from "../../../functions.js";
import { SinkLike, SinkLike_notify } from "../../../rx.js";
import {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
} from "../../../utils.js";
import Disposable_delegatingMixin from "../../../utils/Disposable/__internal__/Disposable.delegatingMixin.js";

const SkipFirstSinkMixin_count = Symbol("SkipFirstSinkMixin_count");

interface TProperties {
  [SkipFirstSinkMixin_count]: number;
}

const Sink_skipFirstMixin: <T>() => Mixin2<
  SinkLike<T>,
  SinkLike<T>,
  Optional<number>,
  unknown,
  Pick<SinkLike<T>, typeof SinkLike_notify>
> = /*@__PURE__*/ (<T>() =>
  returns(
    mix(
      include(Disposable_delegatingMixin<SinkLike<T>>()),
      function SkipFirstSinkMixin(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> & TProperties,
        delegate: SinkLike<T>,
        skipCount: Optional<number>,
      ): SinkLike<T> {
        init(Disposable_delegatingMixin<SinkLike<T>>(), instance, delegate);
        instance[SkipFirstSinkMixin_count] = clampPositiveInteger(
          skipCount ?? 1,
        );

        return instance;
      },
      props<TProperties>({
        [SkipFirstSinkMixin_count]: 0,
      }),
      {
        [SinkLike_notify](
          this: TProperties &
            DelegatingDisposableLike<SinkLike<T>> &
            SinkLike<T>,
          next: T,
        ) {
          this[SkipFirstSinkMixin_count] = max(
            this[SkipFirstSinkMixin_count] - 1,
            -1,
          );
          if (this[SkipFirstSinkMixin_count] < 0) {
            this[DelegatingDisposableLike_delegate][SinkLike_notify](next);
          }
        },
      },
    ),
  ))();

export default Sink_skipFirstMixin;
