/// <reference types="./Queueable.push.d.ts" />

import { QueueableLike_push } from "../../../util.js";
const Queueable_push = (v) => queue => {
    queue[QueueableLike_push](v);
    return queue;
};
export default Queueable_push;
