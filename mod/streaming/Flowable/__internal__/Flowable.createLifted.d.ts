import { ContainerOperator } from "../../../containers.js";
import { Updater } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { PauseableState } from "../../../scheduling.js";
declare const Flowable_createLifted: <T>(op: ContainerOperator<ObservableLike<unknown>, PauseableState, T>) => import("../../../streaming.js").StreamableLike<Updater<PauseableState>, T, import("../../../streaming.js").StreamLike<Updater<PauseableState>, T>>;
export default Flowable_createLifted;
