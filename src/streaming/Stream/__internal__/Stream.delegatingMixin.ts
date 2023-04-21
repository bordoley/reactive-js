import {
  Mixin1,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { none, returns } from "../../../functions.js";
import Dispatcher_delegatingMixin from "../../../rx/Dispatcher/__internal__/Dispatcher.delegatingMixin.js";
import MulticastObservable_delegatingMixin from "../../../rx/MulticastObservable/__internal__/MulticastObservable.delegatingMixin.js";
import { SchedulerLike } from "../../../scheduling.js";
import { StreamLike, StreamLike_scheduler } from "../../../streaming.js";
import { DisposableLike } from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";

const Stream_delegatingMixin: <TReq, T>() => Mixin1<
  StreamLike<TReq, T> & DisposableLike,
  StreamLike<TReq, T> & DisposableLike
> = /*@__PURE__*/ (<TReq, T>() => {
  type TProperties = {
    [StreamLike_scheduler]: SchedulerLike;
  };
  return returns(
    mix(
      include(
        Dispatcher_delegatingMixin(),
        MulticastObservable_delegatingMixin<StreamLike<TReq, T>>(),
        Disposable_delegatingMixin,
      ),
      function DelegatingStreamMixin(
        instance: Pick<StreamLike<TReq, T>, typeof StreamLike_scheduler> &
          TProperties,
        delegate: StreamLike<TReq, T> & DisposableLike,
      ): StreamLike<TReq, T> & DisposableLike {
        init(Disposable_delegatingMixin, instance, delegate);
        init(MulticastObservable_delegatingMixin<T>(), instance, delegate);
        init(Dispatcher_delegatingMixin(), instance, delegate);

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

export default Stream_delegatingMixin;
