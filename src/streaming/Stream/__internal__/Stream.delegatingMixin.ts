import {
  Mixin1,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { returns } from "../../../functions.js";
import Dispatcher_delegatingMixin from "../../../rx/Dispatcher/__internal__/Dispatcher.delegatingMixin.js";
import MulticastObservable_delegatingMixin from "../../../rx/MulticastObservable/__internal__/MulticastObservable.delegatingMixin.js";
import { StreamLike } from "../../../streaming.js";

const Stream_delegatingMixin: <TReq, T>() => Mixin1<
  StreamLike<TReq, T>,
  StreamLike<TReq, T>
> = /*@__PURE__*/ (<TReq, T>() => {
  return returns(
    mix(
      include(
        Dispatcher_delegatingMixin(),
        MulticastObservable_delegatingMixin<StreamLike<TReq, T>>(),
      ),
      function DelegatingStreamMixin(
        instance: unknown,
        delegate: StreamLike<TReq, T>,
      ): StreamLike<TReq, T> {
        init(MulticastObservable_delegatingMixin<T>(), instance, delegate);
        init(Dispatcher_delegatingMixin(), instance, delegate);

        return instance;
      },
      props<unknown>({}),
      {},
    ),
  );
})();

export default Stream_delegatingMixin;
