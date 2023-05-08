/// <reference types="./EventPublisher.lazyInitMixin.d.ts" />

import { mix, props } from "../../../__internal__/mixins.js";
import { __LazyInitEventMixin_eventPublisher } from "../../../__internal__/symbols.js";
import { EventListenerLike_isErrorSafe, EventListenerLike_notify, EventSourceLike_addEventListener, } from "../../../core.js";
import { none, pipe, returns, } from "../../../functions.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import EventPublisher_create from "./EventPublisher.create.js";
const EventPublisher_lazyInitMixin = /*@__PURE__*/ (() => {
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
                    const publisher = pipe(EventPublisher_create(), Disposable_addTo(this));
                    this[__LazyInitEventMixin_eventPublisher] = publisher;
                    return publisher;
                })();
            publisher[EventSourceLike_addEventListener](listener);
        },
    }));
})();
export default EventPublisher_lazyInitMixin;
