import { ObservableContainer } from "../../../core.js";
declare const Observable_throttle: (duration: number | import("../../../functions.js").Function1<unknown, import("../../../core.js").ObservableLike<unknown>>, options?: {
    readonly mode?: "interval" | "first" | "last" | undefined;
}) => import("../../../core.js").Container.Operator<ObservableContainer, unknown, unknown>;
export default Observable_throttle;
