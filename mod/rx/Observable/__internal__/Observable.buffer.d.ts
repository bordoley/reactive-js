import { ContainerOperator } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { ObservableContainerLike } from "../../../rx.js";
type ObservableBuffer = <C extends ObservableContainerLike, T>(options?: {
    readonly duration?: number | Function1<T, C>;
    readonly count?: number;
}) => ContainerOperator<C, T, readonly T[]>;
declare const Observable_buffer: ObservableBuffer;
export default Observable_buffer;
