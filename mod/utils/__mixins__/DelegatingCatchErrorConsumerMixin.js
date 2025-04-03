/// <reference types="./DelegatingCatchErrorConsumerMixin.d.ts" />

import { include, init, mix } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import DelegatingConsumerMixin from "../__mixins__/DelegatingConsumerMixin.js";
import DelegatingCatchErrorSinkMixin from "./DelegatingCatchErrorSinkMixin.js";
const DelegatingCatchErrorConsumerMixin = 
/*@__PURE__*/ (() => returns(mix(include(DelegatingConsumerMixin(), DelegatingCatchErrorSinkMixin()), function DelegatingCatchErrorConsumerMixin(delegate) {
    init(DelegatingConsumerMixin(), this, delegate);
    init(DelegatingCatchErrorSinkMixin(), this, delegate);
    return this;
})))();
export default DelegatingCatchErrorConsumerMixin;
