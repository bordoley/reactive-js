import { IterableLike } from "../../../containers.js";
import { ToRunnable } from "../../../rx.js";
declare const Iterable_toRunnable: ToRunnable<IterableLike, {
    delay?: number;
    delayStart?: boolean;
}>["toRunnable"];
export default Iterable_toRunnable;
