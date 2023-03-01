import { ContainerOperator } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
type ObservableBuffer = <C extends ObservableLike, T>(options?: {
    readonly duration?: number | Function1<T, C>;
    readonly maxBufferSize?: number;
}) => ContainerOperator<C, T, readonly T[]>;
declare const Observable_buffer: ObservableBuffer;
export default Observable_buffer;
