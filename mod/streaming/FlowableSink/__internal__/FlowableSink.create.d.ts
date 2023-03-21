import { ContainerOperator } from "../../../containers.js";
import { Updater } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { FlowableSinkLike } from "../../../streaming.js";
declare const FlowableSink_create: <T>(op: ContainerOperator<ObservableLike<unknown>, T, boolean | Updater<boolean>>) => FlowableSinkLike<T>;
export default FlowableSink_create;
