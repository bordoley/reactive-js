/// <reference types="./DelegatingObserverMixin.d.ts" />

import { include, init, mix, props, } from "../../__internal__/mixins.js";
import { pipe, returns } from "../../functions.js";
import * as Disposable from "../Disposable.js";
import ObserverMixin, { ObserverMixinBaseLike_notify, } from "./ObserverMixin.js";
const DelegatingObserverMixin = /*@__PURE__*/ (() => returns(mix(include(ObserverMixin()), function DelegatingObserverMixin(delegate) {
    init(ObserverMixin(), this, delegate, delegate);
    pipe(this, Disposable.addTo(delegate));
    return this;
}, props(), {
    [ObserverMixinBaseLike_notify](_) {
        return false;
    },
})))();
export default DelegatingObserverMixin;
