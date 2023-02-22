/// <reference types="./Sink.createWithDelegate.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { SinkLike_notify } from "../../../rx.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
const Sink_createWithDelegate = 
/*@__PURE__*/ (() => createInstanceFactory(mix(include(Disposable_mixin, delegatingMixin()), function DelegatingSink(instance, delegate) {
    init(Disposable_mixin, instance);
    init(delegatingMixin(), instance, delegate);
    return instance;
}, props({}), {
    [SinkLike_notify](v) {
        this[DelegatingLike_delegate][SinkLike_notify](v);
    },
})))();
export default Sink_createWithDelegate;
