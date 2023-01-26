/// <reference types="./Queue.peek.d.ts" />
import { QueueLike_peek } from '../util.internal.mjs';

const Queue$peek = (queue) => queue[QueueLike_peek]();

export { Queue$peek as default };
