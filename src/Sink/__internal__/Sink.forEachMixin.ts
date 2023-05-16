import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import {
  Mixin2,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  ForEachLike,
  ForEachLike_effect,
} from "../../__internal__/types.js";
import { SideEffect1, none, returns } from "../../functions.js";
import { SinkLike, SinkLike_notify } from "../../types.js";

const Sink_forEachMixin: <T>() => Mixin2<
  SinkLike<T>,
  SinkLike<T>,
  SideEffect1<T>,
  unknown,
  Pick<SinkLike<T>, typeof SinkLike_notify>
> = /*@__PURE__*/ (<T>() =>
  returns(
    mix(
      include(Disposable_delegatingMixin, Delegating_mixin()),
      function ForEachSinkMixin(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> & ForEachLike<T>,
        delegate: SinkLike<T>,
        effect: SideEffect1<T>,
      ): SinkLike<T> {
        init(Delegating_mixin(), instance, delegate);
        init(Disposable_delegatingMixin, instance, delegate);
        instance[ForEachLike_effect] = effect;

        return instance;
      },
      props<ForEachLike<T>>({
        [ForEachLike_effect]: none,
      }),
      {
        [SinkLike_notify](
          this: ForEachLike<T> & DelegatingLike<SinkLike<T>> & SinkLike<T>,
          next: T,
        ) {
          this[ForEachLike_effect](next);
          this[DelegatingLike_delegate][SinkLike_notify](next);
        },
      },
    ),
  ))();

export default Sink_forEachMixin;
