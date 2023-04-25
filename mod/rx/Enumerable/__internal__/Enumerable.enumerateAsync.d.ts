import { EnumerableLike } from "../../../rx.js";
import { EnumerateAsync } from "../../../streaming.js";
declare const Enumerable_enumerateAsync: EnumerateAsync<EnumerableLike, {
    readonly delay?: number;
}>["enumerateAsync"];
export default Enumerable_enumerateAsync;
