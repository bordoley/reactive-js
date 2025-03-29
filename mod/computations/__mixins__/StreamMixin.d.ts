import { Mixin3 } from "../../__internal__/mixins.js";
import { ObservableLike, PureObservableLike, StreamLike } from "../../computations.js";
import { Function1, Optional } from "../../functions.js";
import { BackpressureStrategy, DisposableLike, SchedulerLike } from "../../utils.js";
declare const StreamMixin: <TReq, T>() => Mixin3<StreamLike<TReq, T> & DisposableLike, Function1<PureObservableLike<TReq>, ObservableLike<T>>, SchedulerLike, Optional<{
    autoDispose?: boolean;
    replay?: number;
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}>>;
export default StreamMixin;
