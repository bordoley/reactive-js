/// <reference types="./FlowControlledQueueMixin.d.ts" />

import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { include, init, mix, props, proto, super_, unsafeCast, } from "../../__internal__/mixins.js";
import Broadcaster_addEventHandler from "../../computations/Broadcaster/__private__/Broadcaster.addEventHandler.js";
import Broadcaster_keep from "../../computations/Broadcaster/__private__/Broadcaster.keep.js";
import Broadcaster_map from "../../computations/Broadcaster/__private__/Broadcaster.map.js";
import * as Publisher from "../../computations/Publisher.js";
import { alwaysNone, call, isEqualTo, newInstance, none, pipe, raiseError, returns, } from "../../functions.js";
import { clampPositiveInteger } from "../../math.js";
import { BackPressureError, CollectionEnumeratorLike_count, DisposableLike_isDisposed, DropLatestBackpressureStrategy, DropOldestBackpressureStrategy, EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_moveNext, EventListenerLike_notify, FlowControllerEnumeratorLike_addOnDataAvailableListener, FlowControllerEnumeratorLike_isDataAvailable, FlowControllerLike_addOnReadyListener, FlowControllerLike_backpressureStrategy, FlowControllerLike_capacity, FlowControllerLike_isReady, FlowControllerQueueLike_enqueue, OverflowBackpressureStrategy, QueueLike_enqueue, ThrowBackpressureStrategy, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
import QueueMixin from "./QueueMixin.js";
const FlowControlledQueueMixin = /*@__PURE__*/ (() => {
    const FlowControlledQueueMixin_onReadyPublisher = Symbol("FlowControlledQueueMixin_onReadyPublisher");
    function createPublisher() {
        const publisher = pipe(Publisher.createAsync(), Disposable.addTo(this));
        this[FlowControlledQueueMixin_onReadyPublisher] = publisher;
        return publisher;
    }
    return returns(mix(include(QueueMixin()), function FlowControlledQueueMixin(config) {
        init(QueueMixin(), this, config);
        this[FlowControllerLike_backpressureStrategy] =
            config?.backpressureStrategy ?? OverflowBackpressureStrategy;
        this[FlowControllerLike_capacity] = clampPositiveInteger(config?.capacity ?? MAX_SAFE_INTEGER);
        return this;
    }, props({
        [FlowControllerLike_capacity]: MAX_SAFE_INTEGER,
        [FlowControllerLike_backpressureStrategy]: OverflowBackpressureStrategy,
        [EnumeratorLike_current]: none,
        [EnumeratorLike_hasCurrent]: false,
        [CollectionEnumeratorLike_count]: 0,
        [FlowControlledQueueMixin_onReadyPublisher]: none,
    }), proto({
        get [FlowControllerLike_isReady]() {
            unsafeCast(this);
            const count = this[CollectionEnumeratorLike_count];
            const capacity = this[FlowControllerLike_capacity];
            const isDisposed = this[DisposableLike_isDisposed];
            return count < capacity && !isDisposed;
        },
        get [FlowControllerEnumeratorLike_isDataAvailable]() {
            unsafeCast(this);
            const count = this[CollectionEnumeratorLike_count];
            return count > 0;
        },
        [EnumeratorLike_moveNext]() {
            const count = this[CollectionEnumeratorLike_count];
            const capacity = this[FlowControllerLike_capacity];
            const isDisposed = this[DisposableLike_isDisposed];
            const onReadySignal = this[FlowControlledQueueMixin_onReadyPublisher];
            const shouldNotifyReady = count === capacity && capacity > 0 && !isDisposed;
            const result = super_(QueueMixin(), this, EnumeratorLike_moveNext);
            shouldNotifyReady &&
                onReadySignal?.[EventListenerLike_notify]("ready");
            return result;
        },
        [FlowControllerQueueLike_enqueue](item) {
            const isDisposed = this[DisposableLike_isDisposed];
            const backpressureStrategy = this[FlowControllerLike_backpressureStrategy];
            const capacity = this[FlowControllerLike_capacity];
            const applyBackpressure = this[CollectionEnumeratorLike_count] >= capacity;
            const oldCount = this[CollectionEnumeratorLike_count];
            if ((backpressureStrategy === DropLatestBackpressureStrategy &&
                applyBackpressure) ||
                // Special case the 0 capacity queue so that we don't fall through
                // to pushing an item onto the queue
                (backpressureStrategy === DropOldestBackpressureStrategy &&
                    capacity === 0) ||
                isDisposed) {
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
            const newCount = this[CollectionEnumeratorLike_count];
            const shouldNotify = oldCount < 1 && newCount >= 1;
            shouldNotify &&
                this[FlowControlledQueueMixin_onReadyPublisher]?.[EventListenerLike_notify]("data_ready");
        },
        [FlowControllerEnumeratorLike_addOnDataAvailableListener](callback) {
            const publisher = this[FlowControlledQueueMixin_onReadyPublisher] ??
                call(createPublisher, this);
            // FIXME: Could memoize
            return pipe(publisher, Broadcaster_keep(isEqualTo("data_ready")), Broadcaster_map(alwaysNone), Broadcaster_addEventHandler(callback), Disposable.addTo(this));
        },
        [FlowControllerLike_addOnReadyListener](callback) {
            const publisher = this[FlowControlledQueueMixin_onReadyPublisher] ??
                call(createPublisher, this);
            // FIXME: Could memoize
            return pipe(publisher, Broadcaster_keep(isEqualTo("ready")), Broadcaster_map(alwaysNone), Broadcaster_addEventHandler(callback), Disposable.addTo(this));
        },
    })));
})();
export default FlowControlledQueueMixin;
