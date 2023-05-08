import { Mixin3 } from "../../../__internal__/mixins.js";
import { Containers, DisposableLike, ObservableContainer, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike, StreamLike } from "../../../core.js";
import { Optional } from "../../../functions.js";
declare const Stream_mixin: <TReq, T>() => Mixin3<StreamLike<TReq, T> & DisposableLike, Containers.Operator<ObservableContainer, TReq, T>, SchedulerLike, Optional<{
    replay?: number;
    capacity?: number;
    backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
}>>;
export default Stream_mixin;
