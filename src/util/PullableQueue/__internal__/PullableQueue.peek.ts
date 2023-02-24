import { Optional } from "../../../functions.js";
import {
  PullableQueueLike,
  PullableQueueLike_peek,
} from "../../__internal__/util.internal.js";

const PullableQueue_peek = <T>(queue: PullableQueueLike<T>): Optional<T> =>
  queue[PullableQueueLike_peek]();

export default PullableQueue_peek;
