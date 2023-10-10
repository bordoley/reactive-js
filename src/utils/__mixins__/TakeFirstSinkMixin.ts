import { clampPositiveInteger, max } from "../../__internal__/math.js";
import {
  Mixin2,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { Optional, returns } from "../../functions.js";
import {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
  DisposableLike_dispose,
  SinkLike,
  SinkLike_notify,
} from "../../utils.js";
import DelegatingDisposableMixin from "./DelegatingDisposableMixin.js";

const TakeFirstSinkMixin_count = Symbol("TakeFirstSinkMixin_count");

interface TProperties {
  [TakeFirstSinkMixin_count]: number;
}

const TakeFirstSinkMixin: <T>() => Mixin2<
  SinkLike<T>,
  SinkLike<T>,
  Optional<number>,
  unknown,
  Pick<SinkLike<T>, typeof SinkLike_notify>
> = /*@__PURE__*/ (<T>() =>
  returns(
    mix(
      include(DelegatingDisposableMixin<SinkLike<T>>()),
      function TakeFirstSinkMixin(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> & TProperties,
        delegate: SinkLike<T>,
        takeCount: Optional<number>,
      ): SinkLike<T> {
        init(DelegatingDisposableMixin<SinkLike<T>>(), instance, delegate);
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

export default TakeFirstSinkMixin;
