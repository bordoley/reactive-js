/// <reference types="./Observable.keep.d.ts" />

import { PredicatedLike_predicate, } from "../../../__internal__/containers.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DelegatingLike_delegate, } from "../../../__internal__/util.js";
import { none, partial, pipe } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";
const Observable_keep = /*@__PURE__*/ (() => {
    const createKeepObserver = (() => createInstanceFactory(mix(include(Observer_delegatingMixin(), Delegating_mixin()), function KeepObserver(instance, delegate, predicate) {
        init(Observer_delegatingMixin(), instance, delegate, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[PredicatedLike_predicate] = predicate;
        return instance;
    }, props({
        [PredicatedLike_predicate]: none,
    }), {
        [ObserverLike_notify](next) {
            Observer_assertState(this);
            if (this[PredicatedLike_predicate](next)) {
                this[DelegatingLike_delegate][ObserverLike_notify](next);
            }
        },
    })))();
    return (predicate) => pipe(createKeepObserver, partial(predicate), Enumerable_lift);
})();
export default Observable_keep;
