import {
  Mixin1,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  SchedulerLike,
  StreamLike,
  StreamLike_scheduler,
} from "../../concurrent.js";
import { none, returns } from "../../functions.js";
import { DisposableLike } from "../../utils.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingDispatcherMixin from "./DelegatingDispatcherMixin.js";
import DelegatingReplayObservableMixin from "./DelegatingReplayObservableMixin.js";

const DelegatingStreamMixin: <TReq, T>() => Mixin1<
  StreamLike<TReq, T> & DisposableLike,
  StreamLike<TReq, T> & DisposableLike
> = /*@__PURE__*/ (<TReq, T>() => {
  type TProperties = {
    [StreamLike_scheduler]: SchedulerLike;
  };
  return returns(
    mix(
      include(
        DelegatingDispatcherMixin(),
        DelegatingReplayObservableMixin<StreamLike<TReq, T>>(),
        DelegatingDisposableMixin(),
      ),
      function DelegatingStreamMixin(
        instance: Pick<StreamLike<TReq, T>, typeof StreamLike_scheduler> &
          TProperties,
        delegate: StreamLike<TReq, T> & DisposableLike,
      ): StreamLike<TReq, T> & DisposableLike {
        init(DelegatingDisposableMixin(), instance, delegate);
        init(DelegatingReplayObservableMixin<T>(), instance, delegate);
        init(DelegatingDispatcherMixin(), instance, delegate);

        instance[StreamLike_scheduler] = delegate[StreamLike_scheduler];

        return instance;
      },
      props<TProperties>({
        [StreamLike_scheduler]: none,
      }),
      {},
    ),
  );
})();

export default DelegatingStreamMixin;
