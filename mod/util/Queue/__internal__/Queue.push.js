/// <reference types="./Queue.push.d.ts" />

import { QueueLike_push } from "../../../util.js";
const Queue_push = (v) => queue => {
    queue[QueueLike_push](v);
    return queue;
};
export default Queue_push;
