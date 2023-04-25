import { ReadonlyArrayLike } from "../../../containers.js";
import { Flow } from "../../../rx.js";
declare const ReadonlyArray_toFlowable: Flow<ReadonlyArrayLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["flow"];
export default ReadonlyArray_toFlowable;
