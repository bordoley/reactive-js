/// <reference types="./Queue.d.ts" />

import { include, init, mixInstanceFactory } from "../__internal__/mixins.js";
import { DropOldestBackpressureStrategy, } from "../utils.js";
import DisposableMixin from "./__mixins__/DisposableMixin.js";
import QueueMixin from "./__mixins__/QueueMixin.js";
const createInternal = /*@__PURE__*/ (() => {
    const createQueue = mixInstanceFactory(include(DisposableMixin, QueueMixin()), function Queue(options) {
        init(DisposableMixin, this);
        init(QueueMixin(), this, options);
        return this;
    });
    return (options) => {
        return createQueue(options);
    };
})();
export const create = () => createInternal();
export const createSorted = (comparator) => createInternal({
    comparator,
});
export const createDropOldest = (capacity) => createInternal({
    backpressureStrategy: DropOldestBackpressureStrategy,
    capacity,
});
