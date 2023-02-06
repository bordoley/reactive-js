/// <reference types="./DelegatingSink.create.d.ts" />
import { createInstanceFactory, mix, include, delegatingMixin, init, props, DelegatingLike_delegate } from '../../../__internal__/mixins.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';

const DelegateSink_create = 
/*@__PURE__*/ (() => createInstanceFactory(mix(include(Disposable_mixin, delegatingMixin()), function DelegatingSink(instance, delegate) {
    init(Disposable_mixin, instance);
    init(delegatingMixin(), instance, delegate);
    return instance;
}, props({}), {
    [SinkLike_notify](v) {
        this[DelegatingLike_delegate][SinkLike_notify](v);
    },
})))();

export { DelegateSink_create as default };
