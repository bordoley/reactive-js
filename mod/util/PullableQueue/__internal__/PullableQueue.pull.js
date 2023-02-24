/// <reference types="./PullableQueue.pull.d.ts" />

import { PullableQueueLike_pull, } from "../../__internal__/util.internal.js";
const PullableQueue_pull = (queue) => queue[PullableQueueLike_pull]();
export default PullableQueue_pull;
