import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { FlowableLike, FlowableState } from "../../../streaming.js";
declare const Flowable_createLifted: <T>(op: ContainerOperator<ObservableLike<unknown>, FlowableState, T>, isRunnable: boolean) => FlowableLike<T>;
export default Flowable_createLifted;
