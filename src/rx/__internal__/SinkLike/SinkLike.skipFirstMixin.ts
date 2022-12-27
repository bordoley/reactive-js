import {
  Mixin2,
  Mutable,
  include,
  init,
  mixin,
  props,
} from "../../../__internal__/mixins";
import { none, pipe, returns } from "../../../functions";
import { SinkLike, SinkLike_notify } from "../../../rx";
import DisposableLike__delegatingMixin from "../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin";
import { notify } from "../../SinkLike";
import { DelegatingSinkLike_delegate } from "../rx.internal";

const skipFirstMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, number> =
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
      mixin(
        include(DisposableLike__delegatingMixin),
        function SkipFirstSink(
          instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
            Mutable<TProperties>,
          delegate: SinkLike<T>,
          skipCount: number,
        ): SinkLike<T> {
          init(DisposableLike__delegatingMixin, instance, delegate);

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
              pipe(this[DelegatingSinkLike_delegate], notify(next));
            }
          },
        },
      ),
    );
  })();

export default skipFirstMixin;
