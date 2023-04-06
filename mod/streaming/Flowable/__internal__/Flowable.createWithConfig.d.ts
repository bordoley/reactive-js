import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { FlowableLike, StreamableLike_isRunnable } from "../../../streaming.js";
declare const Flowable_createWithConfig: <T>(op: ContainerOperator<ObservableLike<unknown>, boolean, T>, config: {
    [StreamableLike_isRunnable]: boolean;
}) => FlowableLike<T>;
export default Flowable_createWithConfig;
