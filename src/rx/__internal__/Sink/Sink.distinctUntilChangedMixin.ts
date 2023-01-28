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
  const DistinctUntilChangedSinkMixin_equality = Symbol(
    "DistinctUntilChangedSinkMixin_equality",
  );
  const DistinctUntilChangedSinkMixin_prev = Symbol(
    "DistinctUntilChangedSinkMixin_prev",
  );
  const DistinctUntilChangedSinkMixin_hasValue = Symbol(
    "DistinctUntilChangedSinkMixin_hasValue",
  );

  type TProperties = {
    readonly [DelegatingSinkLike_delegate]: SinkLike<T>;
    readonly [DistinctUntilChangedSinkMixin_equality]: Equality<T>;
    [DistinctUntilChangedSinkMixin_prev]: T;
    [DistinctUntilChangedSinkMixin_hasValue]: boolean;
  };

  return returns(
    mix(
      include(Disposable_delegatingMixin),
      function DistinctUntilChangedSinkMixin(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<T>,
        equality: Equality<T>,
      ): SinkLike<T> {
        init(Disposable_delegatingMixin, instance, delegate);

        instance[DelegatingSinkLike_delegate] = delegate;
        instance[DistinctUntilChangedSinkMixin_equality] = equality;

        return instance;
      },
      props<TProperties>({
        [DelegatingSinkLike_delegate]: none,
        [DistinctUntilChangedSinkMixin_equality]: none,
        [DistinctUntilChangedSinkMixin_prev]: none,
        [DistinctUntilChangedSinkMixin_hasValue]: false,
      }),
      {
        [SinkLike_notify](this: TProperties, next: T) {
          const shouldEmit =
            !this[DistinctUntilChangedSinkMixin_hasValue] ||
            !this[DistinctUntilChangedSinkMixin_equality](
              this[DistinctUntilChangedSinkMixin_prev],
              next,
            );

          if (shouldEmit) {
            this[DistinctUntilChangedSinkMixin_prev] = next;
            this[DistinctUntilChangedSinkMixin_hasValue] = true;
            this[DelegatingSinkLike_delegate][SinkLike_notify](next);
          }
        },
      },
    ),
  );
})();

export default Sink_distinctUntilChangedMixin;
