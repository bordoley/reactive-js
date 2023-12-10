/// <reference types="./PriorityQueue.d.ts" />

import { createInstanceFactory } from "../__internal__/mixins.js";
import PriorityQueueMixin from "./__mixins__/PriorityQueueMixin.js";
export const create = /*@__PURE__*/ (() => createInstanceFactory(PriorityQueueMixin()))();
