/// <reference types="./Queue.d.ts" />

import { MAX_SAFE_INTEGER } from "../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, proto, unsafeCast, } from "../__internal__/mixins.js";
import { none } from "../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, DropOldestBackpressureStrategy, EventListenerLike_notify, OverflowBackpressureStrategy, QueueableLike_addOnReadyListener, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_isReady, SinkLike_complete, SinkLike_isCompleted, } from "../utils.js";
import * as Disposable from "./Disposable.js";
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
export const create = (options) => createInternal({
    capacity: options?.capacity,
    backpressureStrategy: options?.backpressureStrategy,
});
export const createSorted = (comparator, options) => createInternal({
    autoDispose: options?.autoDispose,
    capacity: MAX_SAFE_INTEGER,
    backpressureStrategy: OverflowBackpressureStrategy,
    comparator,
});
export const createDropOldestWithoutBackpressure = /*@__PURE__*/ (() => mixInstanceFactory(include(DisposableMixin, QueueMixin()), function Queue(capacity, options) {
    init(DisposableMixin, this);
    init(QueueMixin(), this, {
        autoDispose: options?.autoDispose,
        backpressureStrategy: DropOldestBackpressureStrategy,
        capacity,
    });
    return this;
}, props(), proto({
    get [QueueableLike_isReady]() {
        unsafeCast(this);
        const isCompleted = this[SinkLike_isCompleted];
        return !isCompleted;
    },
})))();
export const createCollector = /*@__PURE__*/ (() => {
    const CollectorQueue_autoDispose = Symbol("CollectorQueue_autoDispose");
    return mixInstanceFactory(include(DisposableMixin, QueueMixin()), function CollectorQueue(options) {
        init(DisposableMixin, this);
        this[CollectorQueue_autoDispose] = options?.autoDispose ?? false;
        this.values = [];
        return this;
    }, props({
        [CollectorQueue_autoDispose]: false,
        [SinkLike_isCompleted]: false,
        values: none,
    }), proto({
        [QueueableLike_backpressureStrategy]: OverflowBackpressureStrategy,
        [QueueableLike_capacity]: MAX_SAFE_INTEGER,
        get [QueueableLike_isReady]() {
            unsafeCast(this);
            const isCompleted = this[SinkLike_isCompleted];
            const isDisposed = this[DisposableLike_isDisposed];
            return !isCompleted && !isDisposed;
        },
        [QueueableLike_addOnReadyListener]() {
            return Disposable.disposed;
        },
        [EventListenerLike_notify](next) {
            this.values.push(next);
        },
        [SinkLike_complete]() {
            this[SinkLike_isCompleted] = true;
            if (this[CollectorQueue_autoDispose]) {
                this[DisposableLike_dispose]();
            }
        },
    }));
})();
