import { IterableLike } from "../../../containers.js";
import { EnumerateAsync } from "../../../streaming.js";
declare const Iterable_enumerateAsync: EnumerateAsync<IterableLike, {
    readonly delay?: number;
}>["enumerateAsync"];
export default Iterable_enumerateAsync;
