/// <reference types="./DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin.d.ts" />

import { include, init, mix } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import DelegatingSinkMixin from "../__mixins__/DelegatingSinkMixin.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
import DisposeOnCompleteSinkMixin from "./DisposeOnCompleteSinkMixin.js";
const DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin = /*@__PURE__*/ (() => returns(mix(include(DisposableMixin, DelegatingSinkMixin(), DisposeOnCompleteSinkMixin()), function NonDisposingDelegatingSink(delegate) {
    init(DisposableMixin, this);
    init(DelegatingSinkMixin(), this, delegate);
    init(DisposeOnCompleteSinkMixin(), this);
    return this;
})))();
export default DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin;
