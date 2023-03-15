import { Mixin4 } from "../../../__internal__/mixins.js";
import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { StreamLike } from "../../../streaming.js";
declare const Stream_mixin: <TReq, T>() => Mixin4<StreamLike<TReq, T>, ContainerOperator<ObservableLike, TReq, T>, SchedulerLike, number, number>;
export default Stream_mixin;
