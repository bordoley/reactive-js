import {
  Mixin3,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { SinkLike, SinkLike_notify } from "../../events.js";
import { Optional, Predicate, none, returns } from "../../functions.js";
import { DisposableLike_dispose } from "../../utils.js";
import DelegatingDisposableMixin, {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
} from "../../utils/__mixins__/DelegatingDisposableMixin.js";

const TakeWhileSinkMixin_inclusive = Symbol("TakeWhileSinkMixin_inclusive");
const TakeWhileSinkMixin_predicate = Symbol("TakeWhileSinkMixin_predicate");

interface TProperties<T> {
  [TakeWhileSinkMixin_inclusive]: boolean;
  [TakeWhileSinkMixin_predicate]: Predicate<T>;
}

const TakeWhileSinkMixin: <T>() => Mixin3<
  SinkLike<T>,
  SinkLike<T>,
  Predicate<T>,
  Optional<boolean>,
  unknown,
  Pick<SinkLike<T>, typeof SinkLike_notify>
> = /*@__PURE__*/ (<T>() =>
  returns(
    mix(
      include(DelegatingDisposableMixin<SinkLike<T>>()),
      function TakeWhileSinkMixin(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> & TProperties<T>,
        delegate: SinkLike<T>,
        predicate: Predicate<T>,
        inclusive: Optional<boolean>,
      ): SinkLike<T> {
        init(DelegatingDisposableMixin<SinkLike<T>>(), instance, delegate);
        instance[TakeWhileSinkMixin_predicate] = predicate;
        instance[TakeWhileSinkMixin_inclusive] = inclusive ?? false;

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

export default TakeWhileSinkMixin;
