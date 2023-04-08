import {
  Mixin1,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { returns } from "../../../functions.js";
import { DispatcherLike, DispatcherLike_complete } from "../../../rx.js";
import { DisposableLike } from "../../../util.js";
import Queueable_delegatingMixin, {
  QueueableDelegatingMixin_delegate,
  TDelegatingQueueableMixinReturn,
} from "../../../util/Queue/__internal__/Queueable.delegatingMixin.js";

type TDispatcherDelegatingMixin<TReq> = Omit<
  DispatcherLike<TReq>,
  keyof DisposableLike
>;

const Dispatcher_delegatingMixin: <TReq>() => Mixin1<
  TDispatcherDelegatingMixin<TReq>,
  Omit<DispatcherLike<TReq>, keyof DisposableLike>
> = /*@__PURE__*/ (<TReq>() =>
  returns(
    mix(
      include(Queueable_delegatingMixin()),
      function DispatcherMixin(
        instance: Pick<DispatcherLike, typeof DispatcherLike_complete>,
        delegate: DispatcherLike<TReq>,
      ): TDispatcherDelegatingMixin<TReq> {
        init(Queueable_delegatingMixin(), instance, delegate);

        return instance;
      },
      props({}),
      {
        [DispatcherLike_complete](
          this: TDelegatingQueueableMixinReturn<TReq, DispatcherLike<TReq>>,
        ) {
          this[QueueableDelegatingMixin_delegate][DispatcherLike_complete]();
        },
      },
    ),
  ))();

export default Dispatcher_delegatingMixin;
