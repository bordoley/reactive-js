/// <reference types="./Publisher.createRefCounted.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DelegatingLike_delegate, DisposableLike_dispose, } from "../../../__internal__/symbols.js";
import { pipe } from "../../../functions.js";
import { EventListenerLike_notify, MulticastObservableLike_observerCount, ObservableLike_observe, } from "../../../rx.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import MulticastObservable_delegatingMixin from "../../MulticastObservable/__internal__/MulticastObservable.delegatingMixin.js";
import Publisher_create from "./Publisher.create.js";
const Publisher_createRefCounted = /*@__PURE__*/ (() => {
    const createRefCountedPublisherInstance = createInstanceFactory(mix(include(MulticastObservable_delegatingMixin()), function RefCountedPublisher(instance, delegate) {
        init(MulticastObservable_delegatingMixin(), instance, delegate);
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
