/// <reference types="./SwitchAllOperator.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { bind, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
import DelegatingLiftedOperatorMixin, { DelegatingLiftedSinkLike_delegate, DelegatingLiftedSinkLike_onCompleted, } from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import { LiftedSinkLike_subscription, } from "../LiftedSource.js";
export const create = /*@__PURE__*/ (() => {
    const SwitchAllOperator_subscribeToInner = Symbol("SwitchAllOperator_subscribeToInner");
    const SwitchAllOperator_innerSubscription = Symbol("SwitchAllOperator_innerSubscription");
    function onSwitchAllObserverInnerObservableComplete() {
        if (this[SinkLike_isCompleted]) {
            this[DelegatingLiftedSinkLike_delegate][SinkLike_complete]();
        }
    }
    return mixInstanceFactory(include(DelegatingLiftedOperatorMixin()), function SwitchAllOperator(delegate, subscribeToInner) {
        init(DelegatingLiftedOperatorMixin(), this, delegate);
        this[SwitchAllOperator_subscribeToInner] = subscribeToInner;
        return this;
    }, props({
        [SwitchAllOperator_subscribeToInner]: none,
        [SwitchAllOperator_innerSubscription]: Disposable.disposed,
    }), proto({
        [EventListenerLike_notify](next) {
            this[SwitchAllOperator_innerSubscription][DisposableLike_dispose]();
            const subscription = this[LiftedSinkLike_subscription];
            const delegate = this[DelegatingLiftedSinkLike_delegate];
            this[SwitchAllOperator_innerSubscription] = pipe(next, this[SwitchAllOperator_subscribeToInner](delegate), DisposableContainer.onComplete(bind(onSwitchAllObserverInnerObservableComplete, this)), Disposable.addTo(subscription));
        },
        [DelegatingLiftedSinkLike_onCompleted]() {
            if (this[SwitchAllOperator_innerSubscription][DisposableLike_isDisposed]) {
                this[DelegatingLiftedSinkLike_delegate][SinkLike_complete]();
            }
        },
    }));
})();
