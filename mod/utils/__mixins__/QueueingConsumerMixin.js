/// <reference types="./QueueingConsumerMixin.d.ts" />

import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { include, init, mix, props, super_, unsafeCast, } from "../../__internal__/mixins.js";
import EventSource_addEventHandler from "../../computations/EventSource/__private__/EventSource.addEventHandler.js";
import * as Publisher from "../../computations/Publisher.js";
import { newInstance, none, pipe, raiseError, returns, } from "../../functions.js";
import { clampPositiveInteger } from "../../math.js";
import { BackPressureError, CollectionEnumeratorLike_count, ConsumerLike_addOnReadyListener, ConsumerLike_backpressureStrategy, ConsumerLike_capacity, ConsumerLike_isReady, DisposableLike_dispose, DropLatestBackpressureStrategy, DropOldestBackpressureStrategy, EnumeratorLike_moveNext, EventListenerLike_notify, OverflowBackpressureStrategy, QueueLike_enqueue, SinkLike_complete, SinkLike_isCompleted, ThrowBackpressureStrategy, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
import QueueMixin from "./QueueMixin.js";
const QueueingConsumerMixin = /*@__PURE__*/ (() => {
    const QueueingConsumerMixin_autoDispose = Symbol("QueueingConsumerMixin_autoDispose");
    const QueueingConsumerMixin_onReadyPublisher = Symbol("QueueingConsumerMixin_onReadyPublisher");
    const QueueingConsumerMixin_backpressureStrategy = Symbol("QueueingConsumerMixin_backpressureStrategy");
    const QueueingConsumerMixin_capacity = Symbol("QueueingConsumerMixin_capacity");
    const QueueingConsumerMixin_isCompleted = Symbol("QueueingConsumerMixin_isCompleted");
    return returns(mix(include(QueueMixin()), function QueueingConsumerMixin(config) {
        init(QueueMixin(), this, config);
        this[QueueingConsumerMixin_backpressureStrategy] =
            config?.backpressureStrategy ?? OverflowBackpressureStrategy;
        this[QueueingConsumerMixin_capacity] = clampPositiveInteger(config?.capacity ?? MAX_SAFE_INTEGER);
        this[QueueingConsumerMixin_autoDispose] = config?.autoDispose ?? false;
        return this;
    }, props({
        [QueueingConsumerMixin_autoDispose]: false,
        [CollectionEnumeratorLike_count]: 0,
        [QueueingConsumerMixin_backpressureStrategy]: OverflowBackpressureStrategy,
        [QueueingConsumerMixin_capacity]: MAX_SAFE_INTEGER,
        [QueueingConsumerMixin_isCompleted]: false,
        [QueueingConsumerMixin_onReadyPublisher]: none,
    }), {
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return this[QueueingConsumerMixin_isCompleted];
        },
        get [ConsumerLike_capacity]() {
            unsafeCast(this);
            return this[QueueingConsumerMixin_capacity];
        },
        get [ConsumerLike_backpressureStrategy]() {
            unsafeCast(this);
            return this[QueueingConsumerMixin_backpressureStrategy];
        },
        get [ConsumerLike_isReady]() {
            unsafeCast(this);
            const count = this[CollectionEnumeratorLike_count];
            const capacity = this[QueueingConsumerMixin_capacity];
            const isCompleted = this[SinkLike_isCompleted];
            return !isCompleted && count < capacity;
        },
        [EnumeratorLike_moveNext]() {
            const count = this[CollectionEnumeratorLike_count];
            const isCompleted = this[SinkLike_isCompleted];
            const capacity = this[ConsumerLike_capacity];
            const shouldNotifyReady = count === capacity && capacity > 0 && !isCompleted;
            const onReadySignal = this[QueueingConsumerMixin_onReadyPublisher];
            const result = super_(QueueMixin(), this, EnumeratorLike_moveNext);
            if (shouldNotifyReady) {
                onReadySignal?.[EventListenerLike_notify]();
            }
            return result;
        },
        [EventListenerLike_notify](item) {
            const backpressureStrategy = this[QueueingConsumerMixin_backpressureStrategy];
            const capacity = this[QueueingConsumerMixin_capacity];
            const applyBackpressure = this[CollectionEnumeratorLike_count] >= capacity;
            const isCompleted = this[SinkLike_isCompleted];
            if (isCompleted ||
                (backpressureStrategy === DropLatestBackpressureStrategy &&
                    applyBackpressure) ||
                // Special case the 0 capacity queue so that we don't fall through
                // to pushing an item onto the queue
                (backpressureStrategy === DropOldestBackpressureStrategy &&
                    capacity === 0)) {
                return;
            }
            else if (backpressureStrategy === DropOldestBackpressureStrategy &&
                applyBackpressure) {
                // We want to pop off the oldest value first, before enqueueing
                // to avoid unintentionally growing the queue.
                this[EnumeratorLike_moveNext]();
            }
            else if (backpressureStrategy === ThrowBackpressureStrategy &&
                applyBackpressure) {
                raiseError(newInstance(BackPressureError, this));
            }
            this[QueueLike_enqueue](item);
        },
        [SinkLike_complete]() {
            this[QueueingConsumerMixin_isCompleted] = true;
            this[QueueingConsumerMixin_onReadyPublisher]?.[DisposableLike_dispose]();
            this[QueueingConsumerMixin_onReadyPublisher] = none;
            if (this[QueueingConsumerMixin_autoDispose]) {
                this[DisposableLike_dispose]();
            }
        },
        [ConsumerLike_addOnReadyListener](callback) {
            const publisher = this[QueueingConsumerMixin_onReadyPublisher] ??
                (() => {
                    const publisher = pipe(Publisher.create(), Disposable.addTo(this));
                    this[QueueingConsumerMixin_onReadyPublisher] = publisher;
                    return publisher;
                })();
            return pipe(publisher, EventSource_addEventHandler(callback), Disposable.addTo(this));
        },
    }));
})();
export default QueueingConsumerMixin;
