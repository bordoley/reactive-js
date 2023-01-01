import { Mixin3 } from "../../../__internal__/mixins.mjs";
import { ContainerOperator } from "../../../containers.mjs";
import { ObservableLike } from "../../../rx.mjs";
import { SchedulerLike } from "../../../scheduling.mjs";
import { StreamLike } from "../../../streaming.mjs";
declare const StreamLike__mixin: <TReq, T>() => Mixin3<StreamLike<TReq, T>, ContainerOperator<ObservableLike, TReq, T>, SchedulerLike, number>;
export { StreamLike__mixin as default };
