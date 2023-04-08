/// <reference types="./Publisher.createRefCounted.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DelegatingLike_delegate, DisposableLike_dispose, } from "../../../__internal__/symbols.js";
import { pipe } from "../../../functions.js";
import { HotObservableLike_observerCount, ObservableLike_observe, } from "../../../rx.js";
import { EventListenerLike_notify } from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import HotObservable_delegatingMixin from "../../HotObservable/__internal__/HotObservable.delegatingMixin.js";
import Publisher_create from "./Publisher.create.js";
const Publisher_createRefCounted = /*@__PURE__*/ (() => {
    const createRefCountedPublisherInstance = createInstanceFactory(mix(include(Disposable_delegatingMixin(), HotObservable_delegatingMixin()), function RefCountedPublisher(instance, delegate) {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(HotObservable_delegatingMixin(), instance, delegate);
        return instance;
    }, props({}), {
        [EventListenerLike_notify](next) {
            this[DelegatingLike_delegate][EventListenerLike_notify](next);
        },
        [ObservableLike_observe](observer) {
            this[DelegatingLike_delegate][ObservableLike_observe](observer);
            pipe(observer, Disposable_onDisposed(() => {
                if (this[HotObservableLike_observerCount] === 0) {
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
