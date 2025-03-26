/// <reference types="./SwitchAllSink.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { bind, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
import DelegatingLiftedSinkMixin, { DelegatingLiftedSinkLike_delegate, DelegatingLiftedSinkLike_onCompleted, } from "../../__mixins__/DelegatingLiftedSinkMixin.js";
export const create = /*@__PURE__*/ (() => {
    const SwitchAllSink_subscribeToInner = Symbol("SwitchAllSink_subscribeToInner");
    const SwitchAllSink_innerSubscription = Symbol("SwitchAllSink_innerSubscription");
    function onSwitchAllObserverInnerObservableComplete() {
        if (this[SinkLike_isCompleted]) {
            this[DelegatingLiftedSinkLike_delegate][SinkLike_complete]();
        }
    }
    return mixInstanceFactory(include(DelegatingLiftedSinkMixin()), function SwitchAllSink(delegate, subscribeToInner) {
        init(DelegatingLiftedSinkMixin(), this, delegate);
        this[SwitchAllSink_subscribeToInner] = subscribeToInner;
        return this;
    }, props({
        [SwitchAllSink_subscribeToInner]: none,
        [SwitchAllSink_innerSubscription]: Disposable.disposed,
    }), proto({
        [EventListenerLike_notify](next) {
            this[SwitchAllSink_innerSubscription][DisposableLike_dispose]();
            const delegate = this[DelegatingLiftedSinkLike_delegate];
            this[SwitchAllSink_innerSubscription] = pipe(next, this[SwitchAllSink_subscribeToInner](delegate), DisposableContainer.onComplete(bind(onSwitchAllObserverInnerObservableComplete, this)), Disposable.addTo(this));
        },
        [DelegatingLiftedSinkLike_onCompleted]() {
            if (this[SwitchAllSink_innerSubscription][DisposableLike_isDisposed]) {
                this[DelegatingLiftedSinkLike_delegate][SinkLike_complete]();
            }
        },
    }));
})();
