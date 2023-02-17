import { EnumerableLike } from "../../../ix.js";
import { ToFlowable } from "../../../streaming.js";
declare const Enumerable_toFlowable: ToFlowable<EnumerableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toFlowable"];
export { Enumerable_toFlowable as default };
