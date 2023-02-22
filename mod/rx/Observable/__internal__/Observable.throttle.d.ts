import { ObservableLike } from "../../../rx.js";
declare const Observable_throttle: (duration: number | import("../../../functions.js").Function1<unknown, ObservableLike<unknown>>, options?: {
    readonly mode?: import("../../../rx.js").ThrottleMode | undefined;
}) => import("../../../containers.js").ContainerOperator<ObservableLike<unknown>, unknown, unknown>;
export default Observable_throttle;
