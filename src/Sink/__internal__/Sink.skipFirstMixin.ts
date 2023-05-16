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
  __SkipFirstObserver_count,
  __SkipFirstObserver_skipCount,
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
    readonly [__SkipFirstObserver_skipCount]: number;
    [__SkipFirstObserver_count]: number;
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
        instance[__SkipFirstObserver_skipCount] = skipCount;

        return instance;
      },
      props<TProperties>({
        [__SkipFirstObserver_skipCount]: 0,
        [__SkipFirstObserver_count]: 0,
      }),
      {
        [SinkLike_notify](
          this: TProperties & DelegatingLike<SinkLike<T>> & SinkLike<T>,
          next: T,
        ) {
          this[__SkipFirstObserver_count]++;
          if (
            this[__SkipFirstObserver_count] >
            this[__SkipFirstObserver_skipCount]
          ) {
            this[DelegatingLike_delegate][SinkLike_notify](next);
          }
        },
      },
    ),
  );
})();

export default Sink_skipFirstMixin;
