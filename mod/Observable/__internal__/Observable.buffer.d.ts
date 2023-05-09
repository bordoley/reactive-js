import { Function1 } from "../../functions.js";
import { Containers, ObservableContainer } from "../../types.js";
type ObservableBuffer = <C extends ObservableContainer, T>(options?: {
    readonly duration?: number | Function1<T, C>;
    readonly count?: number;
}) => Containers.Operator<C, T, readonly T[]>;
declare const Observable_buffer: ObservableBuffer;
export default Observable_buffer;
