/// <reference types="./Queue.pushTo.d.ts" />

import { QueueableLike_push } from "../../../util.js";
const Queue_pushTo = (queue) => v => queue[QueueableLike_push](v);
export default Queue_pushTo;
