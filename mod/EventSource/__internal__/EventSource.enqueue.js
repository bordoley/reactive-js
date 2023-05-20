/// <reference types="./EventSource.enqueue.d.ts" />

import { bindMethod } from "../../functions.js";
import { QueueableLike_enqueue } from "../../types.js";
import EventSource_forEach from "./EventSource.forEach.js";
const EventSource_enqueue = (queue) => EventSource_forEach(bindMethod(queue, QueueableLike_enqueue));
export default EventSource_enqueue;
