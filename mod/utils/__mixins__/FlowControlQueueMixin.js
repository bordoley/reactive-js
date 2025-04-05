/// <reference types="./FlowControlQueueMixin.d.ts" />

import { include, init, mix, props, proto, super_, unsafeCast, } from "../../__internal__/mixins.js";
import Broadcaster_addEventHandler from "../../computations/Broadcaster/__private__/Broadcaster.addEventHandler.js";
import Broadcaster_keep from "../../computations/Broadcaster/__private__/Broadcaster.keep.js";
import Broadcaster_map from "../../computations/Broadcaster/__private__/Broadcaster.map.js";
import * as Publisher from "../../computations/Publisher.js";
import { alwaysNone, call, isEqualTo, none, pipe, returns, } from "../../functions.js";
import { CollectionEnumeratorLike_count, ConsumableEnumeratorLike_addOnDataAvailableListener, ConsumableEnumeratorLike_isDataAvailable, DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_moveNext, EventListenerLike_notify, FlowControllerLike_addOnReadyListener, FlowControllerLike_isReady, QueueLike_capacity, QueueLike_enqueue, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
import QueueMixin from "./QueueMixin.js";
const FlowControlQueueMixin = /*@__PURE__*/ (() => {
    const FlowControlQueueMixin_onReadyPublisher = Symbol("FlowControlQueueMixin_onReadyPublisher");
    function createPublisher() {
        const publisher = pipe(
        // FIXME: Maybe we should have a constructor flag to set this
        // to use an async publisher. Better for real work, harder for tests.
        Publisher.create(), Disposable.addTo(this));
        this[FlowControlQueueMixin_onReadyPublisher] = publisher;
        return publisher;
    }
    return returns(mix(include(QueueMixin()), function FlowControlQueueMixin(config) {
        init(QueueMixin(), this, config);
        return this;
    }, props({
        [EnumeratorLike_current]: none,
        [EnumeratorLike_hasCurrent]: false,
        [CollectionEnumeratorLike_count]: 0,
        [FlowControlQueueMixin_onReadyPublisher]: none,
    }), proto({
        get [FlowControllerLike_isReady]() {
            unsafeCast(this);
            const count = this[CollectionEnumeratorLike_count];
            const capacity = this[QueueLike_capacity];
            const isDisposed = this[DisposableLike_isDisposed];
            return count < capacity && !isDisposed;
        },
        get [ConsumableEnumeratorLike_isDataAvailable]() {
            unsafeCast(this);
            const count = this[CollectionEnumeratorLike_count];
            return count > 0;
        },
        [EnumeratorLike_moveNext]() {
            const count = this[CollectionEnumeratorLike_count];
            const capacity = this[QueueLike_capacity];
            const isDisposed = this[DisposableLike_isDisposed];
            const onReadySignal = this[FlowControlQueueMixin_onReadyPublisher];
            const shouldNotifyReady = count === capacity && capacity > 0 && !isDisposed;
            const result = super_(QueueMixin(), this, EnumeratorLike_moveNext);
            shouldNotifyReady &&
                onReadySignal?.[EventListenerLike_notify]("ready");
            return result;
        },
        [QueueLike_enqueue](item) {
            const oldCount = this[CollectionEnumeratorLike_count];
            super_(QueueMixin(), this, QueueLike_enqueue, item);
            const newCount = this[CollectionEnumeratorLike_count];
            const shouldNotify = oldCount < 1 && newCount >= 1;
            shouldNotify &&
                this[FlowControlQueueMixin_onReadyPublisher]?.[EventListenerLike_notify]("data_ready");
        },
        [ConsumableEnumeratorLike_addOnDataAvailableListener](callback) {
            const publisher = this[FlowControlQueueMixin_onReadyPublisher] ??
                call(createPublisher, this);
            // FIXME: Could memoize
            return pipe(publisher, Broadcaster_keep(isEqualTo("data_ready")), Broadcaster_map(alwaysNone), Broadcaster_addEventHandler(callback), Disposable.addTo(this));
        },
        [FlowControllerLike_addOnReadyListener](callback) {
            const publisher = this[FlowControlQueueMixin_onReadyPublisher] ??
                call(createPublisher, this);
            // FIXME: Could memoize
            return pipe(publisher, Broadcaster_keep(isEqualTo("ready")), Broadcaster_map(alwaysNone), Broadcaster_addEventHandler(callback), Disposable.addTo(this));
        },
    })));
})();
export default FlowControlQueueMixin;
