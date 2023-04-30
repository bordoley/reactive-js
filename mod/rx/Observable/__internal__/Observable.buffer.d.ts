import { ContainerOperator } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { ObservableContainer } from "../../../rx.js";
type ObservableBuffer = <C extends ObservableContainer, T>(options?: {
    readonly duration?: number | Function1<T, C>;
    readonly count?: number;
}) => ContainerOperator<C, T, readonly T[]>;
declare const Observable_buffer: ObservableBuffer;
export default Observable_buffer;
