import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mixin1,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { none, returns } from "../../../functions";
import { SinkLike, SinkLike_notify } from "../../../rx";
import Disposable_delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";

const Sink_pairwiseMixin: <T>() => Mixin1<
  SinkLike<T>,
  SinkLike<readonly [T, T]>
> = /*@__PURE__*/ (<T>() => {
  const PairwiseSinkMixin_prev = Symbol("PairwiseSinkMixin_prev");
  const PairwiseSinkMixin_hasPrev = Symbol("PairwiseSinkMixin_hasPrev");

  type TProperties = {
    [PairwiseSinkMixin_prev]: T;
    [PairwiseSinkMixin_hasPrev]: boolean;
  };

  return returns(
    mix(
      include(Disposable_delegatingMixin()),
      function PairwiseSinkMixin(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<readonly [T, T]>,
      ): SinkLike<T> {
        init(Disposable_delegatingMixin(), instance, delegate);
        return instance;
      },
      props<TProperties>({
        [PairwiseSinkMixin_prev]: none,
        [PairwiseSinkMixin_hasPrev]: false,
      }),
      {
        [SinkLike_notify](
          this: TProperties & DelegatingLike<SinkLike<readonly [T, T]>>,
          next: T,
        ) {
          const prev = this[PairwiseSinkMixin_prev];

          if (this[PairwiseSinkMixin_hasPrev]) {
            this[DelegatingLike_delegate][SinkLike_notify]([prev, next]);
          }

          this[PairwiseSinkMixin_hasPrev] = true;
          this[PairwiseSinkMixin_prev] = next;
        },
      },
    ),
  );
})();

export default Sink_pairwiseMixin;
