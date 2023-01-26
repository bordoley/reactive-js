import { ContainerOperator } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
declare const Observable$buffer: <T>(options?: {
    readonly duration?: number | Function1<T, ObservableLike>;
    readonly maxBufferSize?: number;
}) => ContainerOperator<ObservableLike, T, readonly T[]>;
export { Observable$buffer as default };
