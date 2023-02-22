/// <reference types="./Queue.push.d.ts" />

import { QueueLike_push } from "../util.internal.js";
// FIXME: Maybe this should be pipeable?
const Queue_push = (queue, value) => queue[QueueLike_push](value);
export default Queue_push;
