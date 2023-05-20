/// <reference types="./EnumeratorFactory.enqueue.d.ts" />

import { bindMethod } from "../../functions.js";
import { QueueableLike_enqueue } from "../../types.js";
import EnumeratorFactory_forEach from "./EnumeratorFactory.forEach.js";
const EnumeratorFactory_enqueue = (queue) => EnumeratorFactory_forEach(bindMethod(queue, QueueableLike_enqueue));
export default EnumeratorFactory_enqueue;
