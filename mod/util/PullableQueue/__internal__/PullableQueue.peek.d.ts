import { Optional } from "../../../functions.js";
import { PullableQueueLike } from "../../__internal__/util.internal.js";
declare const PullableQueue_peek: <T>(queue: PullableQueueLike<T>) => Optional<T>;
export default PullableQueue_peek;
