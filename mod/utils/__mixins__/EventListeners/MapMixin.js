/// <reference types="./MapMixin.d.ts" />

import { mix, props } from "../../../__internal__/mixins.js";
import { none, returns } from "../../../functions.js";
import { LiftedEventListenerLike_notify, LiftedEventListenerLike_notifyDelegate, } from "../LiftedEventListenerMixin.js";
const MapMixin = /*@__PURE__*/ (() => {
    const MapMixin_selector = Symbol("MapMixin_selector");
    return returns(mix(function MapMixin(selector) {
        this[MapMixin_selector] = selector;
        return this;
    }, props({
        [MapMixin_selector]: none,
    }), {
        [LiftedEventListenerLike_notify](next) {
            const mapped = this[MapMixin_selector](next);
            this[LiftedEventListenerLike_notifyDelegate](mapped);
        },
    }));
})();
export default MapMixin;
