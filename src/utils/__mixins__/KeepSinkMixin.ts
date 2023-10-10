import {
  Mixin2,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { Predicate, none, returns } from "../../functions.js";
import {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
  SinkLike,
  SinkLike_notify,
} from "../../utils.js";
import DelegatingDisposableMixin from "./DelegatingDisposableMixin.js";

const KeepSinkMixin_predicate = Symbol("KeepSinkMixin_predicate");

interface TProperties<T> {
  [KeepSinkMixin_predicate]: Predicate<T>;
}

const KeepSinkMixin: <T>() => Mixin2<
  SinkLike<T>,
  SinkLike<T>,
  Predicate<T>,
  unknown,
  Pick<SinkLike<T>, typeof SinkLike_notify>
> = /*@__PURE__*/ (<T>() =>
  returns(
    mix(
      include(DelegatingDisposableMixin<SinkLike<T>>()),
      function KeepSinkMixin(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> & TProperties<T>,
        delegate: SinkLike<T>,
        predicate: Predicate<T>,
      ): SinkLike<T> {
        init(DelegatingDisposableMixin<SinkLike<T>>(), instance, delegate);
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

export default KeepSinkMixin;
