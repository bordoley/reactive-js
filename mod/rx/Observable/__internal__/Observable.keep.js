/// <reference types="./Observable.keep.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __KeepObserver_predicate } from "../../../__internal__/symbols.js";
import { none, partial, pipe } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";
const Observable_keep = /*@__PURE__*/ (() => {
    const createKeepObserver = (() => {
        return createInstanceFactory(mix(include(Observer_delegatingMixin(), delegatingMixin()), function KeepObserver(instance, delegate, predicate) {
            init(Observer_delegatingMixin(), instance, delegate, delegate);
            init(delegatingMixin(), instance, delegate);
            instance[__KeepObserver_predicate] = predicate;
            return instance;
        }, props({
            [__KeepObserver_predicate]: none,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                if (this[__KeepObserver_predicate](next)) {
                    this[DelegatingLike_delegate][ObserverLike_notify](next);
                }
            },
        }));
    })();
    return (predicate) => pipe(createKeepObserver, partial(predicate), Enumerable_lift);
})();
export default Observable_keep;
