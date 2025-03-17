/// <reference types="./Queue.d.ts" />

import { MAX_SAFE_INTEGER } from "../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, proto, super_, } from "../__internal__/mixins.js";
import { none } from "../functions.js";
import { CollectionEnumeratorLike_count, EnumeratorLike_moveNext, QueueLike_enqueue, } from "../utils.js";
import QueueMixin from "./__mixins__/QueueMixin.js";
const createInternal = /*@__PURE__*/ (() => {
    const createQueue = mixInstanceFactory(include(QueueMixin()), function Queue(options) {
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
export const createDropOldest = 
/*@__PURE__*/ (() => {
    const DropOldestQueue_capacity = Symbol("DropOldestQueue_capacity");
    return mixInstanceFactory(include(QueueMixin()), function DropOldestQueue(capacity) {
        init(QueueMixin(), this, none);
        this[DropOldestQueue_capacity] = capacity;
        return this;
    }, props({
        [DropOldestQueue_capacity]: MAX_SAFE_INTEGER,
    }), proto({
        [QueueLike_enqueue](v) {
            const capacity = this[DropOldestQueue_capacity];
            const applyBackpressure = this[CollectionEnumeratorLike_count] >= capacity;
            if (applyBackpressure) {
                this[EnumeratorLike_moveNext]();
            }
            if (capacity > 0) {
                super_(QueueMixin(), this, QueueLike_enqueue, v);
            }
        },
    }));
})();
