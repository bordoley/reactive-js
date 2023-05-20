/// <reference types="./ReadonlyArray.enqueue.d.ts" />

import { bindMethod } from "../../functions.js";
import { QueueableLike_enqueue } from "../../types.js";
import ReadonlyArray_forEach from "./ReadonlyArray.forEach.js";
const ReadonlyArray_enqueue = (queue) => ReadonlyArray_forEach(bindMethod(queue, QueueableLike_enqueue));
export default ReadonlyArray_enqueue;
