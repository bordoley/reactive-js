/// <reference types="./Pauseable.delegatingMixin.d.ts" />

import { mix, props } from "../../../__internal__/mixins.js";
import { __DelegatingPauseableMixin_delegate } from "../../../__internal__/symbols.js";
import { PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, } from "../../../core.js";
import { none, unsafeCast } from "../../../functions.js";
const Pauseable_delegatingMixin = 
/*@__PURE__*/ (() => {
    return mix(function DelegatingSchedulerImplementationMixin(instance, delegate) {
        instance[__DelegatingPauseableMixin_delegate] = delegate;
        return instance;
    }, props({
        [__DelegatingPauseableMixin_delegate]: none,
    }), {
        get [PauseableLike_isPaused]() {
            unsafeCast(this);
            return this[__DelegatingPauseableMixin_delegate][PauseableLike_isPaused];
        },
        [PauseableLike_pause]() {
            this[__DelegatingPauseableMixin_delegate][PauseableLike_pause]();
        },
        [PauseableLike_resume]() {
            this[__DelegatingPauseableMixin_delegate][PauseableLike_resume]();
        },
    });
})();
export default Pauseable_delegatingMixin;
