import { AsyncIterableLike } from "../../../containers.js";
import { ToFlowable } from "../../../streaming.js";
declare const AsyncIterable_toFlowable: ToFlowable<AsyncIterableLike, {
    maxBuffer?: number;
}>["toFlowable"];
export default AsyncIterable_toFlowable;
