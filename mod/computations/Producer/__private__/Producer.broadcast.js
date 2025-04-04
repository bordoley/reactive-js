/// <reference types="./Producer.broadcast.d.ts" />

import { include, init, mixInstanceFactory, props, proto, unsafeCast, } from "../../../__internal__/mixins.js";
import { EventSourceLike_subscribe, StoreLike_value, } from "../../../computations.js";
import { none, pipe, raise, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingEventListenerMixin, { DelegatingEventListenerLike_delegate, } from "../../../utils/__mixins__/DelegatingEventListenerMixin.js";
import DisposeOnCompleteSinkMixin from "../../../utils/__mixins__/DisposeOnCompleteSinkMixin.js";
import { EventListenerLike_notify, FlowControllerLike_addOnReadyListener, FlowControllerLike_isReady, PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, SinkLike_isCompleted, } from "../../../utils.js";
import Broadcaster_addEventHandler from "../../Broadcaster/__private__/Broadcaster.addEventHandler.js";
import * as Publisher from "../../Publisher.js";
import * as WritableStore from "../../WritableStore.js";
import DelegatingBroadcasterMixin from "../../__mixins__/DelegatingBroadcasterMixin.js";
const Producer_broadcast = /*@__PURE__*/ (() => {
    const createPauseableConsumerBroadcaster = mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingEventListenerMixin(), DisposeOnCompleteSinkMixin(), DelegatingBroadcasterMixin()), function EventListenerToPauseableConsumer(options) {
        const delegate = Publisher.create(options);
        init(DelegatingDisposableMixin, this, delegate);
        init(DelegatingEventListenerMixin(), this, delegate);
        init(DisposeOnCompleteSinkMixin(), this);
        init(DelegatingBroadcasterMixin(), this, delegate);
        const mode = pipe(WritableStore.create(false), Disposable.bindTo(this));
        this[PauseableLike_isPaused] = mode;
        return this;
    }, props({
        [PauseableLike_isPaused]: none,
    }), proto({
        get [FlowControllerLike_isReady]() {
            unsafeCast(this);
            return !this[PauseableLike_isPaused][StoreLike_value];
        },
        [PauseableLike_pause]() {
            this[PauseableLike_isPaused][StoreLike_value] = true;
        },
        [PauseableLike_resume]() {
            this[PauseableLike_isPaused][StoreLike_value] = false;
        },
        [FlowControllerLike_addOnReadyListener](callback) {
            return pipe(this[PauseableLike_isPaused], Broadcaster_addEventHandler(isPaused => {
                if (!isPaused) {
                    callback();
                }
            }), Disposable.addTo(this));
        },
        [EventListenerLike_notify](next) {
            const delegate = this[DelegatingEventListenerLike_delegate];
            if (this[SinkLike_isCompleted]) {
                raise("Broadcaster is completed");
            }
            else if (!this[FlowControllerLike_isReady]) {
                raise("Broadcaster is paused");
            }
            delegate[EventListenerLike_notify](next);
        },
    }));
    return (options) => (producer) => {
        const consumer = createPauseableConsumerBroadcaster(options);
        producer[EventSourceLike_subscribe](consumer);
        return consumer;
    };
})();
export default Producer_broadcast;
