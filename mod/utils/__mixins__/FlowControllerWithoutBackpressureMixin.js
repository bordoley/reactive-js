/// <reference types="./FlowControllerWithoutBackpressureMixin.d.ts" />

import { mix, props, proto } from "../../__internal__/mixins.js";
import { FlowControllerLike_addOnReadyListener, FlowControllerLike_isReady, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
const FlowControllerWithoutBackpressureMixin = 
/*@__PURE__*/ (() => {
    return mix(function FlowControllerWithoutBackpressureMixin() {
        return this;
    }, props(), proto({
        [FlowControllerLike_isReady]: true,
        [FlowControllerLike_addOnReadyListener]() {
            return Disposable.disposed;
        },
    }));
})();
export default FlowControllerWithoutBackpressureMixin;
