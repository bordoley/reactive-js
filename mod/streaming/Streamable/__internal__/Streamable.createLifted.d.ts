import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { AsyncEnumerableLike, FlowableLike, FlowableState, StreamLike, StreamableLike } from "../../../streaming.js";
interface StreamableCreateLifted {
    <T>(op: ContainerOperator<ObservableLike, void, T>, isInteractive: true, isEnumerable: boolean, isRunnable: boolean): AsyncEnumerableLike<T>;
    <T>(op: ContainerOperator<ObservableLike, FlowableState, T>, isInteractive: false, isEnumerable: boolean, isRunnable: boolean): FlowableLike<T>;
    <TReq, T, TStream extends StreamLike<TReq, T> = StreamLike<TReq, T>>(op: ContainerOperator<ObservableLike, TReq, T>, isInteractive: boolean, isEnumerable: boolean, isRunnable: boolean): StreamableLike<TReq, T, TStream>;
}
declare const Streamable_createLifted: StreamableCreateLifted;
export default Streamable_createLifted;
