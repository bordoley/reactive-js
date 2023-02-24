/// <reference types="./Queueable.pushTo.d.ts" />

import { QueueableLike_push } from "../../../util.js";
const Queueable_pushTo = (queue) => v => queue[QueueableLike_push](v);
export default Queueable_pushTo;
