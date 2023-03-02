import { Generate } from "../../../containers.js";
import { AsyncEnumerableLike } from "../../../streaming.js";
declare const AsyncEnumerable_generate: Generate<AsyncEnumerableLike, {
    delay?: number;
}>["generate"];
export default AsyncEnumerable_generate;
