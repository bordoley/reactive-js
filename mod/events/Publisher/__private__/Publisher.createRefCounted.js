/// <reference types="./Publisher.createRefCounted.d.ts" />

import { createInstanceFactory, include, init, mix, props, unsafeCast, } from "../../../__internal__/mixins.js";
import { EventListenerLike_isErrorSafe, EventSourceLike_addEventListener, PublisherLike_listenerCount, SinkLike_notify, } from "../../../events.js";
import { pipe } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingDisposableMixin, { DelegatingDisposableLike_delegate, } from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import Publisher_create from "./Publisher.create.js";
const Publisher_createRefCounted = 
/*@__PURE__*/ (() => {
    const createRefCountedEventPublisherInstance = createInstanceFactory(mix(include(DelegatingDisposableMixin()), function RefCountedEventPublisher(instance, delegate) {
        init(DelegatingDisposableMixin(), instance, delegate);
        return instance;
    }, props(), {
        [EventListenerLike_isErrorSafe]: true,
        get [PublisherLike_listenerCount]() {
            unsafeCast(this);
            return this[DelegatingDisposableLike_delegate][PublisherLike_listenerCount];
        },
        [SinkLike_notify](next) {
            this[DelegatingDisposableLike_delegate][SinkLike_notify](next);
        },
        [EventSourceLike_addEventListener](listener) {
            this[DelegatingDisposableLike_delegate][EventSourceLike_addEventListener](listener);
            pipe(listener, Disposable.onDisposed(() => {
                if (this[PublisherLike_listenerCount] === 0) {
                    this[DisposableLike_dispose]();
                }
            }));
        },
    }));
    return () => {
        const delegate = Publisher_create();
        return createRefCountedEventPublisherInstance(delegate);
    };
})();
export default Publisher_createRefCounted;
