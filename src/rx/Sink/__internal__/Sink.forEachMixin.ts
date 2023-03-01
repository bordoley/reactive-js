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
import { SideEffect1, none, returns } from "../../../functions.js";
import { ObserverLike_notify, SinkLike } from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";

export const Sink_forEachMixin: <T>() => Mixin2<
  SinkLike<T>,
  SinkLike<T>,
  SideEffect1<T>,
  Pick<SinkLike<T>, typeof ObserverLike_notify>
> = /*@__PURE__*/ (<T>() => {
  const ForEachSinkMixin_effect = Symbol("ForEachSinkMixin_effect");

  type TProperties = {
    readonly [ForEachSinkMixin_effect]: SideEffect1<T>;
  };

  return returns(
    mix(
      include(Disposable_delegatingMixin()),
      function ForEachSinkMixin(
        instance: Pick<SinkLike<T>, typeof ObserverLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<T>,
        effect: SideEffect1<T>,
      ): SinkLike<T> {
        init(Disposable_delegatingMixin(), instance, delegate);
        instance[ForEachSinkMixin_effect] = effect;

        return instance;
      },
      props<TProperties>({
        [ForEachSinkMixin_effect]: none,
      }),
      {
        [ObserverLike_notify](
          this: TProperties & DelegatingLike<SinkLike<T>>,
          next: T,
        ) {
          this[ForEachSinkMixin_effect](next);
          this[DelegatingLike_delegate][ObserverLike_notify](next);
        },
      },
    ),
  );
})();

export default Sink_forEachMixin;
