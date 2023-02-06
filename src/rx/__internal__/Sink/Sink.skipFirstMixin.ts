import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mixin2,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { returns } from "../../../functions";
import { SinkLike, SinkLike_notify } from "../../../rx";
import Disposable_delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";

const Sink_skipFirstMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, number> =
  /*@__PURE__*/ (<T>() => {
    const SkipFirstSinkMixin_skipCount = Symbol("SkipFirstSinkMixin_skipCount");
    const SkipFirstSinkMixin_count = Symbol("SkipFirstSinkMixin_count");

    type TProperties = {
      readonly [SkipFirstSinkMixin_skipCount]: number;
      [SkipFirstSinkMixin_count]: number;
    };

    return returns(
      mix(
        include(Disposable_delegatingMixin()),
        function SkipFirstSinkMixin(
          instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
            Mutable<TProperties>,
          delegate: SinkLike<T>,
          skipCount: number,
        ): SinkLike<T> {
          init(Disposable_delegatingMixin(), instance, delegate);
          instance[SkipFirstSinkMixin_skipCount] = skipCount;

          return instance;
        },
        props<TProperties>({
          [SkipFirstSinkMixin_skipCount]: 0,
          [SkipFirstSinkMixin_count]: 0,
        }),
        {
          [SinkLike_notify](
            this: TProperties & DelegatingLike<SinkLike<T>>,
            next: T,
          ) {
            this[SkipFirstSinkMixin_count]++;
            if (
              this[SkipFirstSinkMixin_count] >
              this[SkipFirstSinkMixin_skipCount]
            ) {
              this[DelegatingLike_delegate][SinkLike_notify](next);
            }
          },
        },
      ),
    );
  })();

export default Sink_skipFirstMixin;
