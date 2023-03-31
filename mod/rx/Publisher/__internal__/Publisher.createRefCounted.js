/// <reference types="./Publisher.createRefCounted.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DelegatingLike_delegate, DisposableLike_dispose, } from "../../../__internal__/symbols.js";
import { pipe, unsafeCast } from "../../../functions.js";
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, PublisherLike_publish, } from "../../../rx.js";
import { CollectionLike_count, IndexedLike_get } from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import Publisher_create from "./Publisher.create.js";
const Publisher_createRefCounted = /*@__PURE__*/ (() => {
    const createRefCountedPublisherInstance = createInstanceFactory(mix(include(Disposable_delegatingMixin()), function RefCountedPublisher(instance, delegate) {
        init(Disposable_delegatingMixin(), instance, delegate);
        return instance;
    }, props({}), {
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        get [CollectionLike_count]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][CollectionLike_count];
        },
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][MulticastObservableLike_observerCount];
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][MulticastObservableLike_replay];
        },
        [IndexedLike_get](index) {
            return this[DelegatingLike_delegate][IndexedLike_get](index);
        },
        [PublisherLike_publish](next) {
            this[DelegatingLike_delegate][PublisherLike_publish](next);
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
