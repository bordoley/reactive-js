import {
  Mixin1,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { none, pipe, returns } from "../../../functions";
import { SinkLike, SinkLike_notify } from "../../../rx";
import DisposableLike__delegatingMixin from "../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin";
import { notify } from "../../SinkLike";
import { DelegatingSinkLike_delegate } from "../rx.internal";

const SinkLike__pairwiseMixin: <T>() => Mixin1<
  SinkLike<T>,
  SinkLike<readonly [T, T]>
> = /*@__PURE__*/ (<T>() => {
  const PairwiseSink_private_prev = Symbol("PairwiseSink_private_prev");
  const PairwiseSink_private_hasPrev = Symbol("PairwiseSink_private_hasPrev");

  type TProperties = {
    readonly [DelegatingSinkLike_delegate]: SinkLike<readonly [T, T]>;
    [PairwiseSink_private_prev]: T;
    [PairwiseSink_private_hasPrev]: boolean;
  };

  return returns(
    mix(
      include(DisposableLike__delegatingMixin),
      function PairwiseSink(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<readonly [T, T]>,
      ): SinkLike<T> {
        init(DisposableLike__delegatingMixin, instance, delegate);

        instance[DelegatingSinkLike_delegate] = delegate;

        return instance;
      },
      props<TProperties>({
        [DelegatingSinkLike_delegate]: none,
        [PairwiseSink_private_prev]: none,
        [PairwiseSink_private_hasPrev]: false,
      }),
      {
        [SinkLike_notify](this: TProperties, next: T) {
          const prev = this[PairwiseSink_private_prev];

          if (this[PairwiseSink_private_hasPrev]) {
            pipe(
              this[DelegatingSinkLike_delegate],
              notify<SinkLike<readonly [T, T]>, readonly [T, T]>([prev, next]),
            );
          }

          this[PairwiseSink_private_hasPrev] = true;
          this[PairwiseSink_private_prev] = next;
        },
      },
    ),
  );
})();

export default SinkLike__pairwiseMixin;
