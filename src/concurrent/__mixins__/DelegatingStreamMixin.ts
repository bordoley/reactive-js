import { Mixin1, include, init, mix } from "../../__internal__/mixins.js";
import { StreamLike } from "../../concurrent.js";
import { returns } from "../../functions.js";
import DelegatingDispatcherMixin from "./DelegatingDispatcherMixin.js";
import DelegatingMulticastObservableMixin from "./DelegatingMulticastObservableMixin.js";

const DelegatingStreamMixin: <TReq, T>() => Mixin1<
  StreamLike<TReq, T>,
  StreamLike<TReq, T>
> = /*@__PURE__*/ (<TReq, T>() =>
  returns(
    mix(
      include(
        DelegatingDispatcherMixin(),
        DelegatingMulticastObservableMixin<StreamLike<TReq, T>>(),
      ),
      function DelegatingStreamMixin(
        instance: unknown,
        delegate: StreamLike<TReq, T>,
      ): StreamLike<TReq, T> {
        init(DelegatingMulticastObservableMixin<T>(), instance, delegate);
        init(DelegatingDispatcherMixin(), instance, delegate);

        return instance;
      },
    ),
  ))();

export default DelegatingStreamMixin;
