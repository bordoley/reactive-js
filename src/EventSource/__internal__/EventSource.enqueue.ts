import type * as EventSource from "../../EventSource.js";
import { bindMethod } from "../../functions.js";
import { QueueableLike, QueueableLike_enqueue } from "../../types.js";
import EventSource_forEach from "./EventSource.forEach.js";

const EventSource_enqueue: EventSource.Signature["enqueue"] = <T>(
  queue: QueueableLike<T>,
) => EventSource_forEach(bindMethod(queue, QueueableLike_enqueue));

export default EventSource_enqueue;
