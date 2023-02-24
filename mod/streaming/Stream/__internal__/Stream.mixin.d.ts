import { Mixin3 } from "../../../__internal__/mixins.js";
import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { DispatcherLike, SchedulerLike } from "../../../scheduling.js";
import { StreamLike } from "../../../streaming.js";
export interface DispatchedObservableLike<T> extends ObservableLike<T>, DispatcherLike<T> {
}
declare const Stream_mixin: <TReq, T>() => Mixin3<StreamLike<TReq, T>, ContainerOperator<ObservableLike, TReq, T>, SchedulerLike, number>;
export default Stream_mixin;
