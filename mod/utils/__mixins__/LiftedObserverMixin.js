/// <reference types="./LiftedObserverMixin.d.ts" />

import { mix, props } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
export const LiftedObserverLike_delegate = Symbol("LiftedObserverLike_delegate");
const LiftedObserverMixin = /*@__PURE__*/ (() => {
    return returns(mix(function LiftedObserverMixin(delegate) {
        this[LiftedObserverLike_delegate] = delegate;
        return this;
    }, props({
        [LiftedObserverLike_delegate]: none,
    })));
})();
export default LiftedObserverMixin;
