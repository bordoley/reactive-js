import { IterableLike } from "../../../containers.js";
import { ToRunnable } from "../../../rx.js";
declare const Iterable_toRunnable: ToRunnable<IterableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toRunnable"];
export default Iterable_toRunnable;
