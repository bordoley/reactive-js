import { ObservableContainer } from "../../../rx.js";
declare const Observable_throttle: (duration: number | import("../../../functions.js").Function1<unknown, import("../../../rx.js").ObservableLike<unknown>>, options?: {
    readonly mode?: "interval" | "first" | "last" | undefined;
}) => import("../../../containers.js").ContainerOperator<ObservableContainer, unknown, unknown>;
export default Observable_throttle;
