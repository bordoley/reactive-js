/// <reference types="./Sink.createWithDelegate.d.ts" />
import { createInstanceFactory, mix, include, delegatingMixin, init, props, DelegatingLike_delegate } from '../../../__internal__/mixins.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_mixin from '../../../util/Disposable/__internal__/Disposable.mixin.mjs';

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

export { Sink_createWithDelegate as default };
