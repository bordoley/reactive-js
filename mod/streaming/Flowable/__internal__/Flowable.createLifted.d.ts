import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { PauseableState } from "../../../scheduling.js";
import { FlowableLike } from "../../../streaming.js";
declare const Flowable_createLifted: <T>(op: ContainerOperator<ObservableLike<unknown>, PauseableState, T>, isRunnable: boolean) => FlowableLike<T>;
export default Flowable_createLifted;
