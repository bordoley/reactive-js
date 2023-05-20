import type * as ReadonlyArray from "../../ReadonlyArray.js";
import { bindMethod } from "../../functions.js";
import { QueueableLike, QueueableLike_enqueue } from "../../types.js";
import ReadonlyArray_forEach from "./ReadonlyArray.forEach.js";

const ReadonlyArray_enqueue: ReadonlyArray.Signature["enqueue"] = <T>(
  queue: QueueableLike<T>,
) => ReadonlyArray_forEach(bindMethod(queue, QueueableLike_enqueue));

export default ReadonlyArray_enqueue;
