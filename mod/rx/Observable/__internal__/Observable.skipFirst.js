/// <reference types="./Observable.skipFirst.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import { ObserverLike_notify, ObserverLike_scheduler, } from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_skipFirst = 
/*@__PURE__*/ (() => {
    const createSkipFirstObserver = (() => {
        const SkipFirstObserverMixin_skipCount = Symbol("SkipFirstObserverMixin_skipCount");
        const SkipFirstObserverMixin_count = Symbol("SkipFirstObserverMixin_count");
        return createInstanceFactory(mix(include(Disposable_delegatingMixin(), Observer_mixin()), function SkipFirstObserverMixin(instance, delegate, skipCount) {
            init(Disposable_delegatingMixin(), instance, delegate);
            init(Observer_mixin(), instance, delegate[ObserverLike_scheduler]);
            instance[SkipFirstObserverMixin_skipCount] = skipCount;
            return instance;
        }, props({
            [SkipFirstObserverMixin_skipCount]: 0,
            [SkipFirstObserverMixin_count]: 0,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                this[SkipFirstObserverMixin_count]++;
                if (this[SkipFirstObserverMixin_count] >
                    this[SkipFirstObserverMixin_skipCount]) {
                    this[DelegatingLike_delegate][ObserverLike_notify](next);
                }
            },
        }));
    })();
    return (options = {}) => {
        const { count = 1 } = options;
        const lifted = pipe(createSkipFirstObserver, partial(count), Observable_liftEnumerableOperator);
        return obs => (count > 0 ? pipe(obs, lifted) : obs);
    };
})();
export default Observable_skipFirst;
