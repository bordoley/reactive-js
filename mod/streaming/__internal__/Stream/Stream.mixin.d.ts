import { Mixin3 } from "../../../__internal__/mixins.js";
import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { StreamLike } from "../../../streaming.js";
declare const Stream$mixin: <TReq, T>() => Mixin3<StreamLike<TReq, T>, ContainerOperator<ObservableLike, TReq, T>, SchedulerLike, number>;
export { Stream$mixin as default };
