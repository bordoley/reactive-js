import {
  Mixin1,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { none, returns } from "../../../functions";
import { SinkLike, SinkLike_notify } from "../../../rx";
import Disposable$mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import { DelegateSinkLike, DelegatingSinkLike_delegate } from "../rx.internal";

const DelegateSink$mixin: <T>() => Mixin1<DelegateSinkLike<T>, SinkLike<T>> =
  /*@__PURE__*/ (<T>() => {
    type TProperties = {
      [DelegatingSinkLike_delegate]: SinkLike<T>;
    };

    return returns(
      mix(
        include(Disposable$mixin),
        function DelegatingSink(
          instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
            Mutable<TProperties>,
          delegate: SinkLike<T>,
        ): DelegateSinkLike<T> {
          init(Disposable$mixin, instance);

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

export default DelegateSink$mixin;
