/// <reference types="./Queue.d.ts" />

import { include, init, mixInstanceFactory } from "../__internal__/mixins.js";
import DisposableMixin from "./__mixins__/DisposableMixin.js";
import FlowControlQueueMixin from "./__mixins__/FlowControlQueueMixin.js";
import QueueMixin from "./__mixins__/QueueMixin.js";
const createInternal = /*@__PURE__*/ (() => mixInstanceFactory(include(DisposableMixin, QueueMixin()), function Queue(options) {
    init(DisposableMixin, this);
    init(QueueMixin(), this, options);
    return this;
}))();
export const create = (options) => createInternal({
    backpressureStrategy: options?.backpressureStrategy,
    capacity: options?.capacity,
});
export const createWithFlowControl = /*@__PURE__*/ (() => mixInstanceFactory(include(DisposableMixin, FlowControlQueueMixin()), function FlowControlQueue(options) {
    init(DisposableMixin, this);
    init(FlowControlQueueMixin(), this, options);
    return this;
}))();
export const createSorted = (comparator) => createInternal({
    comparator,
});
