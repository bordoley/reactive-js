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
  __DistinctUntilChangedSinkMixin_equality,
  __DistinctUntilChangedSinkMixin_hasValue,
  __DistinctUntilChangedSinkMixin_prev,
} from "../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../__internal__/types.js";
import { Equality, none, returns } from "../../functions.js";
import { SinkLike, SinkLike_notify } from "../../types.js";

const Sink_distinctUntilChangedMixin: <T>() => Mixin2<
  SinkLike<T>,
  SinkLike<T>,
  Equality<T>,
  unknown,
  Pick<SinkLike<T>, typeof SinkLike_notify>
> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    readonly [__DistinctUntilChangedSinkMixin_equality]: Equality<T>;
    [__DistinctUntilChangedSinkMixin_prev]: T;
    [__DistinctUntilChangedSinkMixin_hasValue]: boolean;
  };

  return returns(
    mix(
      include(Delegating_mixin(), Disposable_delegatingMixin),
      function DistinctUntilChangedSinkMixin(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<T>,
        equality: Equality<T>,
      ): SinkLike<T> {
        init(Disposable_delegatingMixin, instance, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[__DistinctUntilChangedSinkMixin_equality] = equality;

        return instance;
      },
      props<TProperties>({
        [__DistinctUntilChangedSinkMixin_equality]: none,
        [__DistinctUntilChangedSinkMixin_prev]: none,
        [__DistinctUntilChangedSinkMixin_hasValue]: false,
      }),
      {
        [SinkLike_notify](
          this: TProperties & DelegatingLike<SinkLike<T>> & SinkLike<T>,
          next: T,
        ) {
          const shouldEmit =
            !this[__DistinctUntilChangedSinkMixin_hasValue] ||
            !this[__DistinctUntilChangedSinkMixin_equality](
              this[__DistinctUntilChangedSinkMixin_prev],
              next,
            );

          if (shouldEmit) {
            this[__DistinctUntilChangedSinkMixin_prev] = next;
            this[__DistinctUntilChangedSinkMixin_hasValue] = true;
            this[DelegatingLike_delegate][SinkLike_notify](next);
          }
        },
      },
    ),
  );
})();

export default Sink_distinctUntilChangedMixin;
