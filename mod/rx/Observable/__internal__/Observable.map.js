/// <reference types="./Observable.map.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { MapObserver_mapper } from "../../../__internal__/symbols.js";
import { none, partial, pipe } from "../../../functions.js";
import { ObserverLike_notify, } from "../../../rx.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";
const Observable_map = /*@__PURE__*/ (() => {
    const createMapObserver = (() => {
        return createInstanceFactory(mix(include(Observer_delegatingMixin(), delegatingMixin()), function MapObserver(instance, delegate, mapper) {
            init(Observer_delegatingMixin(), instance, delegate, delegate);
            init(delegatingMixin(), instance, delegate);
            instance[MapObserver_mapper] = mapper;
            return instance;
        }, props({
            [MapObserver_mapper]: none,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                const mapped = this[MapObserver_mapper](next);
                this[DelegatingLike_delegate][ObserverLike_notify](mapped);
            },
        }));
    })();
    return ((mapper) => pipe(createMapObserver, partial(mapper), Enumerable_lift));
})();
export default Observable_map;
