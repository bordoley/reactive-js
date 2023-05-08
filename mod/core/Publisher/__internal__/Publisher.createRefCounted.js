/// <reference types="./Publisher.createRefCounted.d.ts" />

import { DelegatingLike_delegate, } from "../../../__internal__/core.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DisposableLike_dispose, EventListenerLike_isErrorSafe, EventListenerLike_notify, ObservableLike_observe, PublisherLike_observerCount, } from "../../../core.js";
import Delegating_mixin from "../../../core/Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../../core/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_onDisposed from "../../../core/Disposable/__internal__/Disposable.onDisposed.js";
import { pipe, unsafeCast } from "../../../functions.js";
import MulticastObservable_delegatingMixin from "../../MulticastObservable/__internal__/MulticastObservable.delegatingMixin.js";
import Publisher_create from "./Publisher.create.js";
const Publisher_createRefCounted = /*@__PURE__*/ (() => {
    const createRefCountedPublisherInstance = createInstanceFactory(mix(include(Disposable_delegatingMixin, MulticastObservable_delegatingMixin(), Delegating_mixin()), function RefCountedPublisher(instance, delegate) {
        init(Disposable_delegatingMixin, instance, delegate);
        init(MulticastObservable_delegatingMixin(), instance, delegate);
        init(Delegating_mixin(), instance, delegate);
        return instance;
    }, props({}), {
        get [PublisherLike_observerCount]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][PublisherLike_observerCount];
        },
        [EventListenerLike_isErrorSafe]: true,
        [EventListenerLike_notify](next) {
            this[DelegatingLike_delegate][EventListenerLike_notify](next);
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
        const delegate = Publisher_create(options);
        return createRefCountedPublisherInstance(delegate);
    };
})();
export default Publisher_createRefCounted;
