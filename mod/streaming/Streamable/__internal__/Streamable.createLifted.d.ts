import { ContainerOperator } from "../../../containers.js";
import { Updater } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { PauseableState } from "../../../scheduling.js";
import { AsyncEnumerableLike, FlowableLike, StreamLike, StreamableLike } from "../../../streaming.js";
interface StreamableCreateLifted {
    <T>(op: ContainerOperator<ObservableLike, void, T>, isInteractive: true, isEnumerable: boolean, isRunnable: boolean): AsyncEnumerableLike<T>;
    <T>(op: ContainerOperator<ObservableLike, Updater<PauseableState>, T>, isInteractive: false, isEnumerable: boolean, isRunnable: boolean): FlowableLike<T>;
    <TReq, T, TStream extends StreamLike<TReq, T> = StreamLike<TReq, T>>(op: ContainerOperator<ObservableLike, TReq, T>, isInteractive: boolean, isEnumerable: boolean, isRunnable: boolean): StreamableLike<TReq, T, TStream>;
}
declare const Streamable_createLifted: StreamableCreateLifted;
export default Streamable_createLifted;
