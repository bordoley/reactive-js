/// <reference types="./DelegatingObserverMixin.d.ts" />

import { include, init, mix, props, } from "../../__internal__/mixins.js";
import { ObserverLike_notify } from "../../concurrent.js";
import { pipe, returns } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import ObserverMixin from "./ObserverMixin.js";
const DelegatingObserverMixin = /*@__PURE__*/ (() => returns(mix(include(ObserverMixin()), function DelegatingObserverMixin(instance, delegate) {
    init(ObserverMixin(), instance, delegate, delegate);
    pipe(instance, Disposable.addTo(delegate));
    return instance;
}, props(), {
    [ObserverLike_notify](_) { },
})))();
export default DelegatingObserverMixin;
