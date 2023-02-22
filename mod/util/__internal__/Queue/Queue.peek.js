/// <reference types="./Queue.peek.d.ts" />

import { QueueLike_peek } from "../util.internal.js";
const Queue_peek = (queue) => queue[QueueLike_peek]();
export default Queue_peek;
