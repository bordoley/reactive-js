import { ContainerOperator } from "../../../containers.js";
import { Updater } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { FlowableSinkLike, FlowableState } from "../../../streaming.js";
declare const FlowableSink_create: <T>(op: ContainerOperator<ObservableLike<unknown>, T, FlowableState | Updater<FlowableState>>) => FlowableSinkLike<T>;
export default FlowableSink_create;
