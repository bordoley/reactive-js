import { Mixin1, include, init, mix } from "../../__internal__/mixins.js";
import { StreamLike } from "../../concurrent.js";
import { returns } from "../../functions.js";
import { DisposableLike } from "../../utils.js";
import DelegatingDispatcherMixin from "./DelegatingDispatcherMixin.js";
import DelegatingReplayObservableMixin from "./DelegatingReplayObservableMixin.js";

const DelegatingStreamMixin: <TReq, T>() => Mixin1<
  StreamLike<TReq, T> & DisposableLike,
  StreamLike<TReq, T> & DisposableLike
> = /*@__PURE__*/ (<TReq, T>() =>
  returns(
    mix(
      include(
        DelegatingDispatcherMixin(),
        DelegatingReplayObservableMixin<StreamLike<TReq, T>>(),
      ),
      function DelegatingStreamMixin(
        instance: unknown,
        delegate: StreamLike<TReq, T> & DisposableLike,
      ): StreamLike<TReq, T> & DisposableLike {
        init(DelegatingReplayObservableMixin<T>(), instance, delegate);
        init(DelegatingDispatcherMixin(), instance, delegate);

        return instance;
      },
    ),
  ))();

export default DelegatingStreamMixin;
