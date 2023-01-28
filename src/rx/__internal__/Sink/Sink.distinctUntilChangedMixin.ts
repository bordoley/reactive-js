import {
  Mixin2,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Equality, none, returns } from "../../../functions";
import { SinkLike, SinkLike_notify } from "../../../rx";
import Disposable_delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import { DelegatingSinkLike_delegate } from "../rx.internal";

const Sink_distinctUntilChangedMixin: <T>() => Mixin2<
  SinkLike<T>,
  SinkLike<T>,
  Equality<T>
> = /*@__PURE__*/ (<T>() => {
  const DistinctUntilChangedSink_private_equality = Symbol(
    "DistinctUntilChangedSink_private_equality",
  );
  const DistinctUntilChangedSink_private_prev = Symbol(
    "DistinctUntilChangedSink_private_prev",
  );
  const DistinctUntilChangedSink_private_hasValue = Symbol(
    "DistinctUntilChangedSink_private_hasValue",
  );

  type TProperties = {
    readonly [DelegatingSinkLike_delegate]: SinkLike<T>;
    readonly [DistinctUntilChangedSink_private_equality]: Equality<T>;
    [DistinctUntilChangedSink_private_prev]: T;
    [DistinctUntilChangedSink_private_hasValue]: boolean;
  };

  return returns(
    mix(
      include(Disposable_delegatingMixin),
      function DistinctUntilChangedSink(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<T>,
        equality: Equality<T>,
      ): SinkLike<T> {
        init(Disposable_delegatingMixin, instance, delegate);

        instance[DelegatingSinkLike_delegate] = delegate;
        instance[DistinctUntilChangedSink_private_equality] = equality;

        return instance;
      },
      props<TProperties>({
        [DelegatingSinkLike_delegate]: none,
        [DistinctUntilChangedSink_private_equality]: none,
        [DistinctUntilChangedSink_private_prev]: none,
        [DistinctUntilChangedSink_private_hasValue]: false,
      }),
      {
        [SinkLike_notify](this: TProperties, next: T) {
          const shouldEmit =
            !this[DistinctUntilChangedSink_private_hasValue] ||
            !this[DistinctUntilChangedSink_private_equality](
              this[DistinctUntilChangedSink_private_prev],
              next,
            );

          if (shouldEmit) {
            this[DistinctUntilChangedSink_private_prev] = next;
            this[DistinctUntilChangedSink_private_hasValue] = true;
            this[DelegatingSinkLike_delegate][SinkLike_notify](next);
          }
        },
      },
    ),
  );
})();

export default Sink_distinctUntilChangedMixin;
