/// <reference types="./PullableQueue.peek.d.ts" />

import { PullableQueueLike_peek, } from "../../__internal__/util.internal.js";
const PullableQueue_peek = (queue) => queue[PullableQueueLike_peek]();
export default PullableQueue_peek;
