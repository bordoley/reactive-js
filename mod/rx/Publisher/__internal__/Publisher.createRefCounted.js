/// <reference types="./Publisher.createRefCounted.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { pipe } from "../../../functions.js";
import { MulticastObservableLike_observerCount, ObservableLike_observe, } from "../../../rx.js";
import { DisposableLike_dispose, EventListenerLike_notify, } from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import MulticastObservable_delegatingMixin from "../../MulticastObservable/__internal__/MulticastObservable.delegatingMixin.js";
import Publisher_create from "./Publisher.create.js";
const Publisher_createRefCounted = /*@__PURE__*/ (() => {
    const createRefCountedPublisherInstance = createInstanceFactory(mix(include(Disposable_delegatingMixin, MulticastObservable_delegatingMixin(), delegatingMixin()), function RefCountedPublisher(instance, delegate) {
        init(Disposable_delegatingMixin, instance, delegate);
        init(MulticastObservable_delegatingMixin(), instance, delegate);
        init(delegatingMixin(), instance, delegate);
        return instance;
    }, props({}), {
        [EventListenerLike_notify](next) {
            this[DelegatingLike_delegate][EventListenerLike_notify](next);
        },
        [ObservableLike_observe](observer) {
            this[DelegatingLike_delegate][ObservableLike_observe](observer);
            pipe(observer, Disposable_onDisposed(() => {
                if (this[MulticastObservableLike_observerCount] === 0) {
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
