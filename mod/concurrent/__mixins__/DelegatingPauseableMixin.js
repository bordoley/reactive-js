/// <reference types="./DelegatingPauseableMixin.d.ts" />

import { mix, props, unsafeCast } from "../../__internal__/mixins.js";
import { PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, } from "../../concurrent.js";
import { none } from "../../functions.js";
const DelegatingPauseableMixin = /*@__PURE__*/ (() => {
    const DelegatingPauseableMixin_delegate = Symbol("DelegatingPauseableMixin_delegate");
    return mix(function DelegatingPauseableMixin(instance, delegate) {
        instance[DelegatingPauseableMixin_delegate] = delegate;
        return instance;
    }, props({
        [DelegatingPauseableMixin_delegate]: none,
    }), {
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
    });
})();
export default DelegatingPauseableMixin;
