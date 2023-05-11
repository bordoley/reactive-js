import type * as DeferredObservable from "../../DeferredObservable.js";
import { Mixin3 } from "../../__internal__/mixins.js";
import { Optional } from "../../functions.js";
import { ContainerOperator, DisposableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike, StreamLike } from "../../types.js";
declare const Stream_mixin: <TReq, T>() => Mixin3<StreamLike<TReq, T> & DisposableLike, ContainerOperator<DeferredObservable.Type, TReq, T>, SchedulerLike, Optional<{
    replay?: number;
    capacity?: number;
    backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
}>>;
export default Stream_mixin;
