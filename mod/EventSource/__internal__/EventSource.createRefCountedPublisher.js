/// <reference types="./EventSource.createRefCountedPublisher.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
import { createInstanceFactory, include, init, mix, props, unsafeCast, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, } from "../../__internal__/types.js";
import { pipe } from "../../functions.js";
import { DisposableLike_dispose, EventListenerLike_isErrorSafe, EventPublisherLike_listenerCount, EventSourceLike_addEventListener, SinkLike_notify, } from "../../types.js";
import EventSource_createPublisher from "./EventSource.createPublisher.js";
const EventSource_createRefCountedPublisher = 
/*@__PURE__*/ (() => {
    const createRefCountedEventPublisherInstance = createInstanceFactory(mix(include(Disposable_delegatingMixin, Delegating_mixin()), function RefCountedEventPublisher(instance, delegate) {
        init(Disposable_delegatingMixin, instance, delegate);
        init(Delegating_mixin(), instance, delegate);
        return instance;
    }, props({}), {
        [EventListenerLike_isErrorSafe]: true,
        get [EventPublisherLike_listenerCount]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][EventPublisherLike_listenerCount];
        },
        [SinkLike_notify](next) {
            this[DelegatingLike_delegate][SinkLike_notify](next);
        },
        [EventSourceLike_addEventListener](listener) {
            this[DelegatingLike_delegate][EventSourceLike_addEventListener](listener);
            pipe(listener, Disposable_onDisposed(() => {
                if (this[EventPublisherLike_listenerCount] === 0) {
                    this[DisposableLike_dispose]();
                }
            }));
        },
    }));
    return () => {
        const delegate = EventSource_createPublisher();
        return createRefCountedEventPublisherInstance(delegate);
    };
})();
export default EventSource_createRefCountedPublisher;
