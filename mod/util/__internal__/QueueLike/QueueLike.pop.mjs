/// <reference types="./QueueLike.pop.d.ts" />
import { QueueLike_pop } from '../util.internal.mjs';

const QueueLike__pop = (queue) => queue[QueueLike_pop]();

export { QueueLike__pop as default };
