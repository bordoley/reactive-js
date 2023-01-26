/// <reference types="./Queue.peek.d.ts" />
import { QueueLike_peek } from '../util.internal.mjs';

const Queue_peek = (queue) => queue[QueueLike_peek]();

export { Queue_peek as default };
