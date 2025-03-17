/// <reference types="./KeepMixin.d.ts" />

import { mix, props } from "../../../__internal__/mixins.js";
import { none, returns } from "../../../functions.js";
import { LiftedEventListenerLike_notify, LiftedEventListenerLike_notifyDelegate, } from "../LiftedEventListenerMixin.js";
const KeepMixin = /*@__PURE__*/ (() => {
    const KeepMixin_predicate = Symbol("KeepMixin_predicate");
    return returns(mix(function KeepMixin(predicate) {
        this[KeepMixin_predicate] = predicate;
        return this;
    }, props({
        [KeepMixin_predicate]: none,
    }), {
        [LiftedEventListenerLike_notify](next) {
            const shouldNotify = this[KeepMixin_predicate](next);
            if (shouldNotify) {
                this[LiftedEventListenerLike_notifyDelegate](next);
            }
        },
    }));
})();
export default KeepMixin;
