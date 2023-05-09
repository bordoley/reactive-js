import { Function1 } from "../../functions.js";
import { ObservableContainer, ObservableLike } from "../../types.js";
declare const Observable_throttle: (duration: number | Function1<unknown, ObservableLike<unknown>>, options?: {
    readonly mode?: "interval" | "first" | "last" | undefined;
}) => import("../../types.js").Containers.Operator<ObservableContainer, unknown, unknown>;
export default Observable_throttle;
