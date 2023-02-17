import { ReadonlyArrayLike } from "../../../containers.js";
import { ToFlowable } from "../../../streaming.js";
declare const ReadonlyArray_toFlowable: ToFlowable<ReadonlyArrayLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toFlowable"];
export { ReadonlyArray_toFlowable as default };
