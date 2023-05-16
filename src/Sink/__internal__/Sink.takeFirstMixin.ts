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
  TakeFirstLike,
  TakeFirstLike_count,
  TakeFirstLike_takeCount,
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
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> & TakeFirstLike,
        delegate: SinkLike<T>,
        takeCount: number,
      ): SinkLike<T> {
        init(Disposable_delegatingMixin, instance, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[TakeFirstLike_takeCount] = takeCount;

        if (takeCount === 0) {
          instance[DisposableLike_dispose]();
        }

        return instance;
      },
      props<TakeFirstLike>({
        [TakeFirstLike_count]: 0,
        [TakeFirstLike_takeCount]: 0,
      }),
      {
        [SinkLike_notify](
          this: TakeFirstLike & DelegatingLike<SinkLike<T>> & SinkLike<T>,
          next: T,
        ) {
          this[TakeFirstLike_count]++;
          this[DelegatingLike_delegate][SinkLike_notify](next);
          if (this[TakeFirstLike_count] >= this[TakeFirstLike_takeCount]) {
            this[DisposableLike_dispose]();
          }
        },
      },
    ),
  ))();

export default Sink_takeFirstMixin;
