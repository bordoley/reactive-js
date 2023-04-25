import { ReadonlyArrayLike } from "../../../containers.js";
import { EnumerateAsync } from "../../../streaming.js";
declare const ReadonlyArray_enumerateAsync: EnumerateAsync<ReadonlyArrayLike, {
    readonly delay?: number;
    readonly start?: number;
    readonly count?: number;
}>["enumerateAsync"];
export default ReadonlyArray_enumerateAsync;
