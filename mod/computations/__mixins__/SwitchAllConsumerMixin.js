/// <reference types="./SwitchAllConsumerMixin.d.ts" />

import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { include, init, mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { SourceLike_subscribe } from "../../computations.js";
import { bind, none, pipe, returns } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import { BackPressureConfig_capacity, BackPressureConfig_strategy, DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, FlowControllerLike_addOnReadyListener, FlowControllerLike_isReady, OverflowBackpressureStrategy, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
const SwitchAllConsumerMixin = /*@__PURE__*/ (() => {
    const SwitchAllConsumer_createDelegatingNotifyOnlyNonCompletingNonDisposing = Symbol("SwitchAllConsumer_createDelegatingNotifyOnlyNonCompletingNonDisposing");
    const SwitchAllConsumer_innerSubscription = Symbol("SwitchAllConsumer_innerSubscription");
    const SwitchAllConsumer_isCompleted = Symbol("SwitchAllConsumer_isCompleted");
    const SwitchAllConsumer_delegate = Symbol("SwitchAllConsumer_delegate");
    function onSwitchAllConsumerInnerSourceComplete() {
        if (this[SinkLike_isCompleted]) {
            this[SwitchAllConsumer_delegate][SinkLike_complete]();
        }
    }
    return returns(mix(include(DelegatingDisposableMixin), function SwitchAllConsumerMixin(delegate, createDelegatingNotifyOnlyNonCompletingNonDisposing) {
        init(DelegatingDisposableMixin, this, delegate);
        this[SwitchAllConsumer_createDelegatingNotifyOnlyNonCompletingNonDisposing] = createDelegatingNotifyOnlyNonCompletingNonDisposing;
        this[SwitchAllConsumer_delegate] = delegate;
        return this;
    }, props({
        [SwitchAllConsumer_createDelegatingNotifyOnlyNonCompletingNonDisposing]: none,
        [SwitchAllConsumer_innerSubscription]: Disposable.disposed,
        [SwitchAllConsumer_delegate]: none,
        [SwitchAllConsumer_isCompleted]: false,
    }), proto({
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return (this[SwitchAllConsumer_isCompleted] ||
                this[SwitchAllConsumer_delegate][SinkLike_isCompleted]);
        },
        [FlowControllerLike_isReady]: true,
        [BackPressureConfig_strategy]: OverflowBackpressureStrategy,
        [BackPressureConfig_capacity]: MAX_SAFE_INTEGER,
        [FlowControllerLike_addOnReadyListener]() {
            return Disposable.disposed;
        },
        [EventListenerLike_notify](next) {
            if (this[SinkLike_isCompleted]) {
                return;
            }
            this[SwitchAllConsumer_innerSubscription][DisposableLike_dispose]();
            const delegate = this[SwitchAllConsumer_delegate];
            const delegatingNotifyOnlyNonCompletingNonDisposing = pipe(this[SwitchAllConsumer_createDelegatingNotifyOnlyNonCompletingNonDisposing](delegate), DisposableContainer.onComplete(bind(onSwitchAllConsumerInnerSourceComplete, this)), Disposable.addTo(this));
            next[SourceLike_subscribe](delegatingNotifyOnlyNonCompletingNonDisposing);
            this[SwitchAllConsumer_innerSubscription] =
                delegatingNotifyOnlyNonCompletingNonDisposing;
        },
        [SinkLike_complete]() {
            const isCompleted = this[SinkLike_isCompleted];
            this[SwitchAllConsumer_isCompleted] = true;
            const innerSubscriptionIsDispsoed = this[SwitchAllConsumer_innerSubscription][DisposableLike_isDisposed];
            if (!isCompleted && innerSubscriptionIsDispsoed) {
                this[SwitchAllConsumer_delegate][SinkLike_complete]();
            }
        },
    })));
})();
export default SwitchAllConsumerMixin;
