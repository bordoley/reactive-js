/// <reference types="./DelegatingCatchErrorSinkMixin.d.ts" />

import { include, init, mix } from "../../__internal__/mixins.js";
import { bindMethod, pipe, returns } from "../../functions.js";
import { DisposableLike_dispose, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
import * as DisposableContainer from "../DisposableContainer.js";
import DelegatingNonCompletingNonDisposingMixin from "./DelegatingNonCompletingNonDisposingMixin.js";
const DelegatingCatchErrorSinkMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(DelegatingNonCompletingNonDisposingMixin()), function DelegatingCatchErrorSinkMixin(delegate) {
        init(DelegatingNonCompletingNonDisposingMixin(), this, delegate);
        pipe(this, Disposable.addToContainer(delegate), DisposableContainer.onComplete(bindMethod(delegate, DisposableLike_dispose)));
        return this;
    }));
})();
export default DelegatingCatchErrorSinkMixin;
