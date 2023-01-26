/// <reference types="./Queue.pop.d.ts" />
import { QueueLike_pop } from '../util.internal.mjs';

const Queue_pop = (queue) => queue[QueueLike_pop]();

export { Queue_pop as default };
