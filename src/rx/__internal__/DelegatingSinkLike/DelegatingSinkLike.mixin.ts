import {
  Mixin1,
  Mutable,
  include,
  init,
  mixin as mix,
  props,
} from "../../../__internal__/mixins";
import { none, returns } from "../../../functions";
import { SinkLike, SinkLike_notify } from "../../../rx";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import { DelegateSinkLike, DelegatingSinkLike_delegate } from "../rx.internal";

const mixin: <T>() => Mixin1<DelegateSinkLike<T>, SinkLike<T>> =
  /*@__PURE__*/ (<T>() => {
    type TProperties = {
      [DelegatingSinkLike_delegate]: SinkLike<T>;
    };

    return returns(
      mix(
        include(DisposableLike__mixin),
        function DelegatingSink(
          instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
            Mutable<TProperties>,
          delegate: SinkLike<T>,
        ): DelegateSinkLike<T> {
          init(DisposableLike__mixin, instance);

          instance[DelegatingSinkLike_delegate] = delegate;

          return instance;
        },
        props<TProperties>({
          [DelegatingSinkLike_delegate]: none,
        }),
        {
          [SinkLike_notify](this: TProperties, v: T) {
            this[DelegatingSinkLike_delegate][SinkLike_notify](v);
          },
        },
      ),
    );
  })();

export default mixin;
