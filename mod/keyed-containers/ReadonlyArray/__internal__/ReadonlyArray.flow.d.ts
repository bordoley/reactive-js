import { ReadonlyArrayLike } from "../../../containers.js";
import { Flow } from "../../../streaming.js";
declare const ReadonlyArray_toFlowable: Flow<ReadonlyArrayLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["flow"];
export default ReadonlyArray_toFlowable;
