/// <reference types="./Queue.d.ts" />

import { include, init, mixInstanceFactory } from "../__internal__/mixins.js";
import DisposableMixin from "./__mixins__/DisposableMixin.js";
import QueueMixin from "./__mixins__/QueueMixin.js";
export const create = /*@__PURE__*/ (() => {
    const createQueue = mixInstanceFactory(include(DisposableMixin, QueueMixin()), function Queue(options) {
        init(DisposableMixin, this);
        init(QueueMixin(), this, options);
        return this;
    });
    return (options) => {
        return createQueue(options);
    };
})();
