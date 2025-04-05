/// <reference types="./FlowControllerQueueMixin.d.ts" />

import { include, init, mix, props, proto, super_, unsafeCast, } from "../../__internal__/mixins.js";
import Broadcaster_addEventHandler from "../../computations/Broadcaster/__private__/Broadcaster.addEventHandler.js";
import Broadcaster_keep from "../../computations/Broadcaster/__private__/Broadcaster.keep.js";
import Broadcaster_map from "../../computations/Broadcaster/__private__/Broadcaster.map.js";
import * as Publisher from "../../computations/Publisher.js";
import { alwaysNone, call, isEqualTo, none, pipe, returns, } from "../../functions.js";
import { CollectionEnumeratorLike_count, DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_moveNext, EventListenerLike_notify, FlowControllerEnumeratorLike_addOnDataAvailableListener, FlowControllerEnumeratorLike_isDataAvailable, FlowControllerLike_addOnReadyListener, FlowControllerLike_isReady, QueueLike_capacity, QueueLike_enqueue, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
import QueueMixin from "./QueueMixin.js";
const FlowControllerQueueMixin = /*@__PURE__*/ (() => {
    const FlowControllerQueueMixin_onReadyPublisher = Symbol("FlowControllerQueueMixin_onReadyPublisher");
    function createPublisher() {
        const publisher = pipe(
        // FIXME: Maybe we should have a constructor flag to set this
        // to use an async publisher. Better for real work, harder for tests.
        Publisher.create(), Disposable.addTo(this));
        this[FlowControllerQueueMixin_onReadyPublisher] = publisher;
        return publisher;
    }
    return returns(mix(include(QueueMixin()), function FlowControllerQueueMixin(config) {
        init(QueueMixin(), this, config);
        return this;
    }, props({
        [EnumeratorLike_current]: none,
        [EnumeratorLike_hasCurrent]: false,
        [CollectionEnumeratorLike_count]: 0,
        [FlowControllerQueueMixin_onReadyPublisher]: none,
    }), proto({
        get [FlowControllerLike_isReady]() {
            unsafeCast(this);
            const count = this[CollectionEnumeratorLike_count];
            const capacity = this[QueueLike_capacity];
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
            const capacity = this[QueueLike_capacity];
            const isDisposed = this[DisposableLike_isDisposed];
            const onReadySignal = this[FlowControllerQueueMixin_onReadyPublisher];
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
                this[FlowControllerQueueMixin_onReadyPublisher]?.[EventListenerLike_notify]("data_ready");
        },
        [FlowControllerEnumeratorLike_addOnDataAvailableListener](callback) {
            const publisher = this[FlowControllerQueueMixin_onReadyPublisher] ??
                call(createPublisher, this);
            // FIXME: Could memoize
            return pipe(publisher, Broadcaster_keep(isEqualTo("data_ready")), Broadcaster_map(alwaysNone), Broadcaster_addEventHandler(callback), Disposable.addTo(this));
        },
        [FlowControllerLike_addOnReadyListener](callback) {
            const publisher = this[FlowControllerQueueMixin_onReadyPublisher] ??
                call(createPublisher, this);
            // FIXME: Could memoize
            return pipe(publisher, Broadcaster_keep(isEqualTo("ready")), Broadcaster_map(alwaysNone), Broadcaster_addEventHandler(callback), Disposable.addTo(this));
        },
    })));
})();
export default FlowControllerQueueMixin;
