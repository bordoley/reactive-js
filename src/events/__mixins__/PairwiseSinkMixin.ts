import {
  Mixin1,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { SinkLike, SinkLike_notify } from "../../events.js";
import { Tuple2, none, returns, tuple } from "../../functions.js";
import DelegatingDisposableMixin, {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
} from "../../utils/__mixins__/DelegatingDisposableMixin.js";

const PairwiseSinkMixin_hasPrev = Symbol("PairwiseSinkMixin_hasPrev");
const PairwiseSinkMixin_prev = Symbol("PairwiseSinkMixin_prev");

interface TProperties<T> {
  [PairwiseSinkMixin_hasPrev]: boolean;
  [PairwiseSinkMixin_prev]: T;
}

const PairwiseSinkMixin: <T>() => Mixin1<
  SinkLike<T>,
  SinkLike<Tuple2<T, T>>,
  unknown,
  Pick<SinkLike<T>, typeof SinkLike_notify>
> = /*@__PURE__*/ (<T>() =>
  returns(
    mix(
      include(DelegatingDisposableMixin<SinkLike<Tuple2<T, T>>>()),
      function PairwiseSinkMixin(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> & TProperties<T>,
        delegate: SinkLike<Tuple2<T, T>>,
      ): SinkLike<T> {
        init(
          DelegatingDisposableMixin<SinkLike<Tuple2<T, T>>>(),
          instance,
          delegate,
        );

        return instance;
      },
      props<TProperties<T>>({
        [PairwiseSinkMixin_prev]: none,
        [PairwiseSinkMixin_hasPrev]: false,
      }),
      {
        [SinkLike_notify](
          this: TProperties<T> &
            DelegatingDisposableLike<SinkLike<Tuple2<T, T>>> &
            SinkLike<T>,
          next: T,
        ) {
          const prev = this[PairwiseSinkMixin_prev];

          if (this[PairwiseSinkMixin_hasPrev]) {
            this[DelegatingDisposableLike_delegate][SinkLike_notify](
              tuple(prev, next),
            );
          }

          this[PairwiseSinkMixin_hasPrev] = true;
          this[PairwiseSinkMixin_prev] = next;
        },
      },
    ),
  ))();

export default PairwiseSinkMixin;
