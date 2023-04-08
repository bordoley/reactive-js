import {
  Mixin1,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { DelegatingMulticastObservableMixin_delegate } from "../../../__internal__/symbols.js";
import { returns, unsafeCast } from "../../../functions.js";
import Dispatcher_delegatingMixin from "../../../rx/Dispatcher/__internal__/Dispatcher.delegatingMixin.js";
import MulticastObservable_delegatingMixin, {
  TDelegatingMulticastObservableReturn,
} from "../../../rx/MulticastObservable/__internal__/MulticastObservable.delegatingMixin.js";
import { StreamLike, StreamLike_scheduler } from "../../../streaming.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";

const Stream_delegatingMixin: <TReq, T>() => Mixin1<
  StreamLike<TReq, T>,
  StreamLike<TReq, T>
> = /*@__PURE__*/ (<TReq, T>() => {
  return returns(
    mix(
      include(
        Dispatcher_delegatingMixin(),
        MulticastObservable_delegatingMixin<StreamLike<TReq, T>>(),
        Disposable_delegatingMixin(),
      ),
      function DelegatingStreamMixin(
        instance: Pick<StreamLike<TReq, T>, typeof StreamLike_scheduler>,
        delegate: StreamLike<TReq, T>,
      ): StreamLike<TReq, T> {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(MulticastObservable_delegatingMixin<T>(), instance, delegate);
        init(Dispatcher_delegatingMixin(), instance, delegate);

        return instance;
      },
      props<unknown>({}),
      {
        get [StreamLike_scheduler]() {
          unsafeCast<
            TDelegatingMulticastObservableReturn<T, StreamLike<TReq, T>>
          >(this);
          return this[DelegatingMulticastObservableMixin_delegate][
            StreamLike_scheduler
          ];
        },
      },
    ),
  );
})();

export default Stream_delegatingMixin;
