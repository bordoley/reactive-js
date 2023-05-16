import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import {
  Mixin3,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { __TakeWhileSinkMixin_inclusive } from "../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  PredicatedLike,
  PredicatedLike_predicate,
} from "../../__internal__/types.js";
import { Predicate, none, returns } from "../../functions.js";
import {
  DisposableLike_dispose,
  SinkLike,
  SinkLike_notify,
} from "../../types.js";

const Sink_takeWhileMixin: <T>() => Mixin3<
  SinkLike<T>,
  SinkLike<T>,
  Predicate<T>,
  boolean,
  unknown,
  Pick<SinkLike<T>, typeof SinkLike_notify>
> = /*@__PURE__*/ (<T>() => {
  type TProperties = PredicatedLike<T> & {
    readonly [__TakeWhileSinkMixin_inclusive]: boolean;
  };

  return returns(
    mix(
      include(Disposable_delegatingMixin, Delegating_mixin()),
      function TakeWhileSinkMixin(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<T>,
        predicate: Predicate<T>,
        inclusive: boolean,
      ): SinkLike<T> {
        init(Disposable_delegatingMixin, instance, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[PredicatedLike_predicate] = predicate;
        instance[__TakeWhileSinkMixin_inclusive] = inclusive;

        return instance;
      },
      props<TProperties>({
        [PredicatedLike_predicate]: none,
        [__TakeWhileSinkMixin_inclusive]: none,
      }),
      {
        [SinkLike_notify](
          this: TProperties & DelegatingLike<SinkLike<T>> & SinkLike<T>,
          next: T,
        ) {
          const satisfiesPredicate = this[PredicatedLike_predicate](next);

          if (satisfiesPredicate || this[__TakeWhileSinkMixin_inclusive]) {
            this[DelegatingLike_delegate][SinkLike_notify](next);
          }

          if (!satisfiesPredicate) {
            this[DisposableLike_dispose]();
          }
        },
      },
    ),
  );
})();

export default Sink_takeWhileMixin;
