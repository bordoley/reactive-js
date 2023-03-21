import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { AsyncEnumerableLike, StreamLike, StreamableLike } from "../../../streaming.js";
interface StreamableCreateLifted {
    <T>(op: ContainerOperator<ObservableLike, void, T>, isInteractive: true, isEnumerable: boolean, isRunnable: boolean): AsyncEnumerableLike<T>;
    <TReq, T, TStream extends StreamLike<TReq, T> = StreamLike<TReq, T>>(op: ContainerOperator<ObservableLike, TReq, T>, isInteractive: boolean, isEnumerable: boolean, isRunnable: boolean): StreamableLike<TReq, T, TStream>;
}
declare const Streamable_createLifted: StreamableCreateLifted;
export default Streamable_createLifted;
