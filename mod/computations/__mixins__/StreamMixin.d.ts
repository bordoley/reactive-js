import { Mixin3 } from "../../__internal__/mixins.js";
import { DeferredObservableLike, PureDeferredObservableLike, StreamLike } from "../../computations.js";
import { Function1, Optional } from "../../functions.js";
import { BackpressureStrategy, DisposableLike, SchedulerLike } from "../../utils.js";
declare const StreamMixin: <TReq, T>() => Mixin3<StreamLike<TReq, T> & DisposableLike, Function1<PureDeferredObservableLike<TReq>, DeferredObservableLike<T>>, SchedulerLike, Optional<{
    replay?: number;
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}>>;
export default StreamMixin;
