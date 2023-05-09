/// <reference types="./Observable.takeFirst.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { __TakeFirstObserver_count, __TakeFirstObserver_takeCount, } from "../../__internal__/symbols.js";
import { DelegatingLike_delegate, } from "../../__internal__/types.js";
import { partial, pipe } from "../../functions.js";
import { DisposableLike_dispose, ObserverLike_notify, } from "../../types.js";
const Observable_takeFirst = /*@__PURE__*/ (() => {
    const createTakeFirstObserver = (() => {
        return createInstanceFactory(mix(include(Observer_delegatingMixin(), Delegating_mixin()), function TakeFirstObserver(instance, delegate, takeCount) {
            init(Observer_delegatingMixin(), instance, delegate, delegate);
            init(Delegating_mixin(), instance, delegate);
            instance[__TakeFirstObserver_takeCount] = takeCount;
            if (takeCount === 0) {
                instance[DisposableLike_dispose]();
            }
            return instance;
        }, props({
            [__TakeFirstObserver_count]: 0,
            [__TakeFirstObserver_takeCount]: 0,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                this[__TakeFirstObserver_count]++;
                this[DelegatingLike_delegate][ObserverLike_notify](next);
                if (this[__TakeFirstObserver_count] >=
                    this[__TakeFirstObserver_takeCount]) {
                    this[DisposableLike_dispose]();
                }
            },
        }));
    })();
    return ((options = {}) => {
        const count = clampPositiveInteger(options.count ?? 1);
        return pipe(createTakeFirstObserver, partial(count), Enumerable_lift);
    });
})();
export default Observable_takeFirst;
