/// <reference types="./DelegatingLiftedOperatorMixin.d.ts" />

import { mix, props, proto } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import { LiftedOperatorLike_complete, LiftedOperatorLike_isCompleted, LiftedOperatorLike_notify, LiftedOperatorLike_subscription, } from "../__internal__/LiftedSource.js";
export const DelegatingLiftedOperatorLike_delegate = Symbol("DelegatingLiftedOperatorLike_delegate");
export const DelegatingLiftedOperatorLike_onCompleted = Symbol("DelegatingLiftedOperatorLike_onCompleted");
const DelegatingLiftedOperatorMixin = 
/*@__PURE__*/ (() => {
    return returns(mix(function DelegatingLiftedOperatorMixin(delegate) {
        this[DelegatingLiftedOperatorLike_delegate] = delegate;
        this[LiftedOperatorLike_subscription] =
            delegate[LiftedOperatorLike_subscription];
        return this;
    }, props({
        [DelegatingLiftedOperatorLike_delegate]: none,
        [LiftedOperatorLike_isCompleted]: false,
        [LiftedOperatorLike_subscription]: none,
    }), proto({
        [DelegatingLiftedOperatorLike_onCompleted]() {
            this[DelegatingLiftedOperatorLike_delegate][LiftedOperatorLike_complete]();
        },
        [LiftedOperatorLike_notify](next) {
            this[DelegatingLiftedOperatorLike_delegate][LiftedOperatorLike_notify](next);
        },
        [LiftedOperatorLike_complete]() {
            this[LiftedOperatorLike_isCompleted] = true;
            this[DelegatingLiftedOperatorLike_onCompleted]();
        },
    })));
})();
export default DelegatingLiftedOperatorMixin;
