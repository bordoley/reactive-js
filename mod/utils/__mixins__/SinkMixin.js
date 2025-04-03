/// <reference types="./SinkMixin.d.ts" />

import { include, mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { none, pipe, returns } from "../../functions.js";
import { EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import * as DisposableContainer from "../DisposableContainer.js";
import FlowControllerQueueMixin from "./FlowControllerQueueMixin.js";
export const SinkMixinLike_doNotify = Symbol("SinkMixinLike_doNotify");
export const SinkMixinLike_doComplete = Symbol("SinkMixinLike_doComplete");
export const SinkMixinLike_delegate = Symbol("SinkMixinLike_delegate");
export const SinkMixinLike_isCompleted = Symbol("SinkMixinLike_isCompleted");
const SinkMixin = /*@__PURE__*/ (() => {
    function onSinkDisposed() {
        this[SinkMixinLike_isCompleted] = true;
    }
    return returns(mix(include(FlowControllerQueueMixin()), function SinkMixin(delegate) {
        this[SinkMixinLike_delegate] = delegate;
        pipe(this, DisposableContainer.onDisposed(onSinkDisposed));
        return this;
    }, props({
        [SinkMixinLike_isCompleted]: false,
        [SinkMixinLike_delegate]: none,
    }), proto({
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return (this[SinkMixinLike_isCompleted] ||
                this[SinkMixinLike_delegate][SinkLike_isCompleted]);
        },
        [EventListenerLike_notify](next) {
            this[SinkMixinLike_doNotify](next);
        },
        [SinkLike_complete]() {
            const isCompleted = this[SinkMixinLike_isCompleted];
            this[SinkMixinLike_isCompleted] = true;
            if (isCompleted) {
                this[SinkMixinLike_doComplete]();
            }
        },
        [SinkMixinLike_doNotify](next) {
            this[SinkMixinLike_delegate][EventListenerLike_notify](next);
        },
        [SinkMixinLike_doComplete]() {
            this[SinkMixinLike_delegate][SinkLike_complete]();
        },
    })));
})();
export default SinkMixin;
