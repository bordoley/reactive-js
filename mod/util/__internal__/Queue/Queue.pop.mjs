/// <reference types="./Queue.pop.d.ts" />
import { QueueLike_pop } from '../util.internal.mjs';

const Queue$pop = (queue) => queue[QueueLike_pop]();

export { Queue$pop as default };
