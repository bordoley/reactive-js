/// <reference types="./DelegatingNonCompletingSinkMixin.d.ts" />

import { include, init, mix } from "../../__internal__/mixins.js";
import { pipe, returns } from "../../functions.js";
import * as Disposable from "../Disposable.js";
import DelegatingNonCompletingNonDisposingMixin from "./DelegatingNonCompletingNonDisposingMixin.js";
const DelegatingNonCompletingSinkMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(DelegatingNonCompletingNonDisposingMixin()), function DelegatingNonCompletingSinkMixin(delegate) {
        init(DelegatingNonCompletingNonDisposingMixin(), this, delegate);
        pipe(this, Disposable.addTo(delegate));
        return this;
    }));
})();
export default DelegatingNonCompletingSinkMixin;
