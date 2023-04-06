import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { AsyncEnumerableLike, StreamLike, StreamableLike, StreamableLike_isEnumerable, StreamableLike_isInteractive, StreamableLike_isRunnable } from "../../../streaming.js";
interface StreamableCreateLifted {
    createLifted<T>(op: ContainerOperator<ObservableLike, void, T>, config: {
        [StreamableLike_isEnumerable]: boolean;
        [StreamableLike_isInteractive]: true;
        [StreamableLike_isRunnable]: boolean;
    }): AsyncEnumerableLike<T>;
    createLifted<TReq, T, TStream extends StreamLike<TReq, T> = StreamLike<TReq, T>>(op: ContainerOperator<ObservableLike, TReq, T>, config: {
        [StreamableLike_isEnumerable]: boolean;
        [StreamableLike_isInteractive]: boolean;
        [StreamableLike_isRunnable]: boolean;
    }): StreamableLike<TReq, T, TStream>;
}
declare const Streamable_createWithConfig: StreamableCreateLifted["createLifted"];
export default Streamable_createWithConfig;
