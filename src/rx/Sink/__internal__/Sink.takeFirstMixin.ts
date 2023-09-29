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
  DisposableLike_dispose,
} from "../../../utils.js";
import Disposable_delegatingMixin from "../../../utils/Disposable/__internal__/Disposable.delegatingMixin.js";

const TakeFirstSinkMixin_count = Symbol("TakeFirstSinkMixin_count");

interface TProperties {
  [TakeFirstSinkMixin_count]: number;
}

const Sink_takeFirstMixin: <T>() => Mixin2<
  SinkLike<T>,
  SinkLike<T>,
  Optional<number>,
  unknown,
  Pick<SinkLike<T>, typeof SinkLike_notify>
> = /*@__PURE__*/ (<T>() =>
  returns(
    mix(
      include(Disposable_delegatingMixin<SinkLike<T>>()),
      function TakeFirstSinkMixin(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> & TProperties,
        delegate: SinkLike<T>,
        takeCount: Optional<number>,
      ): SinkLike<T> {
        init(Disposable_delegatingMixin<SinkLike<T>>(), instance, delegate);
        instance[TakeFirstSinkMixin_count] = clampPositiveInteger(
          takeCount ?? 1,
        );

        if (takeCount === 0) {
          instance[DisposableLike_dispose]();
        }

        return instance;
      },
      props<TProperties>({
        [TakeFirstSinkMixin_count]: 0,
      }),
      {
        [SinkLike_notify](
          this: TProperties &
            DelegatingDisposableLike<SinkLike<T>> &
            SinkLike<T>,
          next: T,
        ) {
          this[TakeFirstSinkMixin_count] = max(
            this[TakeFirstSinkMixin_count] - 1,
            -1,
          );
          this[DelegatingDisposableLike_delegate][SinkLike_notify](next);
          if (this[TakeFirstSinkMixin_count] <= 0) {
            this[DisposableLike_dispose]();
          }
        },
      },
    ),
  ))();

export default Sink_takeFirstMixin;
