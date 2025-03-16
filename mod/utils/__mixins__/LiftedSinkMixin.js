/// <reference types="./LiftedSinkMixin.d.ts" />

import { include, init, mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { bindMethod, pipe, returns } from "../../functions.js";
import { SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import * as DisposableContainer from "../DisposableContainer.js";
import LiftedEventListenerMixin, { LiftedEventListenerLike_delegate, } from "./LiftedEventListenerMixin.js";
export const LiftedSinkLike_complete = Symbol("LiftedSinkLike_complete");
export const LiftedSinkLike_completeDelegate = Symbol("LiftedSinkLike_complete");
const LiftedSinkMixin = /*@__PURE__*/ (() => {
    const LiftedSinkMixin_isCompleted = Symbol("LiftedSinkMixin_isCompleted");
    return returns(mix(include(LiftedEventListenerMixin()), function LiftedSinkMixin(delegate) {
        init(LiftedEventListenerMixin(), this, delegate);
        pipe(this, DisposableContainer.onDisposed(bindMethod(this, SinkLike_complete)));
        return this;
    }, props({
        [LiftedSinkMixin_isCompleted]: false,
    }), proto({
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return this[LiftedSinkMixin_isCompleted];
        },
        [LiftedSinkLike_completeDelegate]() {
            // We always want to call SinkLike_complete to ensure
            // cleanup code is invoked.
            this[LiftedEventListenerLike_delegate][SinkLike_complete]();
        },
        [LiftedSinkLike_complete]() {
            this[LiftedSinkLike_completeDelegate]();
        },
        [SinkLike_complete]() {
            const isCompleted = this[SinkLike_isCompleted];
            if (isCompleted) {
                return;
            }
            this[LiftedSinkLike_complete]();
        },
    })));
})();
export default LiftedSinkMixin;
