import {
  DelegatingLike_delegate,
  Mixin3,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Predicate, none, pipe, returns } from "../../../functions.js";
import { SinkLike, SinkLike_notify } from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import { DelegatingDisposableLike } from "../../../util/__internal__/util.internal.js";

const Sink_takeWhileMixin: <T>() => Mixin3<
  SinkLike<T>,
  SinkLike<T>,
  Predicate<T>,
  boolean,
  Pick<SinkLike<T>, typeof SinkLike_notify>
> = /*@__PURE__*/ (<T>() => {
  const TakeWhileSinkMixin_predicate = Symbol("TakeWhileSinkMixin_predicate");
  const TakeWhileSinkMixin_inclusive = Symbol("TakeWhileSinkMixin_inclusive");

  type TProperties = {
    readonly [TakeWhileSinkMixin_predicate]: Predicate<T>;
    readonly [TakeWhileSinkMixin_inclusive]: boolean;
  };

  return returns(
    mix(
      include(Disposable_delegatingMixin<SinkLike<T>>()),
      function TakeWhileSinkMixin(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<T>,
        predicate: Predicate<T>,
        inclusive: boolean,
      ): SinkLike<T> {
        init(Disposable_delegatingMixin<SinkLike<T>>(), instance, delegate);

        instance[TakeWhileSinkMixin_predicate] = predicate;
        instance[TakeWhileSinkMixin_inclusive] = inclusive;

        return instance;
      },
      props<TProperties>({
        [TakeWhileSinkMixin_predicate]: none,
        [TakeWhileSinkMixin_inclusive]: none,
      }),
      {
        [SinkLike_notify](
          this: TProperties & DelegatingDisposableLike<SinkLike<T>>,
          next: T,
        ) {
          const satisfiesPredicate = this[TakeWhileSinkMixin_predicate](next);

          if (satisfiesPredicate || this[TakeWhileSinkMixin_inclusive]) {
            this[DelegatingLike_delegate][SinkLike_notify](next);
          }

          if (!satisfiesPredicate) {
            pipe(this, Disposable_dispose());
          }
        },
      },
    ),
  );
})();

export default Sink_takeWhileMixin;
