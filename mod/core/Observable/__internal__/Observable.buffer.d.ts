import { Container, ObservableContainer } from "../../../core.js";
import { Function1 } from "../../../functions.js";
type ObservableBuffer = <C extends ObservableContainer, T>(options?: {
    readonly duration?: number | Function1<T, C>;
    readonly count?: number;
}) => Container.Operator<C, T, readonly T[]>;
declare const Observable_buffer: ObservableBuffer;
export default Observable_buffer;
