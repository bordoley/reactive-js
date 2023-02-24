import { Optional } from "../../../functions.js";
import {
  PullableQueueLike,
  PullableQueueLike_pull,
} from "../../__internal__/util.internal.js";

const PullableQueue_pull = <T>(queue: PullableQueueLike<T>): Optional<T> =>
  queue[PullableQueueLike_pull]();

export default PullableQueue_pull;
