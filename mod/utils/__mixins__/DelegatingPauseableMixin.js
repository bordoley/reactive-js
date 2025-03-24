/// <reference types="./DelegatingPauseableMixin.d.ts" />

import { mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { none } from "../../functions.js";
import { PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, } from "../../utils.js";
const DelegatingPauseableMixin = 
/*@__PURE__*/ (() => {
    const DelegatingPauseableMixin_delegate = Symbol("DelegatingPauseableMixin_delegate");
    return mix(function DelegatingPauseableMixin(delegate) {
        this[DelegatingPauseableMixin_delegate] = delegate;
        return this;
    }, props({
        [DelegatingPauseableMixin_delegate]: none,
    }), proto({
        get [PauseableLike_isPaused]() {
            unsafeCast(this);
            return this[DelegatingPauseableMixin_delegate][PauseableLike_isPaused];
        },
        [PauseableLike_pause]() {
            this[DelegatingPauseableMixin_delegate][PauseableLike_pause]();
        },
        [PauseableLike_resume]() {
            this[DelegatingPauseableMixin_delegate][PauseableLike_resume]();
        },
    }));
})();
export default DelegatingPauseableMixin;
