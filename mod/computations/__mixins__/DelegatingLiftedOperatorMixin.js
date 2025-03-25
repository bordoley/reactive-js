/// <reference types="./DelegatingLiftedOperatorMixin.d.ts" />

import { mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import { LiftedOperatorLike_complete, LiftedOperatorLike_isCompleted, LiftedOperatorLike_notify, } from "../__internal__/LiftedSource.js";
export const DelegatingLiftedOperatorLike_delegate = Symbol("DelegatingLiftedOperatorLike_delegate");
const DelegatingLiftedOperatorMixin = 
/*@__PURE__*/ (() => {
    return returns(mix(function LiftedOperatorMixin(delegate) {
        this[DelegatingLiftedOperatorLike_delegate] = delegate;
        return this;
    }, props({
        [DelegatingLiftedOperatorLike_delegate]: none,
    }), proto({
        get [LiftedOperatorLike_isCompleted]() {
            unsafeCast(this);
            return this[DelegatingLiftedOperatorLike_delegate][LiftedOperatorLike_isCompleted];
        },
        [LiftedOperatorLike_notify](next) {
            this[DelegatingLiftedOperatorLike_delegate][LiftedOperatorLike_notify](next);
        },
        [LiftedOperatorLike_complete]() {
            this[DelegatingLiftedOperatorLike_delegate][LiftedOperatorLike_complete]();
        },
    })));
})();
export default DelegatingLiftedOperatorMixin;
