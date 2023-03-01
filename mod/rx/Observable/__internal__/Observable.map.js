/// <reference types="./Observable.map.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import StatefulContainer_map from "../../../containers/StatefulContainer/__internal__/StatefulContainer.map.js";
import { none, pipe } from "../../../functions.js";
import { ObserverLike_notify, ObserverLike_scheduler, } from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_map = /*@__PURE__*/ (() => {
    const createMapObserver = (() => {
        const MapObserverMixin_mapper = Symbol("MapObserverMixin_mapper");
        return createInstanceFactory(mix(include(Disposable_delegatingMixin(), Observer_mixin()), function MapObserverMixin(instance, delegate, mapper) {
            init(Disposable_delegatingMixin(), instance, delegate);
            init(Observer_mixin(), instance, delegate[ObserverLike_scheduler]);
            instance[MapObserverMixin_mapper] = mapper;
            return instance;
        }, props({
            [MapObserverMixin_mapper]: none,
        }), {
            [ObserverLike_notify](next) {
                Observer_assertState(this);
                const mapped = this[MapObserverMixin_mapper](next);
                this[DelegatingLike_delegate][ObserverLike_notify](mapped);
            },
        }));
    })();
    return pipe(createMapObserver, StatefulContainer_map(Observable_liftEnumerableOperator));
})();
export default Observable_map;
