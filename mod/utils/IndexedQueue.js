/// <reference types="./IndexedQueue.d.ts" />

import { createInstanceFactory } from "../__internal__/mixins.js";
import IndexedQueueMixin from "./__mixins__/IndexedQueueMixin.js";
export const create = /*@__PURE__*/ (() => createInstanceFactory(IndexedQueueMixin()))();
