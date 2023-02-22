/// <reference types="./Queue.pop.d.ts" />

import { QueueLike_pop } from "../util.internal.js";
const Queue_pop = (queue) => queue[QueueLike_pop]();
export default Queue_pop;
