import { Mixin1 } from "../../../__internal__/mixins.js";
import { ObservableLike_isEnumerable, ObservableLike_isRunnable } from "../../../rx.js";
import { DispatcherLike_scheduler } from "../../../scheduling.js";
import { StreamLike } from "../../../streaming.js";
import { QueueLike_count, QueueLike_push } from "../../../util.js";
declare const Stream_delegatingMixin: <TReq, T>() => Mixin1<Pick<StreamLike<TReq, T>, typeof QueueLike_count | typeof QueueLike_push | typeof DispatcherLike_scheduler | typeof ObservableLike_isEnumerable | typeof ObservableLike_isRunnable>, StreamLike<TReq, T>>;
export default Stream_delegatingMixin;
