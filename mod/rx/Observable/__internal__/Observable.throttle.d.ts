import { ContainerOperator } from "../../../containers.js";
import { ObservableLike, ThrottleMode } from "../../../rx.js";
import { Function1 } from "../../../functions.js";
declare const Observable_throttle: (duration: number | Function1<unknown, ObservableLike<unknown>>, options?: {
    readonly mode?: ThrottleMode | undefined;
}) => ContainerOperator<ObservableLike<unknown>, unknown, unknown>;
export { Observable_throttle as default };
