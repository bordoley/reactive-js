import { Mixin3 } from "../../../__internal__/mixins.js";
import { ContainerOperator } from "../../../containers.js";
import { DispatcherLike, ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { StreamLike } from "../../../streaming.js";
import { DisposableLike } from "../../../util.js";
export interface DispatchedObservableLike<T> extends ObservableLike<T>, DispatcherLike<T>, DisposableLike {
}
declare const Stream_mixin: <TReq, T>() => Mixin3<StreamLike<TReq, T>, ContainerOperator<ObservableLike, TReq, T>, SchedulerLike, number>;
export default Stream_mixin;
