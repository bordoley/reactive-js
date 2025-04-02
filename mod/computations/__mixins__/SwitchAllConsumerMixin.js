/// <reference types="./SwitchAllConsumerMixin.d.ts" />

import { include, init, mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { EventSourceLike_subscribe, } from "../../computations.js";
import { bind, none, pipe, returns } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingEventListenerMixin, { DelegatingEventListenerLike_delegate, } from "../../utils/__mixins__/DelegatingEventListenerMixin.js";
import FlowControllerWithoutBackpressureMixin from "../../utils/__mixins__/FlowControllerWithoutBackpressureMixin.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
const SwitchAllConsumerMixin = /*@__PURE__*/ (() => {
    const SwitchAllConsumer_createDelegatingNotifyOnlyNonCompletingNonDisposing = Symbol("SwitchAllConsumer_createDelegatingNotifyOnlyNonCompletingNonDisposing");
    const SwitchAllConsumer_innerSubscription = Symbol("SwitchAllConsumer_innerSubscription");
    const SwitchAllConsumer_isCompleted = Symbol("SwitchAllConsumer_isCompleted");
    function onSwitchAllConsumerInnerSourceComplete() {
        if (this[SinkLike_isCompleted]) {
            this[DelegatingEventListenerLike_delegate][SinkLike_complete]();
        }
    }
    return returns(mix(include(DelegatingDisposableMixin, DelegatingEventListenerMixin(), FlowControllerWithoutBackpressureMixin), function SwitchAllConsumerMixin(delegate, createDelegatingNotifyOnlyNonCompletingNonDisposing) {
        init(DelegatingDisposableMixin, this, delegate);
        init(DelegatingEventListenerMixin(), this, delegate);
        init(FlowControllerWithoutBackpressureMixin, this);
        this[SwitchAllConsumer_createDelegatingNotifyOnlyNonCompletingNonDisposing] = createDelegatingNotifyOnlyNonCompletingNonDisposing;
        return this;
    }, props({
        [SwitchAllConsumer_createDelegatingNotifyOnlyNonCompletingNonDisposing]: none,
        [SwitchAllConsumer_innerSubscription]: Disposable.disposed,
        [SwitchAllConsumer_isCompleted]: false,
    }), proto({
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return (this[SwitchAllConsumer_isCompleted] ||
                this[DelegatingEventListenerLike_delegate][SinkLike_isCompleted]);
        },
        [EventListenerLike_notify](next) {
            if (this[SinkLike_isCompleted]) {
                return;
            }
            this[SwitchAllConsumer_innerSubscription][DisposableLike_dispose]();
            const delegate = this[DelegatingEventListenerLike_delegate];
            const delegatingNotifyOnlyNonCompletingNonDisposing = pipe(this[SwitchAllConsumer_createDelegatingNotifyOnlyNonCompletingNonDisposing](delegate), DisposableContainer.onComplete(bind(onSwitchAllConsumerInnerSourceComplete, this)), Disposable.addTo(this));
            next[EventSourceLike_subscribe](delegatingNotifyOnlyNonCompletingNonDisposing);
            this[SwitchAllConsumer_innerSubscription] =
                delegatingNotifyOnlyNonCompletingNonDisposing;
        },
        [SinkLike_complete]() {
            const isCompleted = this[SinkLike_isCompleted];
            this[SwitchAllConsumer_isCompleted] = true;
            const innerSubscriptionIsDispsoed = this[SwitchAllConsumer_innerSubscription][DisposableLike_isDisposed];
            if (!isCompleted && innerSubscriptionIsDispsoed) {
                this[DelegatingEventListenerLike_delegate][SinkLike_complete]();
            }
        },
    })));
})();
export default SwitchAllConsumerMixin;
