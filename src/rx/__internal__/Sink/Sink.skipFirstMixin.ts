import {
  Mixin2,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { none, returns } from "../../../functions";
import { SinkLike, SinkLike_notify } from "../../../rx";
import Disposable_delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import { DelegatingSinkLike_delegate } from "../rx.internal";

const Sink_skipFirstMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, number> =
  /*@__PURE__*/ (<T>() => {
    const SkipFirstSink_private_skipCount = Symbol(
      "SkipFirstSink_private_skipCount",
    );

    const SkipFirstSink_private_count = Symbol("SkipFirstSink_private_count");

    type TProperties = {
      readonly [DelegatingSinkLike_delegate]: SinkLike<T>;
      readonly [SkipFirstSink_private_skipCount]: number;
      [SkipFirstSink_private_count]: number;
    };

    return returns(
      mix(
        include(Disposable_delegatingMixin),
        function SkipFirstSink(
          instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
            Mutable<TProperties>,
          delegate: SinkLike<T>,
          skipCount: number,
        ): SinkLike<T> {
          init(Disposable_delegatingMixin, instance, delegate);

          instance[DelegatingSinkLike_delegate] = delegate;
          instance[SkipFirstSink_private_skipCount] = skipCount;

          return instance;
        },
        props<TProperties>({
          [DelegatingSinkLike_delegate]: none,
          [SkipFirstSink_private_skipCount]: 0,
          [SkipFirstSink_private_count]: 0,
        }),
        {
          [SinkLike_notify](this: TProperties, next: T) {
            this[SkipFirstSink_private_count]++;
            if (
              this[SkipFirstSink_private_count] >
              this[SkipFirstSink_private_skipCount]
            ) {
              this[DelegatingSinkLike_delegate][SinkLike_notify](next);
            }
          },
        },
      ),
    );
  })();

export default Sink_skipFirstMixin;
