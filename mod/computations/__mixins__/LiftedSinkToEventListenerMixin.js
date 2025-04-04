/// <reference types="./LiftedSinkToEventListenerMixin.d.ts" />

import { include, init, mix, props, proto, } from "../../__internal__/mixins.js";
import { bindMethod, none, pipe, returns } from "../../functions.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import { EventListenerLike_notify, SinkLike_complete, } from "../../utils.js";
export const LiftedSinkToEventListenerLike_liftedSink = Symbol("LiftedSinkToEventListenerLike_liftedSink");
const LiftedSinkToEventListenerMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(DelegatingDisposableMixin), function LiftedSinkToEventListenerMixin(delegate) {
        init(DelegatingDisposableMixin, this, delegate);
        this[LiftedSinkToEventListenerLike_liftedSink] = delegate;
        pipe(this, DisposableContainer.onComplete(bindMethod(delegate, SinkLike_complete)));
        return this;
    }, props({
        [LiftedSinkToEventListenerLike_liftedSink]: none,
    }), proto({
        [EventListenerLike_notify](next) {
            this[LiftedSinkToEventListenerLike_liftedSink][EventListenerLike_notify](next);
        },
    })));
})();
export default LiftedSinkToEventListenerMixin;
