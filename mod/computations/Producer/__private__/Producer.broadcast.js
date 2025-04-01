/// <reference types="./Producer.broadcast.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { ReactiveSourceLike_subscribe, } from "../../../computations.js";
import { none, pipe, raise } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingEventListenerMixin, { DelegatingEventListenerLike_delegate, } from "../../../utils/__mixins__/DelegatingEventListenerMixin.js";
import DisposeOnCompleteSinkMixin from "../../../utils/__mixins__/DisposeOnCompleteSinkMixin.js";
import { BackPressureConfig_capacity, BackPressureConfig_strategy, EventListenerLike_notify, FlowControllerLike_addOnReadyListener, FlowControllerLike_isReady, SinkLike_isCompleted, ThrowBackpressureStrategy, } from "../../../utils.js";
import Broadcaster_addEventHandler from "../../Broadcaster/__private__/Broadcaster.addEventHandler.js";
import Broadcaster_create from "../../Broadcaster/__private__/Broadcaster.create.js";
import Broadcaster_createPauseable from "../../Broadcaster/__private__/Broadcaster.createPauseable.js";
const Producer_broadcast = /*@__PURE__*/ (() => {
    const EventListernToPauseableConsumer_mode = Symbol("EventListernToPauseableConsumer_mode");
    const createPauseableConsumer = mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingEventListenerMixin(), DisposeOnCompleteSinkMixin()), function EventListenerToPauseableConsumer(listener, mode) {
        init(DelegatingDisposableMixin, this, listener);
        init(DelegatingEventListenerMixin(), this, listener);
        init(DisposeOnCompleteSinkMixin(), this);
        this[EventListernToPauseableConsumer_mode] = mode;
        pipe(mode, Disposable.addTo(this), Broadcaster_addEventHandler(isPaused => {
            this[FlowControllerLike_isReady] = !isPaused;
        }), Disposable.addTo(this));
        return this;
    }, props({
        [EventListernToPauseableConsumer_mode]: none,
        [FlowControllerLike_isReady]: false,
    }), proto({
        [BackPressureConfig_strategy]: ThrowBackpressureStrategy,
        [BackPressureConfig_capacity]: MAX_SAFE_INTEGER,
        [FlowControllerLike_addOnReadyListener](callback) {
            return pipe(this[EventListernToPauseableConsumer_mode], Broadcaster_addEventHandler(isPaused => {
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
    return (options) => (producer) => Broadcaster_createPauseable(mode => Broadcaster_create(listener => {
        const consumer = createPauseableConsumer(listener, mode);
        producer[ReactiveSourceLike_subscribe](consumer);
    }), options);
})();
export default Producer_broadcast;
