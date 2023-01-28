import {
  Mixin3,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Predicate, none, pipe, returns } from "../../../functions";
import { SinkLike, SinkLike_notify } from "../../../rx";
import { DisposableLike } from "../../../util";
import Disposable_delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import { DelegatingSinkLike_delegate } from "../rx.internal";

const Sink_takeWhileMixin: <T>() => Mixin3<
  SinkLike<T>,
  SinkLike<T>,
  Predicate<T>,
  boolean
> = /*@__PURE__*/ (<T>() => {
  const TakeWhileSink_private_predicate = Symbol(
    "TakeWhileSink_private_predicate",
  );
  const TakeWhileSink_private_inclusive = Symbol(
    "TakeWhileSink_private_inclusive",
  );

  type TProperties = {
    readonly [DelegatingSinkLike_delegate]: SinkLike<T>;
    readonly [TakeWhileSink_private_predicate]: Predicate<T>;
    readonly [TakeWhileSink_private_inclusive]: boolean;
  };

  return returns(
    mix(
      include(Disposable_delegatingMixin),
      function TakeWhileSink(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<T>,
        predicate: Predicate<T>,
        inclusive: boolean,
      ): SinkLike<T> {
        init(Disposable_delegatingMixin, instance, delegate);

        instance[DelegatingSinkLike_delegate] = delegate;
        instance[TakeWhileSink_private_predicate] = predicate;
        instance[TakeWhileSink_private_inclusive] = inclusive;

        return instance;
      },
      props<TProperties>({
        [DelegatingSinkLike_delegate]: none,
        [TakeWhileSink_private_predicate]: none,
        [TakeWhileSink_private_inclusive]: none,
      }),
      {
        [SinkLike_notify](this: TProperties & DisposableLike, next: T) {
          const satisfiesPredicate =
            this[TakeWhileSink_private_predicate](next);

          if (satisfiesPredicate || this[TakeWhileSink_private_inclusive]) {
            this[DelegatingSinkLike_delegate][SinkLike_notify](next);
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
