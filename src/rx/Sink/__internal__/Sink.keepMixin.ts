import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mixin2,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Predicate, none, returns } from "../../../functions.js";
import { ObserverLike_notify, SinkLike } from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";

const Sink_keepMixin: <T>() => Mixin2<
  SinkLike<T>,
  SinkLike<T>,
  Predicate<T>,
  Pick<SinkLike<T>, typeof ObserverLike_notify>
> = /*@__PURE__*/ (<T>() => {
  const KeepSinkMixin_predicate = Symbol("KeepSinkMixin_predicate");

  type TProperties = {
    readonly [KeepSinkMixin_predicate]: Predicate<T>;
  };

  return returns(
    mix(
      include(Disposable_delegatingMixin()),
      function KeepSinkMixin(
        instance: Pick<SinkLike<T>, typeof ObserverLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<T>,
        predicate: Predicate<T>,
      ): SinkLike<T> {
        init(Disposable_delegatingMixin(), instance, delegate);

        instance[KeepSinkMixin_predicate] = predicate;

        return instance;
      },
      props<TProperties>({
        [KeepSinkMixin_predicate]: none,
      }),
      {
        [ObserverLike_notify](
          this: TProperties & DelegatingLike<SinkLike<T>>,
          next: T,
        ) {
          if (this[KeepSinkMixin_predicate](next)) {
            this[DelegatingLike_delegate][ObserverLike_notify](next);
          }
        },
      },
    ),
  );
})();

export default Sink_keepMixin;
