import { EnumerableLike } from "../../../ix.js";
import { ToRunnable } from "../../../rx.js";
declare const Enumerable_toRunnable: ToRunnable<EnumerableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toRunnable"];
export default Enumerable_toRunnable;
