import { Mixin1 } from "../../../__internal__/mixins.js";
import { DispatcherLike_complete, DispatcherLike_scheduler, MulticastObservableLike_observerCount, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe } from "../../../rx.js";
import { StreamLike } from "../../../streaming.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue } from "../../../util.js";
declare const Stream_delegatingMixin: <TReq, T>() => Mixin1<StreamLike<TReq, T>, StreamLike<TReq, T>, Pick<StreamLike<TReq, T>, typeof DispatcherLike_scheduler | typeof MulticastObservableLike_observerCount | typeof QueueableLike_backpressureStrategy | typeof QueueableLike_enqueue | typeof QueueableLike_capacity | typeof DispatcherLike_complete | typeof ObservableLike_observe | typeof ObservableLike_isEnumerable | typeof ObservableLike_isRunnable>>;
export default Stream_delegatingMixin;
