/// <reference types="./Observer.createKeepObserver.d.ts" />

import { PredicatedLike_predicate, } from "../../../__internal__/containers.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DelegatingLike_delegate, } from "../../../__internal__/util.js";
import { none } from "../../../functions.js";
import { ObserverLike_notify } from "../../../rx.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_delegatingMixin from "./Observer.delegatingMixin.js";
const Observer_createKeepObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(Observer_delegatingMixin(), Delegating_mixin()), function KeepObserver(instance, delegate, predicate) {
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
export default Observer_createKeepObserver;
