import { SequenceLike } from "../../../containers.js";
import { ToRunnable } from "../../../rx.js";
declare const Sequence_toRunnable: ToRunnable<SequenceLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toRunnable"];
export default Sequence_toRunnable;
