/// <reference types="./DelegatingNotifyOnlyNonCompletingNonDisposingConsumer.d.ts" />

import { include, init, mix } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import DelegatingConsumerMixin from "../__mixins__/DelegatingConsumerMixin.js";
import DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin from "./DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin.js";
const DelegatingNotifyOnlyNonCompletingNonDisposingConsumer = /*@__PURE__*/ (() => returns(mix(include(DelegatingConsumerMixin(), DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin()), function NonDisposingDelegatingConsumer(delegate) {
    init(DelegatingConsumerMixin(), this, delegate);
    init(DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin(), this, delegate);
    return this;
})))();
export default DelegatingNotifyOnlyNonCompletingNonDisposingConsumer;
