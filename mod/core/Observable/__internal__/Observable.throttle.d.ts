import { ObservableContainer, ObservableLike } from "../../../core.js";
import { Function1 } from "../../../functions.js";
declare const Observable_throttle: (duration: number | Function1<unknown, ObservableLike<unknown>>, options?: {
    readonly mode?: "interval" | "first" | "last" | undefined;
}) => import("../../../core.js").Containers.Operator<ObservableContainer, unknown, unknown>;
export default Observable_throttle;
