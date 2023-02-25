/// <reference types="./Queue.pushTo.d.ts" />

import { QueueLike_push } from "../../../util.js";
const Queue_pushTo = (queue) => v => queue[QueueLike_push](v);
export default Queue_pushTo;
