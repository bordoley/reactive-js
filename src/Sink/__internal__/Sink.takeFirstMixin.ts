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
import {
  DisposableLike_dispose,
  SinkLike,
  SinkLike_notify,
} from "../../types.js";

const Sink_takeFirstMixin: <T>() => Mixin2<
  SinkLike<T>,
  SinkLike<T>,
  number,
  unknown,
  Pick<SinkLike<T>, typeof SinkLike_notify>
> = /*@__PURE__*/ (<T>() =>
  returns(
    mix(
      include(Disposable_delegatingMixin, Delegating_mixin()),
      function TakeFirstObserver(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> & CountingLike,
        delegate: SinkLike<T>,
        takeCount: number,
      ): SinkLike<T> {
        init(Disposable_delegatingMixin, instance, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[CountingLike_count] = takeCount;

        if (takeCount === 0) {
          instance[DisposableLike_dispose]();
        }

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
          this[DelegatingLike_delegate][SinkLike_notify](next);
          if (this[CountingLike_count] <= 0) {
            this[DisposableLike_dispose]();
          }
        },
      },
    ),
  ))();

export default Sink_takeFirstMixin;
