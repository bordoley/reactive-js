/// <reference types="./FlowControllerQueue.d.ts" />

import { include, init, mixInstanceFactory, } from "../../__internal__/mixins.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
import FlowControllerQueueMixin from "../__mixins__/FlowControllerQueueMixin.js";
export const create = /*@__PURE__*/ (() => mixInstanceFactory(include(DisposableMixin, FlowControllerQueueMixin()), function FlowControllerQueue(options) {
    init(DisposableMixin, this);
    init(FlowControllerQueueMixin(), this, options);
    return this;
}))();
