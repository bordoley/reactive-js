/// <reference types="./Observable.map.d.ts" />

import { MappingLike_selector, } from "../../../__internal__/containers.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DelegatingLike_delegate, } from "../../../__internal__/util.js";
import { none, partial, pipe } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";
const Observable_map = /*@__PURE__*/ (() => {
    const createMapObserver = (() => createInstanceFactory(mix(include(Observer_delegatingMixin(), Delegating_mixin()), function MapObserver(instance, delegate, selector) {
        init(Observer_delegatingMixin(), instance, delegate, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[MappingLike_selector] = selector;
        return instance;
    }, props({
        [MappingLike_selector]: none,
    }), {
        [ObserverLike_notify](next) {
            Observer_assertState(this);
            const mapped = this[MappingLike_selector](next);
            this[DelegatingLike_delegate][ObserverLike_notify](mapped);
        },
    })))();
    return ((selector) => pipe(createMapObserver, partial(selector), Enumerable_lift));
})();
export default Observable_map;
