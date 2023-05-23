import { Mixin3 } from "../../__internal__/mixins.js";
import { Function1, Optional } from "../../functions.js";
import { DeferredObservableLike, DisposableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike, StreamLike } from "../../types.js";
declare const Stream_mixin: <TReq, T>() => Mixin3<StreamLike<TReq, T> & DisposableLike, Function1<DeferredObservableLike<TReq>, DeferredObservableLike<T>>, SchedulerLike, Optional<{
    replay?: number;
    capacity?: number;
    backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
}>>;
export default Stream_mixin;
