import { Mixin1 } from "../../../__internal__/mixins.js";
import { DispatcherLike_complete, DispatcherLike_scheduler, MulticastObservableLike_observerCount, ObservableLike_isEnumerable, ObservableLike_isRunnable } from "../../../rx.js";
import { StreamLike } from "../../../streaming.js";
import { DisposableLike, QueueableLike_maxBufferSize, QueueableLike_push } from "../../../util.js";
declare const Stream_delegatingMixin: <TReq, T>() => Mixin1<Pick<StreamLike<TReq, T>, typeof QueueableLike_push | typeof QueueableLike_maxBufferSize | typeof DispatcherLike_complete | typeof DispatcherLike_scheduler | typeof MulticastObservableLike_observerCount | typeof ObservableLike_isEnumerable | typeof ObservableLike_isRunnable | keyof DisposableLike>, StreamLike<TReq, T>>;
export default Stream_delegatingMixin;
