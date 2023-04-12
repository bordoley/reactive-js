/// <reference types="./Observable.skipFirst.d.ts" />

import { clampPositiveInteger } from "../../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __SkipFirstObserver_count, __SkipFirstObserver_skipCount, } from "../../../__internal__/symbols.js";
import { DelegatingLike_delegate, } from "../../../__internal__/util.js";
import { partial, pipe } from "../../../functions.js";
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ObserverLike_notify, } from "../../../rx.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";
import Observable_lift from "./Observable.lift.js";
const Observable_skipFirst = /*@__PURE__*/ (() => {
    const createSkipFirstObserver = (() => {
        return createInstanceFactory(mix(include(Observer_delegatingMixin(), Delegating_mixin()), function SkipFirstObserver(instance, delegate, skipCount) {
            init(Observer_delegatingMixin(), instance, delegate, delegate);
            init(Delegating_mixin(), instance, delegate);
            instance[__SkipFirstObserver_skipCount] = skipCount;
            return instance;
        }, props({
            [__SkipFirstObserver_skipCount]: 0,
            [__SkipFirstObserver_count]: 0,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                this[__SkipFirstObserver_count]++;
                if (this[__SkipFirstObserver_count] >
                    this[__SkipFirstObserver_skipCount]) {
                    this[DelegatingLike_delegate][ObserverLike_notify](next);
                }
            },
        }));
    })();
    return ((options = {}) => {
        const count = clampPositiveInteger(options?.count ?? 1);
        const op = pipe(createSkipFirstObserver, partial(count), Observable_lift({
            [ObservableLike_isEnumerable]: true,
            [ObservableLike_isRunnable]: true,
        }));
        return (obs) => (count > 0 ? op(obs) : obs);
    });
})();
export default Observable_skipFirst;
