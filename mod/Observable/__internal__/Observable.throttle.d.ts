import { ObservableContainer } from "../../containers.js";
import { Function1 } from "../../functions.js";
import { ObservableLike } from "../../types.js";
declare const Observable_throttle: (duration: number | Function1<unknown, ObservableLike<unknown>>, options?: {
    readonly mode?: "interval" | "first" | "last" | undefined;
}) => import("../../containers.js").Container.Operator<ObservableContainer.Type, unknown, unknown>;
export default Observable_throttle;
