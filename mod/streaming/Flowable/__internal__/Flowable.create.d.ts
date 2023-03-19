import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { FlowableLike, FlowableState } from "../../../streaming.js";
declare const Flowable_create: <T>(op: ContainerOperator<ObservableLike, FlowableState, T>) => FlowableLike<T>;
export default Flowable_create;
