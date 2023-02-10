/// <reference types="./Sink.takeFirstMixin.d.ts" />
import { mix, include, init, props, DelegatingLike_delegate } from '../../../__internal__/mixins.mjs';
import { returns, pipe } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_delegatingMixin from '../../../util/Disposable/__internal__/Disposable.delegatingMixin.mjs';
import Disposable_dispose from '../../../util/Disposable/__internal__/Disposable.dispose.mjs';

const Sink_takeFirstMixin = 
/*@__PURE__*/ (() => {
    const TakeFirstSinkMixin_takeCount = Symbol("TakeFirstSinkMixin_takeCount");
    const TakeFirstSinkMixin_count = Symbol("TakeFirstSinkMixin_count");
    return returns(mix(include(Disposable_delegatingMixin()), function TakeFirstSinkMixin(instance, delegate, takeCount) {
        init(Disposable_delegatingMixin(), instance, delegate);
        instance[TakeFirstSinkMixin_takeCount] = takeCount;
        if (takeCount === 0) {
            pipe(instance, Disposable_dispose());
        }
        return instance;
    }, props({
        [TakeFirstSinkMixin_count]: 0,
        [TakeFirstSinkMixin_takeCount]: 0,
    }), {
        [SinkLike_notify](next) {
            this[TakeFirstSinkMixin_count]++;
            this[DelegatingLike_delegate][SinkLike_notify](next);
            if (this[TakeFirstSinkMixin_count] >=
                this[TakeFirstSinkMixin_takeCount]) {
                pipe(this, Disposable_dispose());
            }
        },
    }));
})();

export { Sink_takeFirstMixin as default };
