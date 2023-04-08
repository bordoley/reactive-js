import {
  Mixin1,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { __DelegatingDispatcherMixin_delegate } from "../../../__internal__/symbols.js";
import { none, returns } from "../../../functions.js";
import { DispatcherLike, DispatcherLike_complete } from "../../../rx.js";
import Queueable_delegatingMixin from "../../../util/Queue/__internal__/Queueable.delegatingMixin.js";

const Dispatcher_delegatingMixin: <TReq>() => Mixin1<
  DispatcherLike<TReq>,
  DispatcherLike<TReq>
> = /*@__PURE__*/ (<TReq>() => {
  type TProperties = {
    [__DelegatingDispatcherMixin_delegate]: DispatcherLike<TReq>;
  };

  return returns(
    mix(
      include(Queueable_delegatingMixin()),
      function DelegatingDispatcherMixin(
        instance: Pick<DispatcherLike, typeof DispatcherLike_complete> &
          TProperties,
        delegate: DispatcherLike<TReq>,
      ): DispatcherLike<TReq> {
        init(Queueable_delegatingMixin(), instance, delegate);
        instance[__DelegatingDispatcherMixin_delegate] = delegate;

        return instance;
      },
      props<TProperties>({
        [__DelegatingDispatcherMixin_delegate]: none,
      }),
      {
        [DispatcherLike_complete](this: TProperties) {
          this[__DelegatingDispatcherMixin_delegate][DispatcherLike_complete]();
        },
      },
    ),
  );
})();

export default Dispatcher_delegatingMixin;
