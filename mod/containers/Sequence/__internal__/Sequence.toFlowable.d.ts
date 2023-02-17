import { SequenceLike } from "../../../containers.js";
import { ToFlowable } from "../../../streaming.js";
declare const Sequence_toFlowable: ToFlowable<SequenceLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toFlowable"];
export { Sequence_toFlowable as default };
