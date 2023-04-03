/// <reference types="./Observable.map.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { MapObserver_mapper } from "../../../__internal__/symbols.js";
import { none, partial, pipe } from "../../../functions.js";
import { DispatcherLike_scheduler, ObserverLike_notify, } from "../../../rx.js";
import { BufferLike_capacity, QueueableLike_backpressureStrategy, } from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_map = /*@__PURE__*/ (() => {
    const createMapObserver = (() => {
        return createInstanceFactory(mix(include(Disposable_delegatingMixin(), Observer_mixin()), function MapObserver(instance, delegate, mapper) {
            init(Disposable_delegatingMixin(), instance, delegate);
            init(Observer_mixin(), instance, delegate[DispatcherLike_scheduler], delegate[BufferLike_capacity], delegate[QueueableLike_backpressureStrategy]);
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
    return ((mapper) => pipe(createMapObserver, partial(mapper), Observable_liftEnumerableOperator));
})();
export default Observable_map;
