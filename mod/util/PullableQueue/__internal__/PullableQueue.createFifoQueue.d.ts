import { Comparator } from "../../../functions.js";
import { PullableQueueLike } from "../../__internal__/util.internal.js";
declare const PullableQueue_createFifoQueue: <T>(comparator: Comparator<T>) => PullableQueueLike<T>;
export default PullableQueue_createFifoQueue;
