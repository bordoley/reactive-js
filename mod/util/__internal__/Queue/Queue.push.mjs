/// <reference types="./Queue.push.d.ts" />
import { QueueLike_push } from '../util.internal.mjs';

// FIXME: Maybe this should be pipeable?
const Queue$push = (queue, value) => queue[QueueLike_push](value);

export { Queue$push as default };
