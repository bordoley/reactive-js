/// <reference types="./Queue.d.ts" />

import { createInstanceFactory } from "../__internal__/mixins.js";
import QueueMixin from "./__mixins__/QueueMixin.js";
export const create = /*@__PURE__*/ (() => {
    const createQueue = createInstanceFactory(QueueMixin());
    return (options) => {
        return createQueue(options);
    };
})();
