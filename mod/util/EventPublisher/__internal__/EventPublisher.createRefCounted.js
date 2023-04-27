/// <reference types="./EventPublisher.createRefCounted.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DelegatingLike_delegate, } from "../../../__internal__/util.js";
import { pipe, unsafeCast } from "../../../functions.js";
import { DisposableLike_dispose, EventEmitterLike_addListener, EventListenerLike_isErrorSafe, EventListenerLike_notify, EventPublisherLike_listenerCount, ReplayableLike_buffer, } from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import EventPublisher_create from "./EventPublisher.create.js";
const EventPublisher_createRefCounted = /*@__PURE__*/ (() => {
    const createRefCountedEventPublisherInstance = createInstanceFactory(mix(include(Disposable_delegatingMixin, Delegating_mixin()), function RefCountedEventPublisher(instance, delegate) {
        init(Disposable_delegatingMixin, instance, delegate);
        init(Delegating_mixin(), instance, delegate);
        return instance;
    }, props({}), {
        [EventListenerLike_isErrorSafe]: true,
        get [ReplayableLike_buffer]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][ReplayableLike_buffer];
        },
        get [EventPublisherLike_listenerCount]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][EventPublisherLike_listenerCount];
        },
        [EventListenerLike_notify](next) {
            this[DelegatingLike_delegate][EventListenerLike_notify](next);
        },
        [EventEmitterLike_addListener](listener) {
            this[DelegatingLike_delegate][EventEmitterLike_addListener](listener);
            pipe(listener, Disposable_onDisposed(() => {
                if (this[EventPublisherLike_listenerCount] === 0) {
                    this[DisposableLike_dispose]();
                }
            }));
        },
    }));
    return (options) => {
        const delegate = EventPublisher_create(options);
        return createRefCountedEventPublisherInstance(delegate);
    };
})();
export default EventPublisher_createRefCounted;
