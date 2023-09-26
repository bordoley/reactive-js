import {
  Mixin2,
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
} from "../../../utils.js";
import Disposable_delegatingMixin from "../../../utils/Disposable/__internal__/Disposable.delegatingMixin.js";

const KeepSinkMixin_predicate = Symbol("KeepSinkMixin_predicate");

export interface TProperties<T> {
  [KeepSinkMixin_predicate]: Predicate<T>;
}

const Sink_keepMixin: <T>() => Mixin2<
  SinkLike<T>,
  SinkLike<T>,
  Predicate<T>,
  unknown,
  Pick<SinkLike<T>, typeof SinkLike_notify>
> = /*@__PURE__*/ (<T>() =>
  returns(
    mix(
      include(Disposable_delegatingMixin<SinkLike<T>>()),
      function KeepSinkMixin(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> & TProperties<T>,
        delegate: SinkLike<T>,
        predicate: Predicate<T>,
      ): SinkLike<T> {
        init(Disposable_delegatingMixin<SinkLike<T>>(), instance, delegate);
        instance[KeepSinkMixin_predicate] = predicate;

        return instance;
      },
      props<TProperties<T>>({
        [KeepSinkMixin_predicate]: none,
      }),
      {
        [SinkLike_notify](
          this: TProperties<T> &
            DelegatingDisposableLike<SinkLike<T>> &
            SinkLike<T>,
          next: T,
        ) {
          if (this[KeepSinkMixin_predicate](next)) {
            this[DelegatingDisposableLike_delegate][SinkLike_notify](next);
          }
        },
      },
    ),
  ))();

export default Sink_keepMixin;
