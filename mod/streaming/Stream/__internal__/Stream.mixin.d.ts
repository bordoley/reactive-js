import { Mixin5 } from "../../../__internal__/mixins.js";
import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { StreamLike } from "../../../streaming.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
declare const Stream_mixin: <TReq, T>() => Mixin5<StreamLike<TReq, T>, ContainerOperator<ObservableLike, TReq, T>, SchedulerLike, number, number, QueueableLike[typeof QueueableLike_backpressureStrategy]>;
export default Stream_mixin;
