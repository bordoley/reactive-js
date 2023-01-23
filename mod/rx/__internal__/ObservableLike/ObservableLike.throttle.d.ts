import { ContainerOperator } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
declare const ObservableLike__throttle: (duration: number | Function1<unknown, ObservableLike<unknown>>, options?: {
    readonly mode?: ("interval" | "first" | "last") | undefined;
}) => ContainerOperator<ObservableLike<unknown>, unknown, unknown>;
export { ObservableLike__throttle as default };
