/// <reference types="./Sink.keepMixin.d.ts" />
import { mix, include, init, props, DelegatingLike_delegate } from '../../../__internal__/mixins.mjs';
import { returns, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';

const Sink_keepMixin = 
/*@__PURE__*/ (() => {
    const KeepSinkMixin_predicate = Symbol("KeepSinkMixin_predicate");
    return returns(mix(include(Disposable_delegatingMixin()), function KeepSinkMixin(instance, delegate, predicate) {
        init(Disposable_delegatingMixin(), instance, delegate);
        instance[KeepSinkMixin_predicate] = predicate;
        return instance;
    }, props({
        [KeepSinkMixin_predicate]: none,
    }), {
        [SinkLike_notify](next) {
            if (this[KeepSinkMixin_predicate](next)) {
                this[DelegatingLike_delegate][SinkLike_notify](next);
            }
        },
    }));
})();

export { Sink_keepMixin as default };
