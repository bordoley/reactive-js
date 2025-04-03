/// <reference types="./DelegatingNonCompletingConsumerMixin.d.ts" />

import { include, init, mix } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import DelegatingConsumerMixin from "../__mixins__/DelegatingConsumerMixin.js";
import DelegatingNonCompletingSinkMixin from "./DelegatingNonCompletingSinkMixin.js";
const DelegatingNonCompletingConsumerMixin = 
/*@__PURE__*/ (() => returns(mix(include(DelegatingConsumerMixin(), DelegatingNonCompletingSinkMixin()), function DelegatingNonCompletingConsumerMixin(delegate) {
    init(DelegatingConsumerMixin(), this, delegate);
    init(DelegatingNonCompletingSinkMixin(), this, delegate);
    return this;
})))();
export default DelegatingNonCompletingConsumerMixin;
