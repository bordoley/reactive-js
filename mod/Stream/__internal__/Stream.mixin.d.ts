import { Mixin3 } from "../../__internal__/mixins.js";
import { Containers, DeferredObservableContainer } from "../../containers.js";
import { Optional } from "../../functions.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike, StreamLike } from "../../types.js";
declare const Stream_mixin: <TReq, T>() => Mixin3<StreamLike<TReq, T> & DisposableLike, Containers.Operator<DeferredObservableContainer.Type, TReq, T>, SchedulerLike, Optional<{
    replay?: number;
    capacity?: number;
    backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
}>>;
export default Stream_mixin;
