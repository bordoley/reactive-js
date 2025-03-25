/// <reference types="./Producer.broadcast.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, proto, unsafeCast, } from "../../../__internal__/mixins.js";
import { SourceLike_subscribe, } from "../../../computations.js";
import { none, pipe, raise } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { DelegatingDisposableContainerLike_delegate } from "../../../utils/__mixins__/DelegatingDisposableContainerMixin.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, QueueableLike_addOnReadyListener, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_isReady, SinkLike_complete, SinkLike_isCompleted, ThrowBackpressureStrategy, } from "../../../utils.js";
import Broadcaster_addEventHandler from "../../Broadcaster/__private__/Broadcaster.addEventHandler.js";
import Broadcaster_create from "../../Broadcaster/__private__/Broadcaster.create.js";
import Broadcaster_createPauseable from "../../Broadcaster/__private__/Broadcaster.createPauseable.js";
const Producer_broadcast = /*@__PURE__*/ (() => {
    const EventListernToPauseableConsumer_mode = Symbol("EventListernToPauseableConsumer_mode");
    const createPauseableConsumer = mixInstanceFactory(include(DelegatingDisposableMixin()), function EventListenerToPauseableConsumer(listener, mode) {
        init(DelegatingDisposableMixin(), this, listener);
        this[EventListernToPauseableConsumer_mode] = mode;
        pipe(mode, Disposable.bindTo(listener), Broadcaster_addEventHandler(isPaused => {
            this[QueueableLike_isReady] = !isPaused;
        }), Disposable.addTo(this));
        return this;
    }, props({
        [EventListernToPauseableConsumer_mode]: none,
        [QueueableLike_isReady]: false,
    }), proto({
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return this[DisposableLike_isDisposed];
        },
        [QueueableLike_backpressureStrategy]: ThrowBackpressureStrategy,
        [QueueableLike_capacity]: MAX_SAFE_INTEGER,
        [QueueableLike_addOnReadyListener](callback) {
            return pipe(this[EventListernToPauseableConsumer_mode], Broadcaster_addEventHandler(isPaused => {
                if (!isPaused) {
                    callback();
                }
            }), Disposable.addTo(this));
        },
        [EventListenerLike_notify](next) {
            const delegate = this[DelegatingDisposableContainerLike_delegate];
            if (this[SinkLike_isCompleted]) {
                raise("Broadcaster is completed");
            }
            else if (!this[QueueableLike_isReady]) {
                raise("Broadcaster is paused");
            }
            delegate[EventListenerLike_notify](next);
        },
        [SinkLike_complete]() {
            this[DisposableLike_dispose]();
        },
    }));
    return (options) => (producer) => Broadcaster_createPauseable(mode => Broadcaster_create(listener => {
        const consumer = createPauseableConsumer(listener, mode);
        producer[SourceLike_subscribe](consumer);
    }), options);
})();
export default Producer_broadcast;
