/// <reference types="./Observable.takeFirst.d.ts" />

import { max } from "../../../__internal__/math.js";
import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import { ObserverLike_notify, ObserverLike_scheduler, } from "../../../rx.js";
import { DisposableLike_dispose } from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_takeFirst = /*@__PURE__*/ (() => {
    const createTakeFirstObserver = (() => {
        const TakeFirstObserverMixin_takeCount = Symbol("TakeFirstObserverMixin_takeCount");
        const TakeFirstObserverMixin_count = Symbol("TakeFirstObserverMixin_count");
        return createInstanceFactory(mix(include(Disposable_delegatingMixin(), Observer_mixin()), function TakeFirstObserverMixin(instance, delegate, takeCount) {
            init(Disposable_delegatingMixin(), instance, delegate);
            init(Observer_mixin(), instance, delegate[ObserverLike_scheduler]);
            instance[TakeFirstObserverMixin_takeCount] = takeCount;
            if (takeCount === 0) {
                instance[DisposableLike_dispose]();
            }
            return instance;
        }, props({
            [TakeFirstObserverMixin_count]: 0,
            [TakeFirstObserverMixin_takeCount]: 0,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                this[TakeFirstObserverMixin_count]++;
                this[DelegatingLike_delegate][ObserverLike_notify](next);
                if (this[TakeFirstObserverMixin_count] >=
                    this[TakeFirstObserverMixin_takeCount]) {
                    this[DisposableLike_dispose]();
                }
            },
        }));
    })();
    return ((options = {}) => {
        var _a;
        const { count = max((_a = options.count) !== null && _a !== void 0 ? _a : 1, 0) } = options;
        return pipe(createTakeFirstObserver, partial(count), Observable_liftEnumerableOperator);
    });
})();
export default Observable_takeFirst;
