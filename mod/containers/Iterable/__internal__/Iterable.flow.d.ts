import { IterableLike } from "../../../containers.js";
import { Flow } from "../../../rx.js";
declare const Iterable_flow: Flow<IterableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["flow"];
export default Iterable_flow;
