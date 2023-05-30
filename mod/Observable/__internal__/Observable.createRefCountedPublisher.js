/// <reference types="./Observable.createRefCountedPublisher.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
import ReplayObservable_delegatingMixin from "../../ReplayObservable/__internal__/ReplayObservable.delegatingMixin.js";
import { createInstanceFactory, include, init, mix, props, unsafeCast, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, } from "../../__internal__/types.js";
import { pipe } from "../../functions.js";
import { DisposableLike_dispose, EventListenerLike_isErrorSafe, ObservableLike_observe, PublisherLike_observerCount, SinkLike_notify, } from "../../types.js";
import Observable_createPublisher from "./Observable.createPublisher.js";
const Observable_createRefCountedPublisher = 
/*@__PURE__*/ (() => {
    const createRefCountedPublisherInstance = createInstanceFactory(mix(include(Disposable_delegatingMixin, ReplayObservable_delegatingMixin(), Delegating_mixin()), function RefCountedPublisher(instance, delegate) {
        init(Disposable_delegatingMixin, instance, delegate);
        init(ReplayObservable_delegatingMixin(), instance, delegate);
        init(Delegating_mixin(), instance, delegate);
        return instance;
    }, props({}), {
        get [PublisherLike_observerCount]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][PublisherLike_observerCount];
        },
        [EventListenerLike_isErrorSafe]: true,
        [SinkLike_notify](next) {
            this[DelegatingLike_delegate][SinkLike_notify](next);
        },
        [ObservableLike_observe](observer) {
            this[DelegatingLike_delegate][ObservableLike_observe](observer);
            pipe(observer, Disposable_onDisposed(() => {
                if (this[PublisherLike_observerCount] === 0) {
                    this[DisposableLike_dispose]();
                }
            }));
        },
    }));
    return (options) => {
        const delegate = Observable_createPublisher(options);
        return createRefCountedPublisherInstance(delegate);
    };
})();
export default Observable_createRefCountedPublisher;
