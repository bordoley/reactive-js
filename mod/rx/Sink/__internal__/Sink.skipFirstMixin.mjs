/// <reference types="./Sink.skipFirstMixin.d.ts" />
import { mix, include, init, props, DelegatingLike_delegate } from '../../../__internal__/mixins.mjs';
import { returns } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_delegatingMixin from '../../../util/Disposable/__internal__/Disposable.delegatingMixin.mjs';

const Sink_skipFirstMixin = 
/*@__PURE__*/ (() => {
    const SkipFirstSinkMixin_skipCount = Symbol("SkipFirstSinkMixin_skipCount");
    const SkipFirstSinkMixin_count = Symbol("SkipFirstSinkMixin_count");
    return returns(mix(include(Disposable_delegatingMixin()), function SkipFirstSinkMixin(instance, delegate, skipCount) {
        init(Disposable_delegatingMixin(), instance, delegate);
        instance[SkipFirstSinkMixin_skipCount] = skipCount;
        return instance;
    }, props({
        [SkipFirstSinkMixin_skipCount]: 0,
        [SkipFirstSinkMixin_count]: 0,
    }), {
        [SinkLike_notify](next) {
            this[SkipFirstSinkMixin_count]++;
            if (this[SkipFirstSinkMixin_count] >
                this[SkipFirstSinkMixin_skipCount]) {
                this[DelegatingLike_delegate][SinkLike_notify](next);
            }
        },
    }));
})();

export { Sink_skipFirstMixin as default };
