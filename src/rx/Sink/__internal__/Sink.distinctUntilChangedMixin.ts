import {
  Mixin2,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Equality, none, returns } from "../../../functions.js";
import { SinkLike, SinkLike_notify } from "../../../rx.js";
import {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
} from "../../../utils.js";
import Disposable_delegatingMixin from "../../../utils/Disposable/__internal__/Disposable.delegatingMixin.js";

const DistinctUntilChangedSinkMixin_equality = Symbol(
  "DistinctUntilChangedSinkMixin_equality",
);
const DistinctUntilChangedSinkMixin_prev = Symbol(
  "DistinctUntilChangedSinkMixin_prev",
);
const DistinctUntilChangedSinkMixin_hasValue = Symbol(
  "DistinctUntilChangedSinkMixin_hasValue",
);

interface TProps<T> {
  [DistinctUntilChangedSinkMixin_equality]: Equality<T>;
  [DistinctUntilChangedSinkMixin_prev]: T;
  [DistinctUntilChangedSinkMixin_hasValue]: boolean;
}

const Sink_distinctUntilChangedMixin: <T>() => Mixin2<
  SinkLike<T>,
  SinkLike<T>,
  Equality<T>,
  unknown,
  Pick<SinkLike<T>, typeof SinkLike_notify>
> = /*@__PURE__*/ (<T>() =>
  returns(
    mix(
      include(Disposable_delegatingMixin<SinkLike<T>>()),
      function DistinctUntilChangedSinkMixin(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> & TProps<T>,
        delegate: SinkLike<T>,
        equality: Equality<T>,
      ): SinkLike<T> {
        init(Disposable_delegatingMixin<SinkLike<T>>(), instance, delegate);
        instance[DistinctUntilChangedSinkMixin_equality] = equality;

        return instance;
      },
      props<TProps<T>>({
        [DistinctUntilChangedSinkMixin_equality]: none,
        [DistinctUntilChangedSinkMixin_prev]: none,
        [DistinctUntilChangedSinkMixin_hasValue]: false,
      }),
      {
        [SinkLike_notify](
          this: TProps<T> & SinkLike<T> & DelegatingDisposableLike<SinkLike<T>>,
          next: T,
        ) {
          const shouldEmit =
            !this[DistinctUntilChangedSinkMixin_hasValue] ||
            !this[DistinctUntilChangedSinkMixin_equality](
              this[DistinctUntilChangedSinkMixin_prev],
              next,
            );

          if (shouldEmit) {
            this[DistinctUntilChangedSinkMixin_prev] = next;
            this[DistinctUntilChangedSinkMixin_hasValue] = true;
            this[DelegatingDisposableLike_delegate][SinkLike_notify](next);
          }
        },
      },
    ),
  ))();

export default Sink_distinctUntilChangedMixin;
