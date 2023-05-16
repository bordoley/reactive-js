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
  DistinctUntilChangedLike,
  DistinctUntilChangedLike_equality,
  DistinctUntilChangedLike_hasValue,
  DistinctUntilChangedLike_prev,
} from "../../__internal__/types.js";
import { Equality, none, returns } from "../../functions.js";
import { SinkLike, SinkLike_notify } from "../../types.js";

const Sink_distinctUntilChangedMixin: <T>() => Mixin2<
  SinkLike<T>,
  SinkLike<T>,
  Equality<T>,
  unknown,
  Pick<SinkLike<T>, typeof SinkLike_notify>
> = /*@__PURE__*/ (<T>() =>
  returns(
    mix(
      include(Delegating_mixin(), Disposable_delegatingMixin),
      function DistinctUntilChangedSinkMixin(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          DistinctUntilChangedLike<T>,
        delegate: SinkLike<T>,
        equality: Equality<T>,
      ): SinkLike<T> {
        init(Disposable_delegatingMixin, instance, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[DistinctUntilChangedLike_equality] = equality;

        return instance;
      },
      props<DistinctUntilChangedLike<T>>({
        [DistinctUntilChangedLike_equality]: none,
        [DistinctUntilChangedLike_prev]: none,
        [DistinctUntilChangedLike_hasValue]: false,
      }),
      {
        [SinkLike_notify](
          this: DistinctUntilChangedLike<T> &
            DelegatingLike<SinkLike<T>> &
            SinkLike<T>,
          next: T,
        ) {
          const shouldEmit =
            !this[DistinctUntilChangedLike_hasValue] ||
            !this[DistinctUntilChangedLike_equality](
              this[DistinctUntilChangedLike_prev],
              next,
            );

          if (shouldEmit) {
            this[DistinctUntilChangedLike_prev] = next;
            this[DistinctUntilChangedLike_hasValue] = true;
            this[DelegatingLike_delegate][SinkLike_notify](next);
          }
        },
      },
    ),
  ))();

export default Sink_distinctUntilChangedMixin;
