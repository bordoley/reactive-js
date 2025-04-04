/// <reference types="./SwitchAllConsumerMixin.d.ts" />

import { include, init, mix, props, proto, } from "../../__internal__/mixins.js";
import { EventSourceLike_subscribe, } from "../../computations.js";
import { bind, none, pipe, returns } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import { DelegatingEventListenerLike_delegate } from "../../utils/__mixins__/DelegatingEventListenerMixin.js";
import DelegatingNonCompletingSinkMixin from "../../utils/__mixins__/DelegatingNonCompletingSinkMixin.js";
import FlowControllerWithoutBackpressureMixin from "../../utils/__mixins__/FlowControllerWithoutBackpressureMixin.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
const SwitchAllConsumerMixin = /*@__PURE__*/ (() => {
    const SwitchAllConsumer_createDelegatingNonCompleting = Symbol("SwitchAllConsumer_createDelegatingNonCompleting");
    const SwitchAllConsumer_innerSubscription = Symbol("SwitchAllConsumer_innerSubscription");
    function onSwitchAllConsumerInnerSourceComplete() {
        if (this[SinkLike_isCompleted]) {
            this[DelegatingEventListenerLike_delegate][SinkLike_complete]();
        }
    }
    return returns(mix(include(FlowControllerWithoutBackpressureMixin, DelegatingNonCompletingSinkMixin()), function SwitchAllConsumerMixin(delegate, createDelegatingNonCompleting) {
        init(FlowControllerWithoutBackpressureMixin, this);
        init(DelegatingNonCompletingSinkMixin(), this, delegate);
        this[SwitchAllConsumer_createDelegatingNonCompleting] =
            createDelegatingNonCompleting;
        pipe(this, DisposableContainer.onComplete(() => {
            const innerSubscriptionIsDispsoed = this[SwitchAllConsumer_innerSubscription][DisposableLike_isDisposed];
            if (innerSubscriptionIsDispsoed) {
                delegate[SinkLike_complete]();
            }
        }));
        return this;
    }, props({
        [SwitchAllConsumer_createDelegatingNonCompleting]: none,
        [SwitchAllConsumer_innerSubscription]: Disposable.disposed,
    }), proto({
        [EventListenerLike_notify](next) {
            if (this[SinkLike_isCompleted]) {
                return;
            }
            this[SwitchAllConsumer_innerSubscription][DisposableLike_dispose]();
            const delegate = this[DelegatingEventListenerLike_delegate];
            const delegatingNotifyOnlyNonCompletingNonDisposing = pipe(this[SwitchAllConsumer_createDelegatingNonCompleting](delegate), DisposableContainer.onComplete(bind(onSwitchAllConsumerInnerSourceComplete, this)));
            next[EventSourceLike_subscribe](delegatingNotifyOnlyNonCompletingNonDisposing);
            this[SwitchAllConsumer_innerSubscription] =
                delegatingNotifyOnlyNonCompletingNonDisposing;
        },
    })));
})();
export default SwitchAllConsumerMixin;
