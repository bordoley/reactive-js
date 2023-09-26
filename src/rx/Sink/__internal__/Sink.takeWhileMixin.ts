import {
  Mixin3,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Predicate, none, returns } from "../../../functions.js";
import { SinkLike, SinkLike_notify } from "../../../rx.js";
import {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
  DisposableLike_dispose,
} from "../../../utils.js";
import Disposable_delegatingMixin from "../../../utils/Disposable/__internal__/Disposable.delegatingMixin.js";

const TakeWhileSinkMixin_inclusive = Symbol("TakeWhileSinkMixin_inclusive");
const TakeWhileSinkMixin_predicate = Symbol("TakeWhileSinkMixin_predicate");

export interface TProperties<T> {
  [TakeWhileSinkMixin_inclusive]: boolean;
  [TakeWhileSinkMixin_predicate]: Predicate<T>;
}

const Sink_takeWhileMixin: <T>() => Mixin3<
  SinkLike<T>,
  SinkLike<T>,
  Predicate<T>,
  boolean,
  unknown,
  Pick<SinkLike<T>, typeof SinkLike_notify>
> = /*@__PURE__*/ (<T>() =>
  returns(
    mix(
      include(Disposable_delegatingMixin<SinkLike<T>>()),
      function TakeWhileSinkMixin(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> & TProperties<T>,
        delegate: SinkLike<T>,
        predicate: Predicate<T>,
        inclusive: boolean,
      ): SinkLike<T> {
        init(Disposable_delegatingMixin<SinkLike<T>>(), instance, delegate);
        instance[TakeWhileSinkMixin_predicate] = predicate;
        instance[TakeWhileSinkMixin_inclusive] = inclusive;

        return instance;
      },
      props<TProperties<T>>({
        [TakeWhileSinkMixin_predicate]: none,
        [TakeWhileSinkMixin_inclusive]: none,
      }),
      {
        [SinkLike_notify](
          this: TProperties<T> &
            DelegatingDisposableLike<SinkLike<T>> &
            SinkLike<T>,
          next: T,
        ) {
          const satisfiesPredicate = this[TakeWhileSinkMixin_predicate](next);

          if (satisfiesPredicate || this[TakeWhileSinkMixin_inclusive]) {
            this[DelegatingDisposableLike_delegate][SinkLike_notify](next);
          }

          if (!satisfiesPredicate) {
            this[DisposableLike_dispose]();
          }
        },
      },
    ),
  ))();

export default Sink_takeWhileMixin;
