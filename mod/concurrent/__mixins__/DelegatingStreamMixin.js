/// <reference types="./DelegatingStreamMixin.d.ts" />

import { include, init, mix } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import DelegatingDispatcherMixin from "./DelegatingDispatcherMixin.js";
import DelegatingReplayObservableMixin from "./DelegatingReplayObservableMixin.js";
const DelegatingStreamMixin = /*@__PURE__*/ (() => returns(mix(include(DelegatingDispatcherMixin(), DelegatingReplayObservableMixin()), function DelegatingStreamMixin(instance, delegate) {
    init(DelegatingReplayObservableMixin(), instance, delegate);
    init(DelegatingDispatcherMixin(), instance, delegate);
    return instance;
})))();
export default DelegatingStreamMixin;
