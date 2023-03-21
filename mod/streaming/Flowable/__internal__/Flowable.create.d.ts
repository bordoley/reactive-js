import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { FlowableLike } from "../../../streaming.js";
declare const Flowable_create: <T>(op: ContainerOperator<ObservableLike, boolean, T>) => FlowableLike<T>;
export default Flowable_create;
