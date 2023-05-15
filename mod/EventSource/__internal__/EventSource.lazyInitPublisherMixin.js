/// <reference types="./EventSource.lazyInitPublisherMixin.d.ts" />

import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import { mix, props } from "../../__internal__/mixins.js";
import { __LazyInitEventMixin_eventPublisher } from "../../__internal__/symbols.js";
import { none, pipe, returns } from "../../functions.js";
import { EventListenerLike_isErrorSafe, EventListenerLike_notify, EventSourceLike_addEventListener, } from "../../types.js";
import EventSource_createPublisher from "./EventSource.createPublisher.js";
const EventSource_lazyInitPublisherMixin = /*@__PURE__*/ (() => {
    return returns(mix(function LazyInitEventPublisher(instance) {
        return instance;
    }, props({
        [__LazyInitEventMixin_eventPublisher]: none,
    }), {
        [EventListenerLike_isErrorSafe]: true,
        [EventListenerLike_notify](event) {
            this[__LazyInitEventMixin_eventPublisher]?.[EventListenerLike_notify](event);
        },
        [EventSourceLike_addEventListener](listener) {
            const publisher = this[__LazyInitEventMixin_eventPublisher] ??
                (() => {
                    const publisher = pipe(EventSource_createPublisher(), Disposable_addTo(this));
                    this[__LazyInitEventMixin_eventPublisher] = publisher;
                    return publisher;
                })();
            publisher[EventSourceLike_addEventListener](listener);
        },
    }));
})();
export default EventSource_lazyInitPublisherMixin;
