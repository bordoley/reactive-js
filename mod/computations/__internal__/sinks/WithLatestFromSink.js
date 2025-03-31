/// <reference types="./WithLatestFromSink.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { bind, none, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DisposableLike_dispose, EventListenerLike_notify, SinkLike_complete, } from "../../../utils.js";
import DelegatingLiftedSinkMixin, { DelegatingLiftedSinkLike_delegate, DelegatingLiftedSinkLike_onCompleted, } from "../../__mixins__/DelegatingLiftedSinkMixin.js";
import { LiftedSinkLike_subscription, } from "../LiftedSource.js";
export const create = /*@__PURE__*/ (() => {
    const WithLatestFromSink_selector = Symbol("WithLatestFromSink_selector");
    const WithLatestFromSink_hasLatest = Symbol("WithLatestFromSink_hasLatest");
    const WithLatestFromSink_otherLatest = Symbol("WithLatestFromSink_otherLatest");
    const WithLatestFromSink_otherSubscription = Symbol("WithLatestFromSink_otherSubscription");
    function onWithLatestFromSinkOtherSubscriptionComplete() {
        if (!this[WithLatestFromSink_hasLatest]) {
            this[SinkLike_complete]();
        }
    }
    function onOtherNotify(next) {
        this[WithLatestFromSink_hasLatest] = true;
        this[WithLatestFromSink_otherLatest] = next;
    }
    return mixInstanceFactory(include(DelegatingLiftedSinkMixin()), function WithLatestFromSink(delegate, other, selector, addEventListener) {
        init(DelegatingLiftedSinkMixin(), this, delegate);
        this[WithLatestFromSink_selector] = selector;
        const subscription = this[LiftedSinkLike_subscription];
        this[WithLatestFromSink_otherSubscription] = pipe(other, addEventListener(subscription, bind(onOtherNotify, this)), Disposable.addTo(this), DisposableContainer.onComplete(bind(onWithLatestFromSinkOtherSubscriptionComplete, this)));
        return this;
    }, props({
        [WithLatestFromSink_hasLatest]: false,
        [WithLatestFromSink_otherLatest]: none,
        [WithLatestFromSink_selector]: none,
        [WithLatestFromSink_otherSubscription]: none,
    }), proto({
        [DelegatingLiftedSinkLike_onCompleted]() {
            this[WithLatestFromSink_otherSubscription][DisposableLike_dispose]();
        },
        [EventListenerLike_notify](next) {
            const shouldEmit = this[WithLatestFromSink_hasLatest];
            if (shouldEmit) {
                const v = this[WithLatestFromSink_selector](next, this[WithLatestFromSink_otherLatest]);
                this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](v);
            }
        },
    }));
})();
