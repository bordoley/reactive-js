/// <reference types="./WithLatestFromOperator.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { bind, none, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DisposableLike_dispose, EventListenerLike_notify, SinkLike_complete, } from "../../../utils.js";
import DelegatingLiftedSinkMixin, { DelegatingLiftedSinkLike_delegate, DelegatingLiftedSinkLike_onCompleted, } from "../../__mixins__/DelegatingLiftedSinkMixin.js";
import { LiftedSinkLike_subscription, } from "../LiftedSource.js";
export const create = /*@__PURE__*/ (() => {
    const WithLatestFromOperator_selector = Symbol("WithLatestFromOperator_selector");
    const WithLatestFromOperator_hasLatest = Symbol("WithLatestFromOperator_hasLatest");
    const WithLatestFromOperator_otherLatest = Symbol("WithLatestFromOperator_otherLatest");
    const WithLatestFromOperator_otherSubscription = Symbol("WithLatestFromOperator_otherSubscription");
    function onWithLatestFromOperatorOtherSubscriptionComplete() {
        if (!this[WithLatestFromOperator_hasLatest]) {
            this[SinkLike_complete]();
        }
    }
    function onOtherNotify(next) {
        this[WithLatestFromOperator_hasLatest] = true;
        this[WithLatestFromOperator_otherLatest] = next;
    }
    return mixInstanceFactory(include(DelegatingLiftedSinkMixin()), function WithLatestFromOperator(delegate, other, selector, addEventListener) {
        init(DelegatingLiftedSinkMixin(), this, delegate);
        this[WithLatestFromOperator_selector] = selector;
        const subscription = this[LiftedSinkLike_subscription];
        this[WithLatestFromOperator_otherSubscription] = pipe(other, addEventListener(subscription, bind(onOtherNotify, this)), Disposable.addTo(subscription), DisposableContainer.onComplete(bind(onWithLatestFromOperatorOtherSubscriptionComplete, this)));
        return this;
    }, props({
        [WithLatestFromOperator_hasLatest]: false,
        [WithLatestFromOperator_otherLatest]: none,
        [WithLatestFromOperator_selector]: none,
        [WithLatestFromOperator_otherSubscription]: none,
    }), proto({
        [DelegatingLiftedSinkLike_onCompleted]() {
            this[WithLatestFromOperator_otherSubscription][DisposableLike_dispose]();
            this[DelegatingLiftedSinkLike_delegate][SinkLike_complete]();
        },
        [EventListenerLike_notify](next) {
            const shouldEmit = this[WithLatestFromOperator_hasLatest];
            if (shouldEmit) {
                const v = this[WithLatestFromOperator_selector](next, this[WithLatestFromOperator_otherLatest]);
                this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](v);
            }
        },
    }));
})();
