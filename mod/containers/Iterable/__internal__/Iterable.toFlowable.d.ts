import { IterableLike } from "../../../containers.js";
import { ToFlowable } from "../../../streaming.js";
declare const Iterable_toFlowable: ToFlowable<IterableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toFlowable"];
export default Iterable_toFlowable;
