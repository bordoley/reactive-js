import { Mixin3 } from "../../../__internal__/mixins.js";
import { ContainerOperator } from "../../../containers.js";
import { Optional } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { StreamLike } from "../../../streaming.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../../../util.js";
declare const Stream_mixin: <TReq, T>() => Mixin3<StreamLike<TReq, T> & DisposableLike, ContainerOperator<ObservableLike, TReq, T>, SchedulerLike, Optional<{
    replay?: number;
    capacity?: number;
    backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
}>>;
export default Stream_mixin;
