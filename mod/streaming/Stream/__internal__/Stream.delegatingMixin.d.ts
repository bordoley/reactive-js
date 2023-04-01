import { Mixin1 } from "../../../__internal__/mixins.js";
import { DispatcherLike_complete, DispatcherLike_scheduler } from "../../../rx.js";
import { StreamLike } from "../../../streaming.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue } from "../../../util.js";
declare const Stream_delegatingMixin: <TReq, T>() => Mixin1<StreamLike<TReq, T>, StreamLike<TReq, T>, Pick<StreamLike<TReq, T>, typeof DispatcherLike_scheduler | typeof QueueableLike_backpressureStrategy | typeof QueueableLike_enqueue | typeof QueueableLike_capacity | typeof DispatcherLike_complete>>;
export default Stream_delegatingMixin;
