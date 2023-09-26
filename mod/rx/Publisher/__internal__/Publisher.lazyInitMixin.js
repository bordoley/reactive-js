/// <reference types="./Publisher.lazyInitMixin.d.ts" />

import { mix, props } from "../../../__internal__/mixins.js";
import { none, pipe, returns, } from "../../../functions.js";
import { EventSourceLike_addEventListener, } from "../../../rx.js";
import * as Disposable from "../../../utils/Disposable.js";
import Publisher_create from "../../Publisher/__internal__/Publisher.create.js";
export const LazyInitEventMixin_eventPublisher = Symbol("LazyInitEventMixin_eventPublisher");
const EventSource_lazyInitPublisherMixin = /*@__PURE__*/ (() => {
    return returns(mix(function LazyInitEventPublisher(instance) {
        return instance;
    }, props({
        [LazyInitEventMixin_eventPublisher]: none,
    }), {
        [EventSourceLike_addEventListener](listener) {
            const publisher = this[LazyInitEventMixin_eventPublisher] ??
                (() => {
                    const publisher = pipe(Publisher_create(), Disposable.addTo(this));
                    this[LazyInitEventMixin_eventPublisher] = publisher;
                    return publisher;
                })();
            publisher[EventSourceLike_addEventListener](listener);
        },
    }));
})();
export default EventSource_lazyInitPublisherMixin;
