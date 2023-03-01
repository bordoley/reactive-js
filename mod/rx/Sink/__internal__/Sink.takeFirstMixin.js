/// <reference types="./Sink.takeFirstMixin.d.ts" />

import { DelegatingLike_delegate, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { pipe, returns } from "../../../functions.js";
import { ObserverLike_notify } from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
const Sink_takeFirstMixin = /*@__PURE__*/ (() => {
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
        [ObserverLike_notify](next) {
            this[TakeFirstSinkMixin_count]++;
            this[DelegatingLike_delegate][ObserverLike_notify](next);
            if (this[TakeFirstSinkMixin_count] >= this[TakeFirstSinkMixin_takeCount]) {
                pipe(this, Disposable_dispose());
            }
        },
    }));
})();
export default Sink_takeFirstMixin;
