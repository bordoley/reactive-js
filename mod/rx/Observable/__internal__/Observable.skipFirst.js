/// <reference types="./Observable.skipFirst.d.ts" />

import { clampPositiveInteger } from "../../../__internal__/math.js";
import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, SkipFirstObserver_count, SkipFirstObserver_skipCount, } from "../../../__internal__/symbols.js";
import { partial, pipe } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";
import Observable_lift from "./Observable.lift.js";
const Observable_skipFirst = /*@__PURE__*/ (() => {
    const createSkipFirstObserver = (() => {
        return createInstanceFactory(mix(include(Observer_delegatingMixin()), function SkipFirstObserver(instance, delegate, skipCount) {
            init(Observer_delegatingMixin(), instance, delegate, delegate);
            instance[SkipFirstObserver_skipCount] = skipCount;
            return instance;
        }, props({
            [SkipFirstObserver_skipCount]: 0,
            [SkipFirstObserver_count]: 0,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                this[SkipFirstObserver_count]++;
                if (this[SkipFirstObserver_count] > this[SkipFirstObserver_skipCount]) {
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
