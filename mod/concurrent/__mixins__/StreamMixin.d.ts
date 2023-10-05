import { Mixin3 } from "../../__internal__/mixins.js";
import { DeferredObservableLike, SchedulerLike, StreamLike } from "../../concurrent.js";
import { Function1, Optional } from "../../functions.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy } from "../../utils.js";
declare const StreamMixin: <TReq, T>() => Mixin3<StreamLike<TReq, T> & DisposableLike, Function1<DeferredObservableLike<TReq>, DeferredObservableLike<T>>, SchedulerLike, Optional<{
    replay?: number;
    capacity?: number;
    backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
}>>;
export default StreamMixin;
