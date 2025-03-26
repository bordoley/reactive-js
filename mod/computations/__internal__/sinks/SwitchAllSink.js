/// <reference types="./SwitchAllSink.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { bind, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
import DelegatingLiftedSinkMixin, { DelegatingLiftedSinkLike_delegate, DelegatingLiftedSinkLike_onCompleted, } from "../../__mixins__/DelegatingLiftedSinkMixin.js";
import { LiftedSinkLike_subscription, } from "../LiftedSource.js";
export const create = /*@__PURE__*/ (() => {
    const SkipFirstSink_subscribeToInner = Symbol("SkipFirstSink_subscribeToInner");
    const SkipFirstSink_innerSubscription = Symbol("SkipFirstSink_innerSubscription");
    function onSwitchAllObserverInnerObservableComplete() {
        if (this[SinkLike_isCompleted]) {
            this[DelegatingLiftedSinkLike_delegate][SinkLike_complete]();
        }
    }
    return mixInstanceFactory(include(DelegatingLiftedSinkMixin()), function SkipFirstSink(delegate, subscribeToInner) {
        init(DelegatingLiftedSinkMixin(), this, delegate);
        this[SkipFirstSink_subscribeToInner] = subscribeToInner;
        return this;
    }, props({
        [SkipFirstSink_subscribeToInner]: none,
        [SkipFirstSink_innerSubscription]: Disposable.disposed,
    }), proto({
        [EventListenerLike_notify](next) {
            this[SkipFirstSink_innerSubscription][DisposableLike_dispose]();
            const subscription = this[LiftedSinkLike_subscription];
            const delegate = this[DelegatingLiftedSinkLike_delegate];
            this[SkipFirstSink_innerSubscription] = pipe(next, this[SkipFirstSink_subscribeToInner](delegate), DisposableContainer.onComplete(bind(onSwitchAllObserverInnerObservableComplete, this)), Disposable.addTo(subscription));
        },
        [DelegatingLiftedSinkLike_onCompleted]() {
            if (this[SkipFirstSink_innerSubscription][DisposableLike_isDisposed]) {
                this[DelegatingLiftedSinkLike_delegate][SinkLike_complete]();
            }
        },
    }));
})();
