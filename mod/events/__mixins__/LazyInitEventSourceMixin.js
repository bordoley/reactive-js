/// <reference types="./LazyInitEventSourceMixin.d.ts" />

import { mix, props } from "../../__internal__/mixins.js";
import { EventSourceLike_addEventListener, } from "../../events.js";
import { none, pipe, returns } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as Publisher from "../Publisher.js";
export const LazyInitEventSourceLike_publisher = Symbol("LazyInitEventSourceLike_publisher");
const LazyInitEventSourceMixin = /*@__PURE__*/ (() => {
    return returns(mix(function LazyInitEventSourceMixin(instance) {
        return instance;
    }, props({
        [LazyInitEventSourceLike_publisher]: none,
    }), {
        [EventSourceLike_addEventListener](listener) {
            const publisher = this[LazyInitEventSourceLike_publisher] ??
                (() => {
                    const publisher = pipe(Publisher.create(), Disposable.addTo(this));
                    this[LazyInitEventSourceLike_publisher] = publisher;
                    return publisher;
                })();
            publisher[EventSourceLike_addEventListener](listener);
        },
    }));
})();
export default LazyInitEventSourceMixin;
